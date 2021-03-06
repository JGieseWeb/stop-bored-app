import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidbodyComponent } from './midbody.component';

describe('MidbodyComponent', () => {
  let component: MidbodyComponent;
  let fixture: ComponentFixture<MidbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
