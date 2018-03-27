import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
@Injectable()
export class GetDataService {

  constructor(private http:Http) { }
  public br=[];
	getBrand(){
		this.http.get('http://localhost:8089/menu').subscribe(
			(res:Response)=>{
			  //console.log(res.json());
			 
			  this.br.push(res.json())
			 
			  }

		)
	//console.log(this.br);
  	return this.br
  }
  

}
