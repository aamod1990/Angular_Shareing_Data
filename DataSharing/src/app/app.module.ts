import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentInputComponent } from './parent-input/parent-input.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { ParentViewChildComponent } from './parent-view-child/parent-view-child.component';
import { ChildViewChildComponent } from './child-view-child/child-view-child.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { OutputChildComponent } from './output-child/output-child.component';
import { ServiceParentComponent } from './service-parent/service-parent.component';
import { ServiceChildComponent } from './service-child/service-child.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentInputComponent,
    ChildInputComponent,
    ParentViewChildComponent,
    ChildViewChildComponent,
    OutputParentComponent,
    OutputChildComponent,
    ServiceParentComponent,
    ServiceChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
