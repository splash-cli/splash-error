'use strict';

const chalk = require('chalk');
const printBlock = require('@splash-cli/print-block');

const splashError = function (error, opt = {
	message: 'Splash Error',
	colors: {
		message: 'yellow',
		error: 'red'
	}
}) {
	var msg = chalk `{${opt.colors.message} ${opt.message}:} {${opt.colors.error} ${error}}`;

	printBlock(msg);

	throw new Error(e);
};

module.exports = splashError;