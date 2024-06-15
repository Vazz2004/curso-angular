import { Component, Input, Output, input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username: string = '';
  @Output() addFovoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFovoriteEvent.emit(gameName)
  }
  games = [
    {
      id: 1,
      name: 'fifa'
    },
    {
      id: 2,
      name: 'Gears of ward'
    }
  ]
}
