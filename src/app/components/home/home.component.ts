import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public id = '';

  constructor(private _activatedRoute: ActivatedRoute) 
  { 
    this._activatedRoute.paramMap.subscribe((parameters) => 
    {
      //this.movieId = parameters["id"];

      console.log('Movie Id:', parameters.get("id"));
    })
  }

}
