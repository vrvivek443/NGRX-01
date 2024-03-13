import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/shared/counter.action';

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
    this.store.dispatch(increment())
  }
  onDecrement()
  {
    this.store.dispatch(decrement())
  }
  reset()
  {
    this.store.dispatch(reset())
  }


}
