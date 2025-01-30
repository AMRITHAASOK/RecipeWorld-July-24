import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiListComponent } from './recepi-list.component';

describe('RecepiListComponent', () => {
  let component: RecepiListComponent;
  let fixture: ComponentFixture<RecepiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
