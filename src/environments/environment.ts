// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  env: 'dev',
  production: false,
  hmr: true,
  api: 'http://api.openweathermap.org/data/2.5',
  api_key_weather: 'c4eb8ab9defb5ff3624591b569af488c'
};
