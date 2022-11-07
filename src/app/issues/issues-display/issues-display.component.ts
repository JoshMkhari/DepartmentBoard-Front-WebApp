import { Component, OnInit } from '@angular/core';
import {IssuesServiceService} from "../issues-service.service";
import {Subscription} from "rxjs";
import {IssueModel} from "../../IssuesModel";

@Component({
  selector: 'app-issues-display',
  templateUrl: './issues-display.component.html',
  styleUrls: ['./issues-display.component.css']
})
export class IssuesDisplayComponent implements OnInit {

  issues:IssueModel[] = [];

  constructor(public issueservice: IssuesServiceService) { }

  private issuesubscription!: Subscription;

  ngOnInit(): void {
    this.issueservice.getissue_service();
    this.issuesubscription = this.issueservice.getUpdateListener()
      .subscribe((issues:IssueModel[])=>
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
