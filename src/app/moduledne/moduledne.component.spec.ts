import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuledneComponent } from './moduledne.component';

describe('ModuledneComponent', () => {
  let component: ModuledneComponent;
  let fixture: ComponentFixture<ModuledneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuledneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuledneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
