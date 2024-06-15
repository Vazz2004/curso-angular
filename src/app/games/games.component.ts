import { Component, Input, Output, input, EventEmitter } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent, CommentsComponent],
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
      name: 'fifa',
      urlImg: 'https://i.blogs.es/f83ad0/fifa24/840_560.jpeg',
      precio: '250.000'
    },
    {
      id: 2,
      name: 'Gears of ward',
      urlImg: 'https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2016/07/gears_of_war_4-4k-wallpaper-characters-.jpg',
      precio: '250.000'
    }
  ]
}
