import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customdecrement, customincrement } from 'src/app/shared/counter.action';
import { counterModel } from 'src/app/shared/counter.model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent {
  constructor(private store:Store<{counter:counterModel}>){}
  inputValue!:number
  rename!:string

  isValidInput(): boolean {
    return isNaN(this.inputValue); // Return true if inputValue is not a number
  }
  
  incrementCounter()
  {
    this.store.dispatch(customincrement({value:+this.inputValue}))
  }
  decrementCounter()
  {
    this.store.dispatch(customdecrement({value:this.inputValue}))
  }

}
