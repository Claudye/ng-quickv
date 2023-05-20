import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuickvModule } from './quickv/quickv.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QuickvModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
