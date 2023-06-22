import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleStandComponent } from './example-stand.component';

describe('ExampleStandComponent', () => {
  let component: ExampleStandComponent;
  let fixture: ComponentFixture<ExampleStandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleStandComponent]
    });
    fixture = TestBed.createComponent(ExampleStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
