
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted=false;
  users='1'
  userId=true;
  admin=true;
  constructor(private formBuilder: FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[A-Z a-z 0-9 +_.-]+@[A-z a-z 0-9 .-]+$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      console.log("User login successfully");
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.user.login(payload).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('token',response.result.accessToken)
      }
      )
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }

  userBar() {
    this.userId = false
    this.admin = false
  }
}
