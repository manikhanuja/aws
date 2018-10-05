import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollyDemoComponent } from './polly-demo.component';

describe('PollyDemoComponent', () => {
  let component: PollyDemoComponent;
  let fixture: ComponentFixture<PollyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
