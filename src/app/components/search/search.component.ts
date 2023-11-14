import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public movieTitle = "";

  constructor(private _activatedRoute: ActivatedRoute) 
  {
    
    this._activatedRoute.params.subscribe((parameters) => 
    {
      this.movieTitle = parameters["movieTitle"];

    })
  }

  ngOnInit(): void {
    
  }

}
