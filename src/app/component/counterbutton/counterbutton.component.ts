import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset, changechannelname } from 'src/app/shared/counter.action';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {
  constructor(private store:Store<{counter:{counter:number}}>)
  {

  }
  onIncrement()
  {
    debugger
    this.store.dispatch(increment())
  }
  onDecrement()
  {
    debugger
    this.store.dispatch(decrement())
  }
  reset()
  {
    this.store.dispatch(reset())
  }
  rename()
  {
    this.store.dispatch(changechannelname({channel:"Welcome to the Page"}))
  }

}
