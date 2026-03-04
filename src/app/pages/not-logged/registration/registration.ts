import { Component } from '@angular/core';
import { Header } from '../../../components/not-logged/header/header';
import { Signup } from '../../../components/not-logged/sign-up/sign-up';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ Header, Signup],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {}
