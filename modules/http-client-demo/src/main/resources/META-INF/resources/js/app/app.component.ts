import {Component} from '@angular/core';
import {HttpClientService} from "./http-client.service";

@Component({
	selector: '#http-client-demo-root',
	templateUrl: '/o/http-client-demo/js/app/app.component.html',
	styleUrls: ['/o/http-client-demo/js/app/app.component.css'],
})
export class AppComponent {

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