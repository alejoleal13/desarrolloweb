import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsemestreComponent } from './listsemestre.component';

describe('ListsemestreComponent', () => {
  let component: ListsemestreComponent;
  let fixture: ComponentFixture<ListsemestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsemestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
