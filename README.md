# splash-error
> Handle errors

## Install
```sh
	$ npm install @splash-cli/splash-error --save

	#or

	$ yarn add @splash-cli/splash-error
```

## Usage
```js
	import splashError from 'splash-error';

	// ... function
	try {
		const obj = JSON.parse(`{ \"json\": \"true\" }`)
	} catch (error) {
		splashError(error);
	}
```

## Api
### splashError(err, { message, colors })
Throw the given error.

#### err
Type: `Error`
Error to be thrown

#### message
Type: `String`
Default: `Splash Error`
Error message

#### colors
Type: `Object`
Default: `{ message: 'yellow', error: 'red' }`
Text colors

## License
MIT © [Federico Vitale](https://federicovitale.me)