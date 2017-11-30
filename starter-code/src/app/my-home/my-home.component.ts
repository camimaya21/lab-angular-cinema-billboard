import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaService } from '../../services/Cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(private router: Router, public infoMovies:CinemaService) { }
  listOfMovies;

  ngOnInit() {
  }

getMovies(){
    this.listOfMovies=this.infoMovies.getMovies();
    console.log("show movies!!!" + this.infoMovies)
  }

}
