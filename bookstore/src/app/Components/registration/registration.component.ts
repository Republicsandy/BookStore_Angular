import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  userId=true;
  admin=true;
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[A-Z a-z]{3,}$")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[A-Z a-z 0-9 +_.-]+@[A-z a-z 0-9 .-]+$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+=-]).{8,}$")]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      console.log("User registered successfully");
      let payload = {
        fullName: this.registerForm.value.fullName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        phone: this.registerForm.value.phone
      }
      this.user.signup(payload).subscribe((response: any) => {
        console.log(response)
      }
      )
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  userBar() {
    this.userId = false
    this.admin = false
  }
}
