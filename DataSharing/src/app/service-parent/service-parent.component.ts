import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-service-parent',
  templateUrl: './service-parent.component.html',
  styleUrls: ['./service-parent.component.css']
})
export class ServiceParentComponent implements OnInit {
  message:string;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
