import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { MidbodyComponent } from './components/midbody/midbody.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityItemsComponent } from './components/activity-items/activity-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    MidbodyComponent,
    ActivityComponent,
    ActivityItemsComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
