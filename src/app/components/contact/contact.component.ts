import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeedBack } from 'src/models/feedback';
import { ContactType } from 'src/models/contacttype';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup | undefined;
  feedback: FeedBack | undefined;
  role = ContactType;
  constructor(private builder: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.feedbackForm = this.builder.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: '',
    });
  }

  onSubmit() {
    if (this.feedbackForm?.valid) {
      this.feedback = this.feedbackForm?.value;
      console.log(JSON.stringify(this.feedback));
      this.feedbackForm?.reset();
    }
  }
  keys(): string[] {
    var keys = Object.keys(this.role);
    return keys.slice(keys.length / 2);
  }
  ngOnInit(): void {}
}
