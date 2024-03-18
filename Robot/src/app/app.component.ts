import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaceRobotFormComponent } from './place-robot-form/place-robot-form.component';
import { Robot } from './robot/robot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, BoardComponent, PlaceRobotFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Toy Robot';

  size: number = DEFAULT_SIZE;
  robot!: Robot;
  lastReport: string = '';

  onPlaced(robot: Robot) {
    this.robot = robot;
  }

  report() {
    this.lastReport = `x: ${this.robot.x}\ty: ${this.robot.y}\tdirection: ${this.robot.direction}`;
  }

}

export const DEFAULT_SIZE: number = 5;
