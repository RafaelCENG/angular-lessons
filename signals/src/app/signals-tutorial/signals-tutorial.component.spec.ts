import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsTutorialComponent } from './signals-tutorial.component';

describe('SignalsTutorialComponent', () => {
  let component: SignalsTutorialComponent;
  let fixture: ComponentFixture<SignalsTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
