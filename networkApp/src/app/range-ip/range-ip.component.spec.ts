import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIpComponent } from './range-ip.component';

describe('SingleIpComponent', () => {
  let component: SingleIpComponent;
  let fixture: ComponentFixture<SingleIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleIpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
