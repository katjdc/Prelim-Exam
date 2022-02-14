import { Component } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent {

  form = "width: 30rem";
  Fname = "";
  Lname = "";
  Email = "";
  School= "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
