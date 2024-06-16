import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GalleryCarouselComponent } from "../gallery-carousel/gallery-carousel.component";
import { GallerySlideComponent } from "../gallery-slide/gallery-slide.component";

@Component({
  selector: 'app-photo-gallery',
  template: `
    <ngx-gallery-carousel [padding]="'1rem'" [gradientBackground]="false">
      <ngx-gallery-slide header="Gallery" image="images/khang3.jpeg" />
      <ngx-gallery-slide header="Gallery" image="images/khang2.jpeg" />
      <ngx-gallery-slide header="Gallery" image="images/khang1.jpeg" />
      <ngx-gallery-slide header="Gallery" image="images/khang4.jpeg" />
    </ngx-gallery-carousel>
  `,
  standalone: true,
  imports: [GalleryCarouselComponent, GallerySlideComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoGalleryComponent {}
