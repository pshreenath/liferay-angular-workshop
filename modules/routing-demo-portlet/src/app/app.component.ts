import { Component } from '@angular/core';

import LiferayParams from '../types/LiferayParams'

@Component({
	templateUrl: '/o/routing-demo-portlet/app/app.component.html'
})
export class AppComponent {
	params: LiferayParams;
	title = 'Routing Demo';
}
