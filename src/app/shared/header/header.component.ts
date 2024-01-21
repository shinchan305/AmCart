import { Component } from '@angular/core';
import { IHeaderLinks } from '../models/IHeaderLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links: IHeaderLinks[] = [
    {
      name: 'Men', route: '/catalogue/men', borderColor: '#ee5f73', content: {
        Clothing: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Suits", "Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants",
          "Sweaters & Sweatshirts", "Jackets", "Blazers & Coats", "Sports & Active Wear", "Indian & Festive Wear", "Innerwear & Sleepwear"],
        ACCESSORIES: ["Watches & Wearables", "Sunglasses & Frames", "Bags & Backpacks", "Luggage & Trolleys", "Personal Care & Grooming", "Wallets & Belts",
          "Fashion Accessories"]
      }
    },
    {
      name: 'Women', route: '/catalogue/women', borderColor: '#fb56c1', content: {
        "Indian & Western Wear": ["Kurtas & Suits", "Kurtis & Tunics", "Leggings, Salwars & Churidars", "Skirts & Palazzos", "Sarees & Blouses",
          "Dress Material", "Lehenga Choli", "Dupattas & Shawls"],
        "Western Wear": ["Dresses & Jumpsuits", "Tops, T-Shirts & Shirts", "Jeans & Jeggings", "Trousers & Capris", "Shorts & Skirts", "Shrugs", "Sweaters & Sweatshirts",
          "Jackets & Waistcoats", "Coats & Blazers"],
        "Accessories": [
          "Women Watches",
          "Analog",
          "Chronograph",
          "Digital",
          "Analog & Digital",
          "Sunglasses",
          "Eye Glasses",
          "Belt",
        ]
      }
    },
    { name: 'Popular', route: '/catalogue/popular', borderColor: '#f26a10' },
    { name: 'Sale', route: '/catalogue/sale', borderColor: '#f2c210' },
    { name: 'Blog', route: '/blog', borderColor: '#0db7af' },
    { name: 'Contact Us', route: '/contact-us', borderColor: '#ff3f6c' },
  ]

  isMenuCollapsed: boolean = true;

  constructor() { }

  changeBorder(e: any, color: string, p: any) {    
    const target = e.target.firstChild as HTMLElement;
    target.style.borderBottom = `3px solid ${color}`;
    if (color === 'transparent') {
      p.close();      
    }
    else {
      p.open();
    }
  }
}
