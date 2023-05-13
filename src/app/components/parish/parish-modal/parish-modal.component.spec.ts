import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParishModalComponent } from './parish-modal.component';

describe('ParishModalComponent', () => {
  let component: ParishModalComponent;
  let fixture: ComponentFixture<ParishModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParishModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
