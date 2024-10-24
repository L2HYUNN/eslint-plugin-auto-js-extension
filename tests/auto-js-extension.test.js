const { RuleTester } = require("eslint");
const rule = require("../lib/rules/auto-js-extension");

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

ruleTester.run("auto-js-extension", rule, {
  valid: [
    {
      code: 'import Validator from "Validator.js"',
    },
    {
      code: "import Validator from 'Validator.js'",
    },
    {
      code: 'export * from "Validator.js"',
    },
    {
      code: "export * from 'Validator.js'",
    },
  ],
  invalid: [
    {
      code: 'import Validator from "Validator"',
      output: 'import Validator from "Validator.js"',
      errors: [{ message: "File should have a .js extension." }],
    },
    {
      code: "import Validator from 'Validator'",
      output: "import Validator from 'Validator.js'",
      errors: [{ message: "File should have a .js extension." }],
    },
    {
      code: 'export * from "Validator"',
      output: 'export * from "Validator.js"',
      errors: [{ message: "File should have a .js extension." }],
    },
    {
      code: "export * from 'Validator'",
      output: "export * from 'Validator.js'",
      errors: [{ message: "File should have a .js extension." }],
    },
  ],
});

console.log("All tests passed!");
