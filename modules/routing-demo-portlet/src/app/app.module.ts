import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {APP_BASE_HREF} from "@angular/common";

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {GlobalVariablesService} from "../services/global-variables.service";

@NgModule({
	imports: [BrowserModule, AppRoutingModule],
	declarations: [AppComponent, routingComponents],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [GlobalVariablesService, {provide: APP_BASE_HREF, useValue: '/'}],
})
export class AppModule {
	ngDoBootstrap() {}
}
