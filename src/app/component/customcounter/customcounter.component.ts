import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customdecrement, customincrement } from 'src/app/shared/counter.action';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent {
  constructor(private store:Store<{counter:{counter:number}}>){}
  inputValue!:number
  incrementCounter()
  {
    this.store.dispatch(customincrement({value:+this.inputValue}))
  }
  decrementCounter()
  {
    this.store.dispatch(customdecrement({value:+this.inputValue}))
  }

}
