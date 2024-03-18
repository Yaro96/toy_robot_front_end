import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceRobotFormComponent } from './place-robot-form.component';
import { Direction, Robot } from '../robot/robot.component';

describe('PlaceRobotFormComponent', () => {
  let component: PlaceRobotFormComponent;
  let fixture: ComponentFixture<PlaceRobotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceRobotFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceRobotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize placeForm with default values', () => {
    expect(component.placeForm.value).toEqual({ x: '', y: '', direction: '' });
  });

  it('should emit placed event when placeRobot is called with valid form', () => {
    const robot: Robot = { x: 1, y: 2, direction: Direction.NORTH };
    spyOn(component.placed, 'emit');
    component.placeForm.setValue(robot);
    component.placeRobot();
    expect(component.placed.emit).toHaveBeenCalledWith(robot);
  });

  it('should not emit placed event when placeRobot is called with invalid form', () => {
    spyOn(component.placed, 'emit');
    component.placeRobot();
    expect(component.placed.emit).not.toHaveBeenCalled();
  });

  it('should reset placeForm after emitting placed event', () => {
    const robot: Robot = { x: 1, y: 2, direction: Direction.NORTH };
    spyOn(component.placed, 'emit');
    component.placeForm.setValue(robot);
    component.placeRobot();
    expect(component.placeForm.get('x')?.value).toBe(null);
    expect(component.placeForm.get('y')?.value).toBe(null);
    expect(component.placeForm.get('direction')?.value).toBe(null);
  });
});
