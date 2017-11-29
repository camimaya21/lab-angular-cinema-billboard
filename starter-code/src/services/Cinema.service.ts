import { Injectable } from '@angular/core';
import { IMovies } from '../app/interfaces/IMovies';
import sampleMovies from '../sample-movies';
import * as _ from 'underscore';


@Injectable()
export class CinemaService {
  Movies: Array<IMovies> = sampleMovies;
  // logMovies: Array<sampleMovies>;

  constructor() { }

  getMovies(){
    console.log(this.Movies);
    return this.Movies;
  }

  getDetail(idMovie:number){
      return _.findWhere(this.Movies, { id: idMovie });
  }

}
