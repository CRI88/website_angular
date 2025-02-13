import { Component } from '@angular/core';
import { Content1Component } from '../content1/content1.component';
import { Content2Component } from '../content2/content2.component';
import { Content3Component } from '../content3/content3.component';
import { Content4Component } from '../content4/content4.component';

@Component({
  selector: 'app-content',
  imports: [Content1Component, Content2Component, Content3Component, Content4Component],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
