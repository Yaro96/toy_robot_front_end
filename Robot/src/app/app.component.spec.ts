import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Direction, Robot } from './robot/robot.component';

describe('AppComponent', () => {

  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    component = TestBed.createComponent(AppComponent).componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should update robot when placed', () => {
    const robot: Robot = { x: 1, y: 2, direction: Direction.NORTH };
    component.onPlaced(robot);
    expect(component.robot).toEqual(robot);
  });

  it('should update lastReport when report is called', () => {
    const robot: Robot = { x: 1, y: 2, direction: Direction.NORTH };
    component.robot = robot;
    component.report();
    expect(component.lastReport).toEqual('x: 1\ty: 2\tdirection: NORTH');
  });


});
