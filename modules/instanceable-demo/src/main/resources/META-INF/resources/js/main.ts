import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {DynamicLoader} from "./app/dynamic.loader";
import {AppComponent} from "./app/app.component";

export default function(namespace: string) {
	platformBrowserDynamic()
		.bootstrapModule(AppModule)
		.then((injector: any) => {
				new DynamicLoader(injector).loadComponent(AppComponent, namespace);
	});
}