import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kaspi-items';

  categories = [
    { name: 'Phones and Gadgets' },
    { name: 'Household Appliances' },
    { name: 'Computers' },
    { name: 'Furniture' }
  ];

  products = [
    {
      category: 'Phones and Gadgets',
      items: [
        {
          name: 'Apple iPhone 16 Pro Max 256Gb Gold Smartphone',
          description: 'The flagship iPhone 16 Pro Max has absorbed the best features of a modern gadget.',
          rating: 5,
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/heb/hcc/87295491801118.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
          likes: 0
        },
        {
          name: 'Apple Lightning (M) to USB TypeC(M) Cable White',
          description: 'The Apple USB Type-C to Lightning 1-meter cable is convenient for connecting an iPhone, iPad, or iPod.',
          rating: 4,
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h8d/h64/87059455344670.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h0a/hf3/87059455410206.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000',
          likes: 0
        },
        {
          name: 'Apple iPhone 13 128Gb Black Smartphone',
          description: 'The Apple iPhone 13 has a 6.1-inch Super Retina XDR display, which features an incredibly high pixel density.',
          rating: 5,
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
          likes: 0
        },
        {
          name: 'Apple Charger 18W USB-C Power Adapter USB Type-C White',
          description: 'The Apple 18W USB-C Power Adapter is a compact and efficient charger designed to charge your devices quickly and efficiently.',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
          likes: 0
        },
        {
          name: 'Case For Apple iPhone 15 Pro Transparent',
          description: 'A reliable and stylish case for your smartphone that provides protection against scratches, bumps and dirt.',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/hea/83724869828638.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000',
          likes: 0
        }
      ]
    },
    {
      category: 'Household Appliances',
      items: [
        {
          name: 'Deerma DX700 white vacuum cleaner',
          description: 'The Deerma DX700 vacuum cleaner is a stylish, compact and convenient vacuum cleaner.',
          rating: 5,
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hd3/h67/63803862581278.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h20/he1/63803865792542.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/had/h34/63803868741662.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h2e/h83/63803872280606.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
          likes: 0
        }, 
        {
          name: 'Iron Vitek VT-1215 pink',
          description: 'The Vitek VT-1215 PK iron is a guarantee of the absence of wrinkles on your clothes.',
          rating: 5,
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/h53/haa/63760686743582.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h2b/h5b/63760687398942.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h52/hf5/63760688185374.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h2f/hd4/63760690216990.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/vitek-vt-1215-rozovyi-3800382/?c=750000000',
          likes: 0
        }, 
        {
          name: 'Electric kettle Yingzheng ZY-305 black',
          description: 'Modern and stylish, this electric kettle combines sleek design and cutting-edge features for your convenience.',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000',
          likes: 0
        },
        {
          name: 'LG Washing Machine F2J3NS0W White',
          description: 'The depth of the LG washing machine F2J3NS0W only 44 cm, so it will fit even in a small bathroom.',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
          likes: 0
        },
        {
          name: 'Generic SF-400 Kitchen Scale',
          description: 'Modern electronic kitchen scales have an elegant platform made of plastic. The weighing limit is 10 kg.',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
          likes: 0
        }
      ]
    },
    {
      category: 'Computers',
      items: [
        {
          name: 'Lenovo IdeaPad 3 15.6" / 4GB / 256GB SSD / OS-free / 15IGL05 / 81WQ00EMRK',
          description: 'Equipped with an Intel Celeron processor, 4GB of RAM and SSD storage, the model will exceed any of your expectations.',
          rating: 5,
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h5d/h65/64373055684638.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h06/h47/64373056897054.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hec/h98/64373091041310.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h9c/h7a/64373093597214.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000',
          likes: 0
        },
        {
          name: 'Portcase 9011 Black Bag',
          description: 'Designed for easy carrying and protection of the device.',
          rating: 5,
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hfb/hea/69003731075102.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h0c/hf8/69003731599390.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/he7/h02/79822873329694.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000',
          likes: 0
        },
        {
          name: 'X-Game Mouse XM-770OUB Black',
          description: 'Gaming mouse for beginner gamers with backlight and 1000dpi optical sensor.',
          rating: 5,
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/hab/h5b/63789012811806.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h10/hfb/63789013467166.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/x-game-xm-770oub-chernyi-9101354/?c=750000000',
          likes: 0
        },
        {
          name: 'XTREON Monitor XT2453DE Black',
          description: 'The Xtreon XT2453DE is a high-quality monitor designed to meet the needs of both professional users and gamers.',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/hb2/85226229727262.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/xtreon-xt2453de-chernyi-113769029/?c=750000000',
          likes: 0
        },
        {
          name: 'Ajazz AK820 Pro Keyboard White',
          description: 'The Ajazz AK820 Pro is not just a keyboard, it is the perfect tool for gamers and professionals.',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/h74/85447302807582.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/ajazz-ak820-pro-belyi-115277471/?c=750000000',
          likes: 0
        },
      ]
    },
    {
      category: 'Furniture',
      items: [
        {
          name: 'Chair C06, 80x46x40 cm, white',
          description: 'Thanks to the combination of plastic with metal and wood, the product fits seamlessly into almost any environment.',
          rating: 5,
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pa4/p2b/3187773.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p88/p2b/3187774.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p6c/p2b/3187775.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p50/p2b/3187776.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
          likes: 0
        },
        {
          name: 'Straight sofa Nasip Raiana, upholstery fabric, 85x230x70 cm, light brown',
          description: 'Practical sofa bed, compact and easy to clean. PU foam (polyurethane foam) is an ultra-light plastic material.',
          rating: 5,
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6045250.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hf4/h65/84622517764126.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h84/hf2/84622517829662.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/divan-prjamoi-nasip-raiana-obivka-tkan-85h230h70-sm-svetlo-korichnevyi-115023255/?c=750000000',
          likes: 0
        },
        {
          name: 'Floor hanger Singleton TW610, metal, 150x154 cm, black',
          description: 'A stylish and compact clothes rack will help you organize the space in your home quickly and efficiently.',
          rating: 4,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/hff/85704242266142.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-singleton-tw610-metall-150x154-sm-chernyi-106301738/?c=750000000',
          likes: 0
        },
        {
          name: 'Cabinet: 279583614, 40x47.5x35.4 cm, white',
          description: 'The bedside table from the Design Comfort brand is the perfect choice to create coziness and functionality in your home!',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p7d/pf5/13917072.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/279583614-40x47-5x35-4-sm-belyi-131641337/?c=750000000',
          likes: 0
        },
        {
          name: 'Round dining table, 90x90x74 cm, laminated chipboard, tone oak',
          description: 'A classic round dining table is a stylish and practical solution for any home.',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h94/84785427546142.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/stol-obedennyi-kruglyi-90x90x74-sm-ldsp-ton-dub-110088841/?c=750000000',
          likes: 0
        }
      ]
    }
  ];

  selectedCategory: string = '';

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
  }

  getFilteredProducts() {
    if (!this.selectedCategory) return [];
    const category = this.products.find(p => p.category === this.selectedCategory);
    return category ? category.items : [];
  }
}
