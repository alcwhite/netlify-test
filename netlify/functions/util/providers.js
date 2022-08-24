// https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps
const github = {
  clientIdKey: "GITHUB_OAUTH_CLIENT_ID",
  clientSecretKey: "GITHUB_OAUTH_CLIENT_SECRET",

  /* OAuth API endpoints */
  tokenHost: "https://github.com/",
  tokenPath: "https://github.com/login/oauth/access_token",
  authorizePath: "https://github.com/login/oauth/authorize",

  /* User API endpoint */
  userApi: "https://api.github.com/user",
  repoApi: "https://api.github.com/orgs/launchscout/members/",

  scope: "read:user,read:org",
};

module.exports = {
  github
};
