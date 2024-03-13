import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent {
  counterdisplay!:number
  constructor(private store:Store<{counter:{counter:number}}>)
  {

  }
  ngOnInit()
  {
    this.store.select('counter').subscribe(data=>{
      this.counterdisplay=data.counter
    })
  }


}
