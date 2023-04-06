import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { Location } from '@angular/common';
import { Dish } from 'src/models/dish';
import { Comment } from 'src/models/comment';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish: Dish | undefined;
  baseUrl = environment.serverURL;

  @Input()
  value: number | null = 5;

  @ViewChild('rform')
  reviewFormDirective: any;
  currentDate: Date = new Date();

  dishIds: string[] = [];
  prev: string | undefined;
  next: string | undefined;
  preview: string = '';
  dishErrMess: string = '';
  dishCopy: Dish | undefined;

  reviewForm: FormGroup | undefined;
  review: Comment | undefined;

  formErrors: { [key: string]: string } = {
    authorName: '',
    comment: '',
  };

  errors: { [key: string]: { [key: string]: string } } = {
    authorName: {
      required: 'Your name is required',
      minlength: 'Length must be more than 2 symbols',
    },
    comment: {
      required: 'Comment is required',
    },
  };

  constructor(
    private dishService: DishService,
    private router: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.createReviewForm();
  }

  ngOnInit(): void {
    this.dishService.getDishIds().subscribe({
      next: (ids) => (this.dishIds = ids),
      error: (err) => {
        this.dishErrMess = err;
      },
    });
    this.router.params
      .pipe(
        switchMap((param: Params) => this.dishService.getDishById(param['id']))
      )
      .subscribe({
        next: (d) => {
          if (d) {
            this.dish = d;
            this.dishCopy = d;
            this.setPrevNextDish(this.dish.id);
            return;
          }
          this.dish = {
            name: 'not found',
            description: 'not found',
            image: '',
            id: '-1',
            category: '',
            featured: false,
            label: '',
            price: '',
            comments: [],
          };
          this.next = '0';
          this.prev = '0';
        },
        error: (err) => {
          this.dishErrMess = err;
        },
      });
  }

  createReviewForm() {
    this.reviewForm = this.formBuilder.group({
      authorName: ['', [Validators.required, Validators.minLength(2)]],
      stars: [5],
      comment: ['', Validators.required],
    });

    this.reviewForm.valueChanges.subscribe((data) => {
      this.changeValue();
    });
    this.changeValue();
  }

  changeValue(): void {
    if (!this.reviewForm) {
      return;
    }
    let form = this.reviewForm;
    for (let field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        let control = form.get(field);
        if (control && control.dirty && !control.valid) {
          let message = this.errors[field];
          for (let key in control.errors) {
            this.formErrors[field] = `${message[key]}  `;
          }
        }
      }
    }
  }

  setPrevNextDish(currId: string): void {
    let index = this.dishIds.indexOf(currId);
    this.prev =
      this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next =
      this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    if (this.reviewForm && this.reviewForm.valid) {
      this.dishCopy?.comments.push({
        rating: this.value!,
        comment: this.reviewForm.get('comment')?.value,
        author: this.reviewForm.get('authorName')?.value,
        date: this.currentDate.toDateString(),
      });
      this.dishService.putDish(this.dishCopy!).subscribe({
        next: (d) => {
          this.dish = d;
          this.dishCopy = d;
        },
        error: (err) => {
          this.dish = undefined;
          this.dishCopy = undefined;
          this.dishErrMess = err;
        },
      });
      this.reviewForm?.reset({
        authorName: '',
        comment: '',
      });
      this.reviewFormDirective.reset();
      this.value = 5;
    }
  }
}
