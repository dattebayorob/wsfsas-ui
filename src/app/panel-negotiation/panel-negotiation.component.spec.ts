import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNegotiationComponent } from './panel-negotiation.component';

describe('PanelNegotiationComponent', () => {
  let component: PanelNegotiationComponent;
  let fixture: ComponentFixture<PanelNegotiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelNegotiationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNegotiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
