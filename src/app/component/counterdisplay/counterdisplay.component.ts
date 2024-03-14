import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from 'src/app/shared/counter.model';
import { Subscription, Observable } from 'rxjs';
import { getcounter } from 'src/app/shared/counter.selector';


@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent {
  counterdisplay!:number
  channelname!:string
  counterSubscribe!: Subscription
  counter$ !: Observable<counterModel>
  constructor(private store:Store<{counter:counterModel}>)
  {

  }
  ngOnDestroy(): void {
    if(this.counterSubscribe)
    {
      this.counterSubscribe.unsubscribe()
    }
  }
  ngOnInit()
  {
    
    this.counterSubscribe=this.store.select(getcounter).subscribe(data=>{
      this.counterdisplay=data
      console.log("Counter display")
     
    });
    // this.counter$=this.store.select('counter');
  }
  

}
