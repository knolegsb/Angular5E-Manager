// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA7ELUTtx6zPGSx54rp4YmSv73mu7zO_hk",
    authDomain: "scm-manager.firebaseapp.com",
    databaseURL: "https://scm-manager.firebaseio.com",
    projectId: "scm-manager",
    storageBucket: "scm-manager.appspot.com",
    messagingSenderId: "693332491498"
  }
};
