import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  @ViewChild('background', { static: false }) background: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.background);
    const videoElem: HTMLVideoElement = this.background.nativeElement;
    videoElem.play();
  }

  login() {
    this.router.navigate(['app']);
  }

}
