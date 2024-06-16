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
  prevButton = viewChild.required<ElementRef<HTMLButtonElement>>('prevButton');
  nextButton = viewChild.required<ElementRef<HTMLButtonElement>>('nextButton');

  #renderer = inject(Renderer2);
  #disableClickTimeout?: NodeJS.Timeout;

  onPrev(): void {
    this.handleNavigation();
    const aerphoneCarouselItem = this.carouselList().nativeElement.querySelectorAll('app-aerphone-carousel-item');
    this.#renderer.addClass(this.carouselList().nativeElement, 'prev');
    this.#renderer.insertBefore(this.carouselList().nativeElement, aerphoneCarouselItem[aerphoneCarouselItem.length - 1], this.carouselList().nativeElement.firstChild);
  }

  onNext(): void {
    this.handleNavigation();
    const aerphoneCarouselItem = this.carouselList().nativeElement.querySelectorAll('app-aerphone-carousel-item');
    this.#renderer.addClass(this.carouselList().nativeElement, 'next');
    this.#renderer.appendChild(this.carouselList().nativeElement, aerphoneCarouselItem[0]);
  }

  onShowDetails(): void {
    this.#renderer.addClass(this.carouselList().nativeElement, 'show-details');
  }

  private handleNavigation() {
    this.disableClick();
    this.cleanUpAnimationClasses();
  }

  private cleanUpAnimationClasses(): void {
    this.#renderer.removeClass(this.carouselList().nativeElement, 'prev');
    this.#renderer.removeClass(this.carouselList().nativeElement, 'next');
  }

  private disableClick(): void {
    this.prevButton().nativeElement.style.pointerEvents = 'none';
    this.nextButton().nativeElement.style.pointerEvents = 'none';

    clearTimeout(this.#disableClickTimeout);
    this.#disableClickTimeout = setTimeout(() => {
      this.prevButton().nativeElement.style.pointerEvents = 'auto';
      this.nextButton().nativeElement.style.pointerEvents = 'auto';
    }, 2000);
  }
}
