import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {

  public id = '';

  constructor(private _activatedRoute: ActivatedRoute) 
  { 
    this._activatedRoute.paramMap.subscribe((parameters) => 
    {
      //this.movieId = parameters["id"];

      console.log('Movie Id:', parameters.get("id"));
    })
  }
  
  ngOnChanges()
  {
    console.log('ngOnChanges called');
  }

  ngOnInit(): void 
  {
    console.log('ngOnInit called');
  }

  ngAfterContentInit(): void 
  {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit(): void 
  {
    console.log('ngAfterViewInit called');
  } 

}
