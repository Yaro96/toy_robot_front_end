import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { Direction } from '../robot/robot.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move robot north if direction is NORTH and x is less than size - 1', () => {
    component.size = 5;
    component.robot = { x: 3, y: 3, direction: Direction.NORTH };
    component.move();
    expect(component.robot).toEqual({ x: 4, y: 3, direction: Direction.NORTH });
  });

  it('should move robot south if direction is SOUTH and x is greater than 0', () => {
    component.size = 5;
    component.robot = { x: 3, y: 3, direction: Direction.SOUTH };
    component.move();
    expect(component.robot).toEqual({ x: 2, y: 3, direction: Direction.SOUTH });
  });

  it('should move robot east if direction is EAST and y is less than size - 1', () => {
    component.size = 5;
    component.robot = { x: 3, y: 3, direction: Direction.EAST };
    component.move();
    expect(component.robot).toEqual({ x: 3, y: 4, direction: Direction.EAST });
  });

  it('should move robot west if direction is WEST and y is greater than 0', () => {
    component.size = 5;
    component.robot = { x: 3, y: 3, direction: Direction.WEST };
    component.move();
    expect(component.robot).toEqual({ x: 3, y: 2, direction: Direction.WEST });
  });

  it('should not move robot north if direction is NORTH and x is equal to size - 1', () => {
    component.size = 5;
    component.robot = { x: 4, y: 3, direction: Direction.NORTH };
    component.move();
    expect(component.robot).toEqual({ x: 4, y: 3, direction: Direction.NORTH });
  });

  // Add similar tests for other directions and boundary conditions

  it('should rotate robot left', () => {
    component.robot = { x: 3, y: 3, direction: Direction.NORTH };
    component.rotateLeft();
    expect(component.robot.direction).toEqual(Direction.WEST);
  });

  it('should rotate robot right', () => {
    component.robot = { x: 3, y: 3, direction: Direction.NORTH };
    component.rotateRight();
    expect(component.robot.direction).toEqual(Direction.EAST);
  });

  it('should handle ArrowUp keydown event', () => {
    spyOn(component, 'move');
    const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    window.dispatchEvent(event);
    expect(component.move).toHaveBeenCalled();
  });

  it('should handle ArrowLeft keydown event', () => {
    spyOn(component, 'rotateLeft');
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
    window.dispatchEvent(event);
    expect(component.rotateLeft).toHaveBeenCalled();
  });

  it('should handle ArrowRight keydown event', () => {
    spyOn(component, 'rotateRight');
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    window.dispatchEvent(event);
    expect(component.rotateRight).toHaveBeenCalled();
  });
});
