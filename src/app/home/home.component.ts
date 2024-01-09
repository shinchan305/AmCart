import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3, 4, 5, 6, 7].map((n) => `../../assets/images/image${n}.jpg`);
  pauseOnHover: boolean = true;
  pauseOnFocus: boolean = false;

  ngOnInit() {
    console.log(this.images);
    console.log("Test message");
    console.log("Another Test message");
    console.log("Another Test message 123");
  }

  onSlide(e: any) {

  }
}
