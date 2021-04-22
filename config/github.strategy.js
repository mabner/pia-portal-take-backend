require('dotenv').config();
import { deserializeUser, serializeUser, use } from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';

use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: process.env.GITHUB_CALLBACK_URL,
		},
		function (accessToken, refreshToken, profile, done) {
			return done(undefined, profile);
		}
	)
);

serializeUser(function (user, done) {
	done(undefined, user);
});

deserializeUser(function (user, done) {
	done(undefined, user);
});
