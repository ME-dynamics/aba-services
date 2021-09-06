/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "4e2ed673221c4718b4a8f0210004b34b4ce82805",
    options: {
      "sonar.projectName": "taskyn",
      "sonar.projectDescription": "taskyn service",
      "sonar.sources": "./packages",
      "sonar.tests": "./__tests__",
    },
  },
  () => process.exit()
);
