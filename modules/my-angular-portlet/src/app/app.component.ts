import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'

@Component({
	templateUrl: '/o/my-angular-portlet/app/app.component.html'
})
export class AppComponent {
	params: LiferayParams;
}
