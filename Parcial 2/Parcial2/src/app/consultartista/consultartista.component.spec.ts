import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultartistaComponent } from './consultartista.component';

describe('ConsultartistaComponent', () => {
  let component: ConsultartistaComponent;
  let fixture: ComponentFixture<ConsultartistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultartistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultartistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
