import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';

import {AppComponent} from './app.component';
import {HttpClientService} from "./http-client.service";

@NgModule({
	bootstrap: [],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		HttpClientModule,
		ReactiveFormsModule,
		TranslateModule.forRoot(),
	],
	providers: [HttpClientService],
})
export class AppModule {
	ngDoBootstrap() {}
}