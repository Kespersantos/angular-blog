import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string= "https://via.placeholder.com/150";
  contentTitle:string="Titulo";
  contentDescription:string="Texto";

  constructor() { }

  ngOnInit(): void {
  }

}
