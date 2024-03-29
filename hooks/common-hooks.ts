import { Before, BeforeAll, AfterAll } from '@cucumber/cucumber';

Before({ tags: '@ignore' }, async function () {
  return 'skipped' as any;
});

Before({ tags: '@debug' }, async function (/*this: { debug: boolean }*/) {
  // this.debug = true;
});

BeforeAll(async function () {
  // eslint-disable-next-line no-console
  console.log('Before All');
});

AfterAll(async function () {
  // eslint-disable-next-line no-console
  console.log('After All');
});
