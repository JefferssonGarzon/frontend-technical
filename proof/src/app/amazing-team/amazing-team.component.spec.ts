import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingTeamComponent } from './amazing-team.component';

describe('AmazingTeamComponent', () => {
  let component: AmazingTeamComponent;
  let fixture: ComponentFixture<AmazingTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazingTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
