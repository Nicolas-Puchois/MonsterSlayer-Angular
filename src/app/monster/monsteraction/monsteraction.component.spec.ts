import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsteractionComponent } from './monsteraction.component';

describe('MonsteractionComponent', () => {
  let component: MonsteractionComponent;
  let fixture: ComponentFixture<MonsteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
