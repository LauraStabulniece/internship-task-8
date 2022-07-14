import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Illustration } from '../interfaces/Illustration';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css'],
})
export class IllustrationComponent implements OnInit {
  @Input() illustration: Illustration = {} as Illustration;
  @Output() illustrationEmitter = new EventEmitter<Illustration>();

  constructor() {}

  ngOnInit(): void {}

  addToCard() {
    this.illustrationEmitter.emit(this.illustration);
  }
}
