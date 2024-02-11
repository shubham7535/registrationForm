import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private Authservice : AuthService){

  }

  registration = new FormGroup({
    FirstName: new FormControl("", [Validators.required]),
    LastName: new FormControl("",[ Validators.required]),
    Email: new FormControl("",[ Validators.required]) ,
    Password: new FormControl("",[ Validators.required]) 
  });

  UserData= [ this.registration.value.FirstName , 
    this.registration.value.LastName ,
    this.registration.value.Email,
    this.registration.value.Password] ;

  register(){
     this.Authservice.registerUSer([ this.registration.value.FirstName , 
      this.registration.value.LastName ,
      this.registration.value.Email,
      this.registration.value.Password])
      .subscribe(res => (
      console.log(res)
     ))
    console.log(this.registration);
  }

  get FirstName(): FormControl{
    return this.registration.get("FirstName") as FormControl;
  }
  get LastName(): FormControl{
    return this.registration.get("LastName") as FormControl;
  }
  get Email(): FormControl{
    return this.registration.get("Email") as FormControl;
  }
  get Password(): FormControl{
    return this.registration.get("Password") as FormControl;
  }

}
