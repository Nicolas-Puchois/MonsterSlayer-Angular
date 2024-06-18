import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeractionComponent } from './playeraction.component';

describe('PlayeractionComponent', () => {
  let component: PlayeractionComponent;
  let fixture: ComponentFixture<PlayeractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayeractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayeractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
