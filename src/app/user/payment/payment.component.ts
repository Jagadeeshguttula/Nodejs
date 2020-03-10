import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totamt=10
  constructor(private ser:UserService) { }

  ngOnInit() {
  }
  funpaylink(){
    this.ser.serGetPaymentLink({}).subscribe(dt=>{
      alert(dt)
    })
  }
}
