/**
init.js

This file acts as the main entry point for the site.
It sets the default resource paths, configures essentially libraries
and then defers execution to site specific scripts.

*/
requirejs.config({
	baseUrl : "scripts/",
	paths : {
		jquery : ["https://code.jquery.com/jquery-2.1.3.js","lib/jquery-2.1.3"],
		lib : "lib/",
		site : "site/"
	},
	bundles : {
		"site/main" : ["brycorp-site"]
	}
});

require(["site/main", "brycorp-site"])