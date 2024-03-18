import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Direction, Robot, RobotComponent } from '../robot/robot.component';
import { DEFAULT_SIZE } from '../app.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, RobotComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  @Input() size: number = DEFAULT_SIZE;
  @Input() robot!: Robot;

  get sizeArray(): number[] {
    return Array.from({ length: this.size }, (_, i) => i);
  }

  constructor() {
    window.addEventListener('keydown', this.handleKeyboardEvent.bind(this));
  }

  move(): void {
    switch (this.robot.direction) {
      case 'NORTH':
        if (this.robot.x < this.size - 1)
          this.robot.x++;
        break;
      case 'SOUTH':
        if (this.robot.x > 0)
          this.robot.x--;
        break;
      case 'EAST':
        if (this.robot.y < this.size - 1)
          this.robot.y++;
        break;
      case 'WEST':
        if (this.robot.y > 0)
          this.robot.y--;
        break;
    }
  }

  rotateLeft(): void {
    switch (this.robot.direction) {
      case 'NORTH':
        this.robot.direction = Direction.WEST;
        break;
      case 'SOUTH':
        this.robot.direction = Direction.EAST;
        break;
      case 'EAST':
        this.robot.direction = Direction.NORTH;
        break;
      case 'WEST':
        this.robot.direction = Direction.SOUTH;
        break;
    }
  }

  rotateRight(): void {
    switch (this.robot.direction) {
      case 'NORTH':
        this.robot.direction = Direction.EAST;
        break;
      case 'SOUTH':
        this.robot.direction = Direction.WEST;
        break;
      case 'EAST':
        this.robot.direction = Direction.SOUTH;
        break;
      case 'WEST':
        this.robot.direction = Direction.NORTH;
        break;
    }
  }

  @HostListener('window.keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.move();
        break;
      case 'ArrowLeft':
        this.rotateLeft();
        break;
      case 'ArrowRight':
        this.rotateRight();
        break;
    }
  }
}
