import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-issues-create',
  templateUrl: './issues-create.component.html',
  styleUrls: ['./issues-create.component.css']
})
export class IssuesCreateComponent implements OnInit {

  constructor() { }

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
  }

}
