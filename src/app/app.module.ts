import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { Approutes } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';

// Modules
import { PipeModule } from './pipes/pipe.module';

// Services
import { TranslateService } from './services/translate.service';

// Store
import { AppReducers } from './store/reducers/todos.reducer';

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use(service.getLanguage());
}

@NgModule({
  declarations: [AppComponent, FullComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Approutes),
    StoreModule.forRoot(AppReducers),
    PipeModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
