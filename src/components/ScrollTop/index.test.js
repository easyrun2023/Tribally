import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScrollToTop from ".";
import { BrowserRouter } from "react-router-dom";

test("ScrollTop component", async () => {
  window.scrollTo = jest.fn();

  render(
    <BrowserRouter>
      <ScrollToTop />
    </BrowserRouter>
  );

  expect(window.scrollTo).toHaveBeenCalled();
});
