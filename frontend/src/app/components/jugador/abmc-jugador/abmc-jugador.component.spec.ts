import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmcJugadorComponent } from './abmc-jugador.component';

describe('AbmcJugadorComponent', () => {
  let component: AbmcJugadorComponent;
  let fixture: ComponentFixture<AbmcJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmcJugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmcJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
