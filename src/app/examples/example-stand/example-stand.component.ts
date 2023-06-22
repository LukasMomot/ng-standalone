import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-stand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-stand.component.html',
  styleUrls: ['./example-stand.component.css']
})
export class ExampleStandComponent {
   @Input() text: string = ''
}
