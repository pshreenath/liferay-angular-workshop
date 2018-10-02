import {Injectable} from '@angular/core';

declare var Liferay: any;

@Injectable()
export class GlobalVariablesService {
	layoutURL: string = Liferay.ThemeDisplay.getLayoutRelativeURL();
}