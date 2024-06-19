import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterstatsComponent } from './monsterstats.component';

describe('MonsterstatsComponent', () => {
  let component: MonsterstatsComponent;
  let fixture: ComponentFixture<MonsterstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonsterstatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
