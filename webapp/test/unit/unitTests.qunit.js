/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cominctureui5/week_10_assignment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
