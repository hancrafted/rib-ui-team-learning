import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions: string[] = [];
  counter = signal(0)
  doubleCounter = computed(() => this.counter() * 2);
  
  constructor() {
    effect(() => {
      console.log('Counter value changed:', this.counter());
    });
  }

  increment() {
    this.counter.update((oldValue) => oldValue + 1);
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    this.actions.push('DECREMENT');
  }
}
