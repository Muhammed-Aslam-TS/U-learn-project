import { style } from '@angular/animations';
import { UpperCasePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { loadStripe, Stripe } from "@stripe/stripe-js"
import { PymentService } from '../service/pyment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
  @Input() parentData


  constructor(private service:PymentService,private router:Router){}
  HolderName='' 
  private stripe: Stripe;

  async ngOnInit() {
console.log(this.parentData);


    this.stripe = await loadStripe('pk_test_51NHCGGSDjPqbEiAbq6yIFenR8i5e6pTWnQrK18OzSElZaEunGXAHEIIVbnhOCDi8CwWCRpelgjnUPSYLH1lPw6wG00UjnOexzz')

    const elements = this.stripe.elements()
    const card = elements.create('card')
    card.mount('#card');



    card.on('change', (event) => {
      const displayError: any = document.getElementById('card-errors')
      event.error ? displayError.textContent = event.error.message : displayError.textContent = 'success'
    })


    const button = document.getElementById('button')
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const ownerInfo = {
        owner: { name: this.HolderName },
        amount: this.parentData.Price,
        currency: 'INR',
      };
      try {
        const result = await this.stripe.createSource(card, ownerInfo)
        this.service.pymentMethord(result).subscribe((data)=>{
          console.log(data);
          
        })
        this.router.navigate['/paymentSuccess']
        console.log(result);

      } catch (e) {
        console.log(e.message);
      }

    })
  }
}
