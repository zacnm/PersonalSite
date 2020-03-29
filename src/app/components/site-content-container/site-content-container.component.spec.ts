import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteContentContainerComponent } from './site-content-container.component';

describe('SiteContentContainerComponent', () => {
  let component: SiteContentContainerComponent;
  let fixture: ComponentFixture<SiteContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
