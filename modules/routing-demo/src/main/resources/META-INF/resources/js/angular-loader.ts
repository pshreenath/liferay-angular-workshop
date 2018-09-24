// Bootstrap npm-angular6-provider before anything is used
import 'npm-angular6-provider';

// Declare Liferay AMD loader
declare var Liferay: any;

// Launch application
// require should be your app's name as it appears in your package.json
export default function() {
	Liferay.Loader.require(
		'routing-demo@1.0.0/js/main',
		(main: any) => {
			main.default();
		},
	);
}