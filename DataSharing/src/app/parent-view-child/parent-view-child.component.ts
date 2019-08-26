import { Component, OnInit,ViewChild, AfterViewInit} from '@angular/core';
import { ChildViewChildComponent } from "../child-view-child/child-view-child.component";

@Component({
  selector: 'app-parent-view-child',
  templateUrl: './parent-view-child.component.html',
  styleUrls: ['./parent-view-child.component.css']
})
export class ParentViewChildComponent implements OnInit {
  @ViewChild(ChildViewChildComponent) child;

  constructor() { }
  message:string;
  ngOnInit() {
    this.message = this.child.message
  }
}
