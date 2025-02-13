import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { Content1Component } from './components/content1/content1.component';
import { Content2Component } from './components/content2/content2.component';
import { Content3Component } from './components/content3/content3.component';
import { Content4Component } from './components/content4/content4.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContentComponent, FeaturedComponent, Content1Component, Content2Component, Content3Component, Content4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
