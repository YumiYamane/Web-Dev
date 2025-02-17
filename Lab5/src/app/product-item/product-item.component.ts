import { Component, Input, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var bootstrap: any; 

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements AfterViewInit {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter<any>();

  liked: boolean = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.product.gallery && this.product.gallery.length > 0) {
      const carouselElement = this.el.nativeElement.querySelector('#carouselExampleAutoplaying');
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 3000, 
          ride: 'carousel' 
        });
      }
    }
  }

  shareProduct(link: string, platform: string): void {
    let url = '';
    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(url, '_blank');
  }

  removeProduct(): void {
    this.productRemoved.emit(this.product); 
  }

  likeProduct(): void {
    this.product.likes += 1; 
    this.liked = true; 
  }
}
