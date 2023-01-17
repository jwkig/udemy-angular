import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arr: number[] = [1,1,3,5,8,13];

  objs = [
    {title: 'Post 1', author: 'Vladilen', comments: [
        {name: 'Max', text:'Lorem1'},
        {name: 'Max', text:'Lorem2'},
        {name: 'Max', text:'Lorem3'},
      ]},
    {title: 'Post 2', author: 'Vladilen 2', comments: [
        {name: 'Max 2', text:'Lorem1'},
        {name: 'Max 2', text:'Lorem2'},
        {name: 'Max 2', text:'Lorem3'},
      ]}

  ]
}
