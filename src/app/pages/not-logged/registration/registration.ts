import { Component } from '@angular/core';
import { Header } from '../../../components/not-logged/header/header';
import { SignIn } from '../../../components/not-logged/sign-in/sign-in';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ Header, SignIn],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {}
