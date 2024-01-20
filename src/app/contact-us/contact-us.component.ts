import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  addresses: any[] = [
    {
      country: "India",
      address: "304, Tower C, Building No.3",
      contact: "+91 9033384223"
    },
    {
      country: "France",
      address: "109 Avenue Léon, 63 Clermont-Ferrand",
      contact: "+12 345-423-9893"
    }
  ]
}
