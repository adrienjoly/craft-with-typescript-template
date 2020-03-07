I'm discovering BDD (Behavior Driven Development) with Benjamin Hugot, using Cucumber/Gherkin and JavaScript.

Topic: implement the "Pandemic" game.

Rules of the game:

- in French: http://lardj.free.fr/docs/Regles/pandemie.pdf
- in English: https://www.youtube.com/watch?v=4RxqzBA_HRs

Documentation on how to write tests with Cucumber-js:

- [Todd Anderson - BDD in JavaScript: CucumberJS](https://custardbelly.com/blog/blog-posts/2014/01/08/bdd-in-js-cucumberjs/index.html)
- [Todd Anderson - BDD in JavaScript II: CucumberJS, the World and Background](https://www.custardbelly.com/blog/blog-posts/2014/01/22/cucumberjs-world/index.html)
- [cucumber-js/nodejs_example.md at master · cucumber/cucumber-js](https://github.com/cucumber/cucumber-js/blob/master/docs/nodejs_example.md)
- [cucumber-js/step_definitions.md at master · cucumber/cucumber-js](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md)
- [cucumber-js/api_reference.md at master · cucumber/cucumber-js](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/api_reference.md)
- [Cucumber Cheatsheet](https://gist.github.com/yuriiik/5728701)

How to run the tests?

```sh
$ nvm use # to use the version of node.js specified in .nvmrc
$ npm install
$ npm test
```

You should get:

```
..

1 scenario (1 passed)
2 steps (2 passed)
```
