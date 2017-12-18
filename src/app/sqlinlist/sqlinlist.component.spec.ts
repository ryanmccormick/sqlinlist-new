import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlinlistComponent } from './sqlinlist.component';

describe('SqlinlistComponent', () => {
  let component: SqlinlistComponent;
  let fixture: ComponentFixture<SqlinlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlinlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlinlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
