import { Component, OnInit } from '@angular/core';
import {IssuesServiceService} from "../issues-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-issues-display',
  templateUrl: './issues-display.component.html',
  styleUrls: ['./issues-display.component.css']
})
export class IssuesDisplayComponent implements OnInit {

  issues:{_id:string,id:string,name:string,_v:string}[] = [];

  constructor(public issueservice: IssuesServiceService) { }

  private issuesubscription!: Subscription;

  ngOnInit(): void {
    this.issueservice.getissue_service();
    this.issuesubscription = this.issueservice.getUpdateListener()
      .subscribe((issues:{_id:string,id:string,name:string,_v:string}[])=>
      {
        this.issues = issues;
      });
  }

  ngOnDestroy()
  {
    this.issuesubscription.unsubscribe();
  }

  ondelete(issueid:string)
  {
    this.issueservice.deleteissue_service(issueid)
  }
}
