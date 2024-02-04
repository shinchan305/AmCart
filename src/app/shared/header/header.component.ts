import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHeaderLinks } from '../models/IHeaderLinks';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

  signInURL: string = "https://amcart.auth.us-east-1.amazoncognito.com/login?client_id=606p99mu99kn0me9svqvkjtksn&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://d3jt12boixkrn5.cloudfront.net/";
  // signInURL: string = "https://amcart.auth.us-east-1.amazoncognito.com/login?client_id=606p99mu99kn0me9svqvkjtksn&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A4201";

  isMenuCollapsed: boolean = true;
  searchTerm: string = '';
  userDetails: any;

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit(): void {
      this._userService.getUserDetails().subscribe((userDetails: any) => {
        this.userDetails = userDetails;
      })
  }

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

  toggleUserPopup(e:any, u: any) {
    if (e.type === 'mouseenter') {
      u.open();
    }
    else {
      u.close();
    }
  }

  handleSubcategory(subCategory: string, listItem: any, parentRoute: string) {
    const mouseleaveEvent = new Event('mouseleave');
    listItem.dispatchEvent(mouseleaveEvent);

    this._router.navigateByUrl('/' + parentRoute + '/' + subCategory);
  }

  search(searchTerm: string) {
    if (!searchTerm || searchTerm === '') {
      return;
    }
    this._router.navigateByUrl(`/catalogue/search/${searchTerm}`);
  }

  userProfile() {
    if (this.userDetails) {

    } else {
      this.setUserDefaults();
      window.location.href = this.signInURL;
    }
  }

  logout() {
    this._userService.logout(this.userDetails.username).subscribe((response: any) => {
      if (response.success) {
        this.setUserDefaults();
      }
    })
  }

  setUserDefaults() {
    localStorage.clear();
    this._userService.setUserDetails(null);
  }
}
