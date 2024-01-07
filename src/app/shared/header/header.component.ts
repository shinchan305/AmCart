import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeaderLinks } from '../models/IHeaderLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links: IHeaderLinks[] = [
    { name: 'Men', route: '/catalogue/men', borderColor: '#ee5f73' },
    { name: 'Women', route: '/catalogue/women', borderColor: '#fb56c1' },
    { name: 'Popular', route: '/catalogue/popular', borderColor: '#f26a10' },
    { name: 'Sale', route: '/catalogue/sale', borderColor: '#f2c210' },
    { name: 'Blog', route: '/blog', borderColor: '#0db7af' },
    { name: 'Contacts Us', route: '/contact-us', borderColor: '#ff3f6c' },
  ]

  isMenuCollapsed: boolean = true;

  constructor() {}

  changeBorder(e: any, color: string) {
    e.target.style.borderBottom = `3px solid ${color}`
  }
}
