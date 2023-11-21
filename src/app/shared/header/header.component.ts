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
    { name: 'Men', route: '/catelogue-men' },
    { name: 'Women', route: '/catelogue-women' },
    { name: 'Popular', route: '/catelogue-popular' },
    { name: 'Sale', route: '/catelogue-sale' },
    { name: 'Blog', route: '/blog' },
    { name: 'Contacts Us', route: '/contact-us' },
  ]

  isMenuCollapsed: boolean = true;

  constructor(public route: ActivatedRoute) {}
}
