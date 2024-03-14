import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customdecrement, customincrement } from 'src/app/shared/counter.action';
import { counterModel } from 'src/app/shared/counter.model';
import { Subscription, Observable } from 'rxjs';
import { getchannelname } from 'src/app/shared/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent {
  constructor(private store:Store<{counter:counterModel}>){}
  inputValue!:number
  rename!:string
  channelname=''
  counterSubscribe!: Subscription
  counter$ !: Observable<counterModel>
 
  ngOnDestroy(): void {
    if(this.counterSubscribe)
    {
      this.counterSubscribe.unsubscribe()
    }
  }
  ngOnInit()
  {
    
    this.counterSubscribe=this.store.select(getchannelname).subscribe(data=>{
      this.channelname=data
      console.log("Custom display")
    });
    // this.counter$=this.store.select('counter');
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
