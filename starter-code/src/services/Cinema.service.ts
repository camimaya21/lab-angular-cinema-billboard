import { Injectable } from '@angular/core';
import { IMovies } from '../app/interfaces/IMovies';
import sampleMovies from '../sample-movies';


@Injectable()
export class CinemaService {
  Movies: Array<IMovies> = sampleMovies

  constructor() { }

  getMovies(){
    console.log(this.Movies);
    return this.Movies;
  }

  getDetail(id){
      return this.Movies[id];
  }

}
