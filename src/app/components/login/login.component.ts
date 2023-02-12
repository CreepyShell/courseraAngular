import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    remember: false,
  };
  constructor(public matDialogRef: MatDialogRef<LoginComponent>) {}

  onSubmit() {
    console.log(JSON.stringify(this.user));
    this.matDialogRef.close();
  }
  ngOnInit(): void {}
}
