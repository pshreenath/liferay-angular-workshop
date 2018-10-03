import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'
import {HttpClientService} from "../services/http-client.service";


@Component({
	templateUrl: '/o/http-client-demo/app/app.component.html'
})
export class AppComponent {
	params: LiferayParams;
	url: string = '';
	json: string = '';

	constructor(
			public httpClientService: HttpClientService) {
	}

	submit() {
		this.httpClientService.getJson(this.url).subscribe((result) => {
			this.json = JSON.stringify(result);
		})

	}
}
