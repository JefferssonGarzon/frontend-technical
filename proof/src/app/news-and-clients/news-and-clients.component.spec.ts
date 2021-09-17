import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndClientsComponent } from './news-and-clients.component';

describe('NewsAndClientsComponent', () => {
  let component: NewsAndClientsComponent;
  let fixture: ComponentFixture<NewsAndClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsAndClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
