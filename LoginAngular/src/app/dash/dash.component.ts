import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  dataUser : any;

  constructor(private afauth : AngularFireAuth, private router : Router) { }

  ngOnInit(): void {
    this.afauth.currentUser.then(user => {
      if (user && user.emailVerified) {
        this.dataUser = user;
        console.log(user.email)
      } else if (user && user.email) {
        this.dataUser = user.email;
        console.log(user.displayName)
      } else if (user && user.photoURL) {
        this.dataUser = user;
        console.log(user.photoURL)
      } else {
        this.router.navigate(['/Login']);
      }
    })
  }
}
