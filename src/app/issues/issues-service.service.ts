import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {IssueModel} from "../IssuesModel";


@Injectable({
  providedIn: 'root'
})
export class IssuesServiceService {

  private issuedisplay:IssueModel[] = [];
  private updateissuedisplay = new Subject<IssueModel[]>();

  constructor(private http: HttpClient) { }

  addissue_service(pid:string, pname:string)
  {
    this.http.post<{message:string,issue:IssueModel}>('https://localhost:3000/api/issue',{id:pid,name:pname})
      .subscribe((theissue)=>
      {
        this.issuedisplay.push(theissue.issue);
        this.updateissuedisplay.next([...this.issuedisplay]);
      })
  }

  getissue_service()
  {
    //alert("getissue_service")
    this.http.get<{message:string,issue:IssueModel[]}>('https://localhost:3000/api/issue')
      .subscribe((theissue)=>
      {
        //https://stackoverflow.com/questions/2799283/use-a-json-array-with-objects-with-javascript
        const arrayOfObjects = theissue.issue;
        for (let i = 0; i < theissue.issue.length; i++) {
          const object = arrayOfObjects[i];
          const issuemodel = new IssueModel(object._id,object.id,object.name,object.__v);
          this.issuedisplay.push(issuemodel);
          this.updateissuedisplay.next([...this.issuedisplay]);
        }
      })
  }

  deleteissue_service(issueid: string)
  {
    this.http.delete('https://localhost:3000/api/issue' + issueid)
      .subscribe(()=>
      {
        this.issuedisplay = this.issuedisplay.filter(issue => issue._id !== issueid);
        this.updateissuedisplay.next([...this.issuedisplay]);
      })
  }

  getUpdateListener()
  {
    return this.updateissuedisplay.asObservable();
  }
}


