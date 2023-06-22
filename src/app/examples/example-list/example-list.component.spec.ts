import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleListComponent } from './example-list.component';

describe('ExampleListComponent', () => {
  let component: ExampleListComponent;
  let fixture: ComponentFixture<ExampleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleListComponent]
    });
    fixture = TestBed.createComponent(ExampleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
