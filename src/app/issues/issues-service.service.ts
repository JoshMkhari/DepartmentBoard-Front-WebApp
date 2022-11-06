import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IssuesServiceService {

  private issuedisplay:{_id:string,id:string,name:string,_v:string}[] = [];
  private updateissuedisplay = new Subject<{_id:string,id:string,name:string,_v:string}[]>();

  constructor(private http: HttpClient) { }

  addissue_service(pid:string, pname:string)
  {
    this.http.post<{message:string,issue:any}>('https://localhost:3000/api/issue',{id:pid,name:pname})
      .subscribe((theissue)=>
      {
        this.issuedisplay.push(theissue.issue);
        this.updateissuedisplay.next([...this.issuedisplay]);
      })
  }

  getissue_service()
  {
    this.http.get<{message:string,issue:any}>('https://localhost:3000/api/issue')
      .subscribe((theissue)=>
      {
        this.issuedisplay.push(theissue.issue);
        this.updateissuedisplay.next([...this.issuedisplay]);
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
