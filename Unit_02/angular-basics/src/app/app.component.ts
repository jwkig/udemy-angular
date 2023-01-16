import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1,2,3];
  obj = {a:1, b: {c:2}};

  inputValue = '';
  // img = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';

  constructor() {
    // setTimeout(() => {
    //   console.log('Timeout is elapsed');
    //   this.img = 'https://thumbnail.imgbin.com/2/18/6/imgbin-react-javascript-library-angularjs-github-89JYbnwWSANSrkV8tMnFuDALH_t.jpg';
    // }, 5000);
  }

  onInput(event: Event) {
     this.inputValue = (<HTMLInputElement>event?.target).value;
  }

  onBlur(val: string) {
    this.inputValue = val;
  }


  onClick() {
    console.log('Click!');
  }
}
