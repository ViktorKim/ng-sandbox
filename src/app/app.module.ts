import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ChildTestComponent } from './test-component/child-test/child-test.component';
import { LastCoComponent } from './test-component/child-test/last-co/last-co.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ChildTestComponent,
    LastCoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
