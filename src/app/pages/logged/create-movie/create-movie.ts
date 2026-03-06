import { Component } from '@angular/core';
import { CreateMovieModal } from '../../../components/logged/create-movie-modal/create-movie-modal';

@Component({
  selector: 'app-create-movie-page',
  standalone: true,
  imports: [CreateMovieModal],
  templateUrl: './create-movie.html',
  styleUrl: './create-movie.css',
})
export class CreateMoviePage {}
