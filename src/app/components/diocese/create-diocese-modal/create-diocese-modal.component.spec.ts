import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDioceseModalComponent } from './create-diocese-modal.component';

describe('CreateDioceseModalComponent', () => {
  let component: CreateDioceseModalComponent;
  let fixture: ComponentFixture<CreateDioceseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDioceseModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDioceseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
