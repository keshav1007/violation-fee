import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rules',
  templateUrl: 'rules.page.html',
  styleUrls: ['rules.page.scss']
})
export class RulesPage {
  public isLoading: boolean = true;
  public details: any = [];

  constructor(private http: HttpClient){

  }

  private getDetailsApi(){
    let url = './assets/json/police-rules.json';
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
