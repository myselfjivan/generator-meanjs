'use strict';

module.exports = {
	db: 'mongodb://localhost/<%= slugifiedAppName %>-travis',
	port: 3001,
	app: {
		title: '<%= humanizedAppName %> - Travis Environment'
	},
	facebook: {
		clientID: 'APP_ID',
		clientSecret: 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: 'CONSUMER_KEY',
		clientSecret: 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: 'APP_ID',
		clientSecret: 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: 'APP_ID',
		clientSecret: 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};