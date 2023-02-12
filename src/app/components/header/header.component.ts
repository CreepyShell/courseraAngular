import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openLoginForm() {
    let d: MatDialogRef<LoginComponent> = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '600px',
      position: {}
    });
  }
}
