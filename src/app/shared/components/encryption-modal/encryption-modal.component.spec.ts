import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionModalComponent } from './encryption-modal.component';

describe('EncryptionModalComponent', () => {
  let component: EncryptionModalComponent;
  let fixture: ComponentFixture<EncryptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncryptionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
