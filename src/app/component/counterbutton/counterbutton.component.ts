import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppstateModel } from 'src/app/shared/Global/Appstate.model';
import { increment, decrement, reset, changechannelname } from 'src/app/shared/counter.action';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {
  constructor(private store:Store<AppstateModel>)
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
  rename()
  {
    this.store.dispatch(changechannelname({channel:"Welcome to the Page"}))
  }

}
