import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Battle from ".";

test("Battle component", async () => {
  render(
    <Battle
      result={"L"}
      playerTeam={[1, 2, 3]}
      opponentTeam={[1, 2, 3]}
      battleType={"PVP"}
      startTimestamp={Date.now()}
      endTimestamp={Date.now()}
    />
  );

  expect(screen.getByText("PVP")).toBeInTheDocument();
});
