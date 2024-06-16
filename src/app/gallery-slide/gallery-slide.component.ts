import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GalleryCarouselComponent } from '../gallery-carousel/gallery-carousel.component';

@Component({
  selector: 'ngx-gallery-slide',
  templateUrl: './gallery-slide.component.html',
  styleUrl: './gallery-slide.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GallerySlideComponent {
  header = input.required<string>();
  image = input.required<string>();

  #carousel = inject(GalleryCarouselComponent);

  onShowDetails(): void {
    this.#carousel.onShowDetails();
  }
}
