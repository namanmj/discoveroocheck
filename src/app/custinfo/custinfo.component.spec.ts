import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustinfoComponent } from './custinfo.component';

describe('CustinfoComponent', () => {
  let component: CustinfoComponent;
  let fixture: ComponentFixture<CustinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
