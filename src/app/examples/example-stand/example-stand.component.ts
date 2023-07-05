import { Component, Input, computed, signal } from '@angular/core';
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

  testSignal = signal('This is signal');

  testSignalComputed = computed(() => this.testSignal() + ' Computed');

  handle() {
    console.log('Handle called');
    this.testSignal.set('ABC');
  }
}
