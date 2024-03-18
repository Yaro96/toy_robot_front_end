import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-robot',
  standalone: true,
  imports: [],
  templateUrl: './robot.component.html',
  styleUrl: './robot.component.scss'
})
export class RobotComponent {
  @Input() direction?: Direction;
}

export type Robot = {
  x: number;
  y: number;
  direction: Direction;
}

export enum Direction {
  NORTH = 'NORTH',
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST'
}