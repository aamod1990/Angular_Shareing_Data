import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view-child',
  templateUrl: './child-view-child.component.html',
  styleUrls: ['./child-view-child.component.css']
})
export class ChildViewChildComponent implements OnInit {
message = 'Message from child to parent';
  constructor() { }
  ngOnInit() {
  }

}
