import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongDetailsComponent } from './long-details.component';

describe('LongDetailsComponent', () => {
  let component: LongDetailsComponent;
  let fixture: ComponentFixture<LongDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
