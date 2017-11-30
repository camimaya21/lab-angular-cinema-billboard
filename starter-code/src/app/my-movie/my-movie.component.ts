import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../../services/Cinema.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  constructor(private router: ActivatedRoute, public infoMovies: CinemaService) { }
  movieId: Number;
  movie = {};

  ngOnInit() {
    this.router.params
    .subscribe((params) => this.movieId = Number(params['id'])-1);
    this.movie = this.infoMovies.getDetail(this.movieId);
  }

}
