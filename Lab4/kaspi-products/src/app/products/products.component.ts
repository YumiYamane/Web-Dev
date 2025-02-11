import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      rating: 5,
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/heb/hcc/87295491801118.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      name: 'Умная колонка Яндекс Станция Мини с часами YNDX-00020 черный',
      description: 'Умная колонка Новая Яндекс.Станция Мини YNDX-00020K черного цвета оснащена LED-дисплеем на передней стороне.',
      rating: 5,
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h6a/86495017107486.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h98/hb5/86495017173022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/h26/86495017238558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h21/had/86495017304094.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-s-chasami-yndx-00020-chernyi-102580021/?c=750000000'
    },
    {
      name: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый',
      description: 'Чёткое и качественное изображение, удобный в использовании.',
      rating: 5,
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h80/hc4/84434711642142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7d/h6a/84434711904286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/h2d/84434711969822.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbe/hef/84434712035358.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000'
    },
    {
      name: 'Мышь X-Game XM-770OUB черный',
      description: 'Игровая мышь для начинающих геймеров с подсветкой и оптическим сенсором на 1000dpi.',
      rating: 4.8,
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hab/h5b/63789012811806.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h10/hfb/63789013467166.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h57/h58/63789014253598.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/x-game-xm-770oub-chernyi-9101354/?c=750000000'
    },
    {
      name: 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый',
      description: 'Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство.',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000'
    },
    {
      name: 'Чехол Для Apple iPhone 13 прозрачный',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений.',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей.',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      name: 'Кабель Apple Lightning (M), USB TypeC (M) белый',
      description: 'Кабель Apple USB Type-C - Lightning длиной 1 м удобен для подключения iPhone, iPad или iPod.',
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000'
    },
    {
      name: 'Чехол JS0000084 серебристый',
      description: 'Чехол функциональный, отличного качества.',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h92/80944372514846.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/js0000084-serebristyi-110564899/?c=750000000'
    },
    {
      name: 'Чехол Для Apple iPhone 14 прозрачный',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений.',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h19/65986384560158.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000'
    },
    {
      name: 'Стекло OEM для Apple iPhone 13 прозрачный',
      description: 'Стекло для Apple iPhone 13 с функцией защиты информации, при повороте смартфона под углом дисплей делается тёмным.',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h40/hcb/64422575767582.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/steklo-oem-dlja-apple-iphone-13-prozrachnyi-106865452/?c=750000000'
    },
    {
      name: 'Смартфон Samsung Galaxy A25 5G 6 ГБ/128 ГБ темно-синий',
      description: 'Общий дизайн Galaxy A25 остается схожим с предыдущими моделями: это отдельные объективы камеры и плоская пластиковая задняя панель, которая теперь украшена едва заметным узором из клеток.',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h1c/84932692574238.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000'
    },
  ]

  shareProduct(link: string, platform: string): void {
    let url = '';
    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(url, '_blank');
  }
}
