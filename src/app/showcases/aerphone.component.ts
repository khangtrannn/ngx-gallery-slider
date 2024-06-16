import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GalleryCarouselComponent } from "../gallery-carousel/gallery-carousel.component";
import { GallerySlideComponent } from "../gallery-slide/gallery-slide.component";

@Component({
  selector: 'app-aerphone',
  template: `
    <ngx-gallery-carousel>
      <ngx-gallery-slide header="Aerphone" image="images/img2.png" />
      <ngx-gallery-slide header="Aerphone" image="images/img5.png" />
      <ngx-gallery-slide header="Aerphone" image="images/img1.png" />
      <ngx-gallery-slide header="Aerphone" image="images/img6.png" />
      <ngx-gallery-slide header="Aerphone" image="images/img4.png" />
      <ngx-gallery-slide header="Aerphone" image="images/img3.png" />
    </ngx-gallery-carousel>
  `,
  standalone: true,
  imports: [GalleryCarouselComponent, GallerySlideComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AerphoneComponent {}
