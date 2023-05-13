import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForaneModalComponent } from './forane-modal.component';

describe('ForaneModalComponent', () => {
  let component: ForaneModalComponent;
  let fixture: ComponentFixture<ForaneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForaneModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForaneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
