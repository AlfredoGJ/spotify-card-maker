import { Button } from "../../atoms/Button/Button";
import { ButtonGroup } from "./ButtonGroup";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Components: ButtonGroup", () => {
  const handleChangeCallback = jest.fn((name: string) => null);
  const buttonGroup = (
    <ButtonGroup
      selectedName="one"
      defaultSelectedName="one"
      onSelectionChange={handleChangeCallback}
    >
      <Button name="one">One</Button>
      <Button name="two">Two</Button>
      <Button name="three">Three</Button>
    </ButtonGroup>
  );
  it("Should render correctly", () => {
    render(buttonGroup);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "One" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Two" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Three" })).toBeInTheDocument();
  });
  it("Should select the 'defaultSelected' correctly", () => {
    render(buttonGroup);
    expect(
      screen.getByRole("button", { name: "One", pressed: true })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Two", pressed: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Three", pressed: false })
    ).toBeInTheDocument();
  });
  it("Should change 'selectedItem' correctly", () => {
    render(buttonGroup);
    let firstButton = screen.getByRole("button", { name: "One" });
    let secondButton = screen.getByRole("button", { name: "Two" });
    let thirdButton = screen.getByRole("button", { name: "Three" });

    fireEvent.click(secondButton);

    expect(firstButton).toHaveAttribute("aria-pressed", "false");
    expect(secondButton).toHaveAttribute("aria-pressed", "true");
    expect(thirdButton).toHaveAttribute("aria-pressed", "false");

    expect(handleChangeCallback).toBeCalledTimes(1);
  });
});
