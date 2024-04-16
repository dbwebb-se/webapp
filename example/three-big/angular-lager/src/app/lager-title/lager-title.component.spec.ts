import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagerTitleComponent } from './lager-title.component';

describe('LagerTitleComponent', () => {
  let component: LagerTitleComponent;
  let fixture: ComponentFixture<LagerTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LagerTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LagerTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
