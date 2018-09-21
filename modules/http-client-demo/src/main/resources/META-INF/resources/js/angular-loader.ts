// Bootstrap npm-angular5-provider before anything is used
// TODO: maybe bootstrap npm-angular6-provider automagically when a page is loaded
import 'npm-angular6-provider';

// Declare Liferay AMD loader
declare var Liferay: any;

// Launch application
// require should be your app's name as it appears in your package.json
export default function() {
	Liferay.Loader.require(
		'http-client-demo@1.0.0/js/main',
		(main: any) => {
			main.default();
		},
	);
}