import { Component, OnInit,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {
 message: string = "Message from child using outpot decorater with eventEmiter"
 @Output() messageEvent = new EventEmitter<string>();

  constructor() { }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
  ngOnInit() {
  }

}
