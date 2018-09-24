// Bootstrap npm-angular6-provider before anything is used
// bootstrap npm-angular6-provider automagically when a page is loaded
import 'npm-angular6-provider';

// Declare Liferay AMD loader
declare var Liferay: any;

// Launch application
// require should be your app's name as it appears in your package.json
export default function(namespace: string) {
	Liferay.Loader.require(
		'instanceable-demo@1.0.0/js/main',
		(main: any) => {
			main.default(namespace);
		},
	);
}