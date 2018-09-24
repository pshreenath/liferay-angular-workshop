import {
	ApplicationRef,
	ComponentFactoryResolver,
	Injector,
	NgZone,
	Type,
} from '@angular/core';

export class DynamicLoader {
	constructor(private injector: Injector) {}

	loadComponent<T>(component: Type<T>, namespace: string) {
		(<any>this.injector.get(NgZone)).run(() => {
			const componentFactory = this.injector
			.get(ComponentFactoryResolver)
			.resolveComponentFactory(component);

			debugger;
			const componentRef = componentFactory.create(
					this.injector,
					[],
					document.getElementById(namespace),
			);

			this.injector.get(ApplicationRef).attachView(componentRef.hostView);
		});
	}
}