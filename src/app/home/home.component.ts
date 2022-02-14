import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Org Name
  brand = "Research Conferences";

  //Class Binding
  invitation = "h5 mb-4";

  //Image Binding
  imgHome:string ="../../assets/img/bg.jpg";

  //Card Style
  cardStyle = "width: 16rem; height: 33.25rem";

  //Cards Binded Images
  imgFrance:string ="../../assets/img/France.jpg";
  imgSeoul:string ="../../assets/img/Seoul.jpg";
  imgSanfrancisco:string ="../../assets/img/San Francisco.jpg";
  imgBoston:string ="../../assets/img/Boston.jpg";

  //Style Binding
  linkStyle = "none";

  constructor() { }

  ngOnInit(): void {
  }

}
