import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonimagenComponent } from './botonimagen.component';

describe('BotonimagenComponent', () => {
  let component: BotonimagenComponent;
  let fixture: ComponentFixture<BotonimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonimagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
