import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
  <h1>Comentarios</h1>
  <img src="https://imgv3.fotor.com/images/share/fotor-ai-generate-a-lifelike-dragon.jpg" alt="">
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam soluta sint earum delectus amet nostrum voluptates dolor animi excepturi iure alias dolorem cumque dicta, praesentium voluptate ab provident! Vitae, eum!</p>
  `,
  styles: `
  img{
    width:100%;
    height:auto;
  }
  `
})
export class CommentsComponent {

}
