import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './pages/page/page.component';
import { PageNotFoundComponent } from './pages/page/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page/page-home/page-home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LinkPipe } from './pipes/link/link.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PageNotFoundComponent,
    PageHomeComponent,
    NavMenuComponent,
    LinkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
