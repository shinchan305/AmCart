import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortDetailsComponent } from './short-details.component';

describe('ShortDetailsComponent', () => {
  let component: ShortDetailsComponent;
  let fixture: ComponentFixture<ShortDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortDetailsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShortDetailsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    component.product = {
      id: '14',
      name: 'Plain Cotton T-Shirt',
      price: 2199,
      discount: 15,
      category: ['women', 'black', 'tshirt'],
      brand: 'Peter England',
      rating: 3,
      image: 'image21'
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
