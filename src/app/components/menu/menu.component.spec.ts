import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { DishService } from 'src/app/services/dish.service';
import { DISHES } from 'src/models/dishes';
import { of, Observable } from 'rxjs';
import { Dish } from 'src/models/dish';
import { environment } from 'src/environments/environment';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TemplateComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    const dishServiceStub = {
      getAllDishes: function (): Observable<Dish[]> {
        return of(DISHES);
      },
    };
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        RouterTestingModule.withRoutes([
          { path: 'menu', component: MenuComponent },
        ]),
      ],
      declarations: [MenuComponent],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: 'baseUrl', useValue: environment.serverURL },
      ],
    }).compileComponents();

    const dishServ = TestBed.inject(DishService);

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('4 dishes', () => {
    expect(component.dishes?.length).toBe(4);
    expect(component.dishes![0].id).toBe('0');
    expect(component.dishes![3].featured).toBeFalse();
  });

  it('It should be in the template', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('h1'));
    let element: HTMLElement = de.nativeElement;

    expect(element.textContent).toContain(DISHES[0].name.toUpperCase());
  });
});
