import { Component, ElementRef, Renderer2, inject, viewChild } from '@angular/core';
import { AerphoneCarouselItemComponent } from './aerphone-carousel-item/aerphone-carousel-item.component';

@Component({
  selector: 'ng-root',
  standalone: true,
  imports: [AerphoneCarouselItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  carouselList = viewChild.required<ElementRef<HTMLElement>>('carouselList');

  #renderer = inject(Renderer2);

  onPrev(): void {

  }

  onNext(): void {
    const aerphoneCarouselItem = this.carouselList().nativeElement.querySelectorAll('app-aerphone-carousel-item');
    this.#renderer.appendChild(this.carouselList().nativeElement, aerphoneCarouselItem[0]);
  }
}
