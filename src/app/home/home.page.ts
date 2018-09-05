import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  public isLoading: boolean = true;
  public details: any = [];

  constructor(private http: HttpClient){

  }

  private getDetailsApi(){
    let url = './assets/json/violation-details.json';
    return this.http.get(url);
  }

  private getDetails(){
    this.isLoading = true;
    this.getDetailsApi().subscribe((data: any)=>{
      this.details = (data && data.items) || [];
      this.isLoading = false;
    });
  }

  ngOnInit(){
    this.getDetails();
  }

}
