import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private getD:GetDataService) { }
public brand=[];
  ngOnInit() {
  	this.brand=this.getD.getBrand();
console.log(this.brand)
//console.log(this.http)

  }

}
