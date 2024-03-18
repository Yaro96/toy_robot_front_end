import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Direction, Robot } from '../robot/robot.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DEFAULT_SIZE } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-robot-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './place-robot-form.component.html',
  styleUrl: './place-robot-form.component.scss'
})
export class PlaceRobotFormComponent {

  @Input() size: number = DEFAULT_SIZE;
  @Output() placed = new EventEmitter<Robot>();

  directions = Object.values(Direction);

  placeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.placeForm = this.formBuilder.group({
      x: ['', [Validators.required, Validators.min(0), Validators.max(this.size - 1)]],
      y: ['', [Validators.required, Validators.min(0), Validators.max(this.size - 1)]],
      direction: ['', Validators.required]
    });
  }

  placeRobot() {
    if (this.placeForm.valid) {
      this.placed.emit(this.placeForm.value);
      this.placeForm.reset();
    }
  }
}
