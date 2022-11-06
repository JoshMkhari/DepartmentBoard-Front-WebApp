import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {IssuesServiceService} from "../issues-service.service";

@Component({
  selector: 'app-issues-create',
  templateUrl: './issues-create.component.html',
  styleUrls: ['./issues-create.component.css']
})
export class IssuesCreateComponent implements OnInit {

  constructor(public issueservice: IssuesServiceService) { }

  ngOnInit(): void {
  }

  onaddissue(issueform: NgForm)
  {
    if(issueform.invalid)
    {
      alert('Invalid!')
      return
    }
    alert(issueform.value.enteredID
    + ':'
    + issueform.value.enteredName)

    this.issueservice.addissue_service(issueform.value.enteredID,issueform.value.enteredName)
    issueform.resetForm()
  }

}
