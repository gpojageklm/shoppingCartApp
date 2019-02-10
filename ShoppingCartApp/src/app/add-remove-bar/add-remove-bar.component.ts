import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'add-remove-bar',
  templateUrl: './add-remove-bar.component.html',
  styleUrls: ['./add-remove-bar.component.css']
})
export class AddRemoveBarComponent implements OnInit {
  displayValue="Add";
  itemCount=0;
  @Output() itemCountChange=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

addItem()
{
this.itemCount++;
this.displayValue=this.itemCount.toString();
this.itemCountChange.emit(this.itemCount);
}

deleteItem()
{
 if(this.itemCount>0)
 {
this.itemCount--;
this.displayValue=this.itemCount.toString();
this.itemCountChange.emit(this.itemCount);
 }

}
}
