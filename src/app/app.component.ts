import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attributeDirectives';

  classng='one'
  classng1='two'
  colorValue='blue';
  bgColor='lightblue'
}
