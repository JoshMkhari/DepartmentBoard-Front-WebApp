import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesDisplayComponent } from './issues-display.component';

describe('IssuesDisplayComponent', () => {
  let component: IssuesDisplayComponent;
  let fixture: ComponentFixture<IssuesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
