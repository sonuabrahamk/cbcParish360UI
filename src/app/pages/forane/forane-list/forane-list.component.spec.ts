import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForaneListComponent } from './forane-list.component';

describe('ForaneListComponent', () => {
  let component: ForaneListComponent;
  let fixture: ComponentFixture<ForaneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForaneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForaneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
