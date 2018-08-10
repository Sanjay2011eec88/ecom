import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  loadComponent = false;
  ngOnInit(){
    this.loadComponent = false;
  }
  loadMyChildComponent() {
    console.log(this.loadComponent);
    this.loadComponent = true;
    console.log(this.loadComponent);
  }

}
