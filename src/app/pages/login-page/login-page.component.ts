import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Ui } from '../../utils/ui';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [Ui, DataService]
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public errors: any[] = [];

  constructor(private fb: FormBuilder, private ui: Ui, private router: Router, private dataService: DataService) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(256),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });


    var token = localStorage.getItem('northwind.token');
    if (token) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {
  }

  showModal() {
    this.ui.setActive('modal');
  }

  hideModal() {
    this.ui.setInactive('modal');
  }

  submit() {
    this.dataService
      .authenticate(this.form.value)
      .subscribe(result => {
        localStorage.setItem('northwind.token', result.token);
        localStorage.setItem('northwind.user', JSON.stringify(result.user));

        this.router.navigateByUrl('/home');
      }, error => {
        this.errors = JSON.parse(error._body).errors;
      });
  }
}
