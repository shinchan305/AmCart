import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // images = [1, 2, 3, 4, 5, 6, 7].map((n) => `../../assets/images/image${n}.jpg`);
  images = [1, 2, 3, 4, 5, 6, 7].map((n) => `https://d295kz4103lnea.cloudfront.net/home/image${n}.jpg`);
  pauseOnHover: boolean = true;
  pauseOnFocus: boolean = false;

  ngOnInit() {
  }

  onSlide(e: any) {

  }
}
