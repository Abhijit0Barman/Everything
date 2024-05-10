// RTL has  its own virtual rendering environment
// 🔶Button Component
/*
 * whether Button is rendered on Dom or not.
 * Text content should match.
 * Should call the function when clicked?
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
// import { click } from "@testing-library/user-event/dist/click";
import renderer from "react-test-renderer";

describe("Testing Button Component", () => {
  it("Button should be renderd on DOM", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText("Click Me");
    // screen.debug();
    expect(button).toBeInTheDocument();
  });

  it("Check if the button is have correct text or not", () => {
    render(<Button>Test</Button>);
    const button = screen.getByTestId("test-button");
    expect(button).toHaveTextContent("Test");
    render(<Button>Another</Button>);
    const button2 = screen.getAllByTestId("test-button");
    expect(button2[1]).toHaveTextContent("Another"); //regx
  });

  it("Should execute the function when clicked", () => {
    const mockFunc = jest.fn();
    render(<Button func={mockFunc}>Click Me</Button>);
    const button = screen.getByTestId("test-button");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    // expect(mockFunc).toBeCalled();
    expect(mockFunc).toBeCalledTimes(4);
  });

  it("Should match the snapshot", () => {
    const tree = renderer.create(<Button>Click Me</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
