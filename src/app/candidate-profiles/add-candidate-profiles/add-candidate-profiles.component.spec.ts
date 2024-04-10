import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidateProfilesComponent } from './add-candidate-profiles.component';

describe('AddCandidateProfilesComponent', () => {
  let component: AddCandidateProfilesComponent;
  let fixture: ComponentFixture<AddCandidateProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCandidateProfilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCandidateProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
