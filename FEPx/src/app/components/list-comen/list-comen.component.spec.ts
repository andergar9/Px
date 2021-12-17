import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComenComponent } from './list-comen.component';

describe('ListComenComponent', () => {
  let component: ListComenComponent;
  let fixture: ComponentFixture<ListComenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
