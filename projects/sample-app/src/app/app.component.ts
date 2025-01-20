import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SampleLibComponent} from 'sample-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SampleLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sample-app';
}
