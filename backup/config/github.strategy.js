const passport = require('passport');
//
// npm install passport-github
//
const GitHubStrategy = require('passport-github').Strategy;

passport.use(
	new GitHubStrategy(
		{
			clientID: 'Iv1.7ce22610c774a88a',
			clientSecret: 'fe0f5279f59946fc087c54a41b405ded0d56db7e',
			callbackURL:
				'https://nodejs-trabalhofinal-pwn.herokuapp.com/auth/github/callback',
		},
		function (accessToken, refreshToken, profile, done) {
			return done(undefined, profile);
		}
	)
);

passport.serializeUser(function (user, done) {
	done(undefined, user);
});

passport.deserializeUser(function (user, done) {
	done(undefined, user);
});
