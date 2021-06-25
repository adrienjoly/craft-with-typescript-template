![Node.js CI](https://github.com/adrienjoly/bdd-example-with-cucumber-and-vscode/workflows/Node.js%20CI/badge.svg)

# Template: Craft with TypeScript

A Software Crafter template to write and test clean TypeScript code with Visual Studio Code, BDD style.

This template is based upon a "Pandemic" game implemented during a BDD training (Behavior Driven Development) given by Benjamin Hugot, using Cucumber/Gherkin and JavaScript: [bdd-example-with-cucumber-and-vscode](https://github.com/adrienjoly/bdd-example-with-cucumber-and-vscode).

## How to run tests

```sh
$ nvm use # to use the version of node.js specified in .nvmrc
$ npm install
$ npm test # or, in vscode, press Ctrl-F5
```

You should get:

```
9 scenarios (9 passed)
26 steps (26 passed)
```

## Documentation on how to write tests with Cucumber-js

- [Todd Anderson - BDD in JavaScript: CucumberJS](https://custardbelly.com/blog/blog-posts/2014/01/08/bdd-in-js-cucumberjs/index.html)
- [Todd Anderson - BDD in JavaScript II: CucumberJS, the World and Background](https://www.custardbelly.com/blog/blog-posts/2014/01/22/cucumberjs-world/index.html)
- [cucumber-js/nodejs_example.md at master · cucumber/cucumber-js](https://github.com/cucumber/cucumber-js/blob/master/docs/nodejs_example.md)
- [cucumber-js/step_definitions.md at master · cucumber/cucumber-js](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md)
- [cucumber-js/api_reference.md at master · cucumber/cucumber-js](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/api_reference.md)
- [Cucumber Cheatsheet](https://gist.github.com/yuriiik/5728701)
