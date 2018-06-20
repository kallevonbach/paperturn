import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  submitted: boolean;
  response: string;
  username: string;
  usermail: string;

  constructor(private http: HttpClient) {   }
  
  ngOnInit() {
    this.submitted = false;
  }
  getName(event){
    this.username = event.target.value;
  } 
  getMail(event){
    this.usermail = event.target.value;
  } 
  signupUser(event){   
    const formData = new FormData();
    formData.append('name', this.username);
    formData.append('email', this.usermail);
    this.http.post('http://paperturn.casperbach.dk/php/form.php', formData)
    .subscribe((data) => {
      this.response = "Name and email have been added";
      this.submitted = true;
    }, (error) => {
      this.submitted = true;
      this.response = "Ooops, something went wrong";
    })
    event.preventDefault();
  }
}

