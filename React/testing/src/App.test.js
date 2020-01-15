// const helper = require("./App");

// describe("helper mobule", () => {
//   describe("sum function", () => {
//     it("can add two numbers", () => {
//       const expectedOutput = 10;
//       const actualOutput = helper.sum(5, 5);
//       expect(actualOutput).toBe(expectedOutput);
//     });
//   });
// });

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

it('renders a span with the text hello, world!', () => {
  const wrapper = rtl.render(
    <App/>
  );
  const element = wrapper.queryByText(/hello, world!/i);
  expect(element).toBeInTheDocument();
  expect(element).toBeTruthy();
  expect(element).toBeVisible();
});