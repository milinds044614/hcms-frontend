import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectDetailsComponent } from './view-project-details.component';

describe('ViewProjectDetailsComponent', () => {
  let component: ViewProjectDetailsComponent;
  let fixture: ComponentFixture<ViewProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProjectDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
