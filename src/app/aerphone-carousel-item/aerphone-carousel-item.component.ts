import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-aerphone-carousel-item',
  templateUrl: './aerphone-carousel-item.component.html',
  styleUrl: './aerphone-carousel-item.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AerphoneCarouselItemComponent {
  image = input.required<string>();
}
