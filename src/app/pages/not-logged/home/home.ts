import { Component } from '@angular/core';
import { Header } from '../../../components/not-logged/header/header';
import { SignIn } from '../../../components/not-logged/sign-in/sign-in';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, SignIn],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
