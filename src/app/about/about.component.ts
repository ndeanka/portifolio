import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  image  = 'assets/images/willy.jpg';
  name = 'William Mlula';
  profile = 'Frontend Developer';
  email = 'williammlula4@gmail.com';
  phone = '+255 713 903 936';

}
