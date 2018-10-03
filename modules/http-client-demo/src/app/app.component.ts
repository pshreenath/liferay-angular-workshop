import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'
import {HttpClientService} from "../services/http-client.service";

declare var Liferay: any;

@Component({
	templateUrl: '/o/http-client-demo/app/app.component.html'
})
export class AppComponent {
	params: LiferayParams;
	url: string = '';
	authUrl: string = '';
	json: string = '';
	folderName: string = '';
	groupId: number = 0;

	constructor(
			public httpClientService: HttpClientService) {

	}

	submit() {
		this.authUrl = this.url + "?p_auth=" + Liferay.authToken;
		this.httpClientService.getJson(this.authUrl).subscribe((result) => {
			this.json = JSON.stringify(result);
		})

	}

	addFolder() {
		this.groupId = Liferay.ThemeDisplay.getScopeGroupId();
		Liferay.Service(
				'/dlapp/add-folder',
				{
					repositoryId: this.groupId,
					parentFolderId: 0,
					name: this.folderName,
					description: this.folderName,
				},
				function(obj) {
					console.log(obj);
				}
		);
	}
}
