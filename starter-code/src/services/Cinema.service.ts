import { Injectable } from '@angular/core';
import { IMovies } from '../interfaces/IMovies'
import * as _ from 'underscore';

@Injectable()
export class CinemaService {

  logMovies: Array<IMovies> = [];

  constructor() { }

  getMovies(){
    return this.logMovies;
  }

  getMovie(idMovie:number){
      return _.findWhere(this.logMovies, { id: idMovie });
  }

}
