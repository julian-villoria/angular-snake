import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
const BG_COLOUR = '#231f20';
const SNAKE_COLOUR = '#c2c2c2';
const FOOD_COLOUR = '#e66916';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements AfterViewInit {
  // its important myCanvas matches the variable name in the template
  @ViewChild('canvas')
  canvas?: ElementRef<HTMLCanvasElement> | null  ;

  public context?: CanvasRenderingContext2D | null;

  ngAfterViewInit(): void {
    this.context = this.canvas?.nativeElement.getContext('2d');
  }

const BG_COLOUR = '#231f20';
const SNAKE_COLOUR = '#c2c2c2';
const FOOD_COLOUR = '#e66916';



}
