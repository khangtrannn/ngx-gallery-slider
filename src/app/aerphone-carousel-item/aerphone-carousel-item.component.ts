import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-aerphone-carousel-item',
  templateUrl: './aerphone-carousel-item.component.html',
  styleUrl: './aerphone-carousel-item.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AerphoneCarouselItemComponent {
  image = input.required<string>();

  appComponent = inject(AppComponent);

  onShowDetails(): void {
    this.appComponent.onShowDetails();
  }
}
