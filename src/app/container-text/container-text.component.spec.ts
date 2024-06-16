import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTextComponent } from './container-text.component';

describe('ContainerTextComponent', () => {
  let component: ContainerTextComponent;
  let fixture: ComponentFixture<ContainerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
