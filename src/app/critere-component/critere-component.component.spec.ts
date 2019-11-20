import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritereComponentComponent } from './critere-component.component';

describe('CritereComponentComponent', () => {
  let component: CritereComponentComponent;
  let fixture: ComponentFixture<CritereComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritereComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritereComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
