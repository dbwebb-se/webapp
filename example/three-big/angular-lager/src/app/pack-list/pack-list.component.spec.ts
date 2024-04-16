import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackListComponent } from './pack-list.component';

describe('PackListComponent', () => {
  let component: PackListComponent;
  let fixture: ComponentFixture<PackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
