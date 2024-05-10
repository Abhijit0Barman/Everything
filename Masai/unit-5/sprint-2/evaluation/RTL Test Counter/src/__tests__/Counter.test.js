import { render, fireEvent, screen } from "@testing-library/react";
import { Counter } from "../components/Counter";
import { Button } from "../components/Button";

describe("Test Todo App", () => {
  beforeAll(() => {
    global.score = 1;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });

  it(`Counter app should be present in the DOM with data-testid="counter-app"`, () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter-app");
    const counter_display = screen.getByTestId("counter-display");
    expect(counter_display).toHaveTextContent("Counter: 0");
    expect(counter).toBeInTheDocument();
    global.score++;
  });

  it(`Add and reduce button should be present`, () => {
    render(<Counter />);
    const add_btn = screen.getByTestId("add-button");
    const reduce_btn = screen.getByTestId("reduce-button");
    expect(add_btn).toBeInTheDocument();
    expect(add_btn).toHaveTextContent("Add");
    expect(reduce_btn).toBeInTheDocument();
    expect(reduce_btn).toHaveTextContent("Reduce");
    global.score++;
  });

  it(`Button component should be rendered properly`, () => {
    render(<Button>Click Me</Button>);
    render(<Button>Click Me 2</Button>);
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[0]).toHaveTextContent("Click Me");
    expect(buttons[1]).toBeInTheDocument();
    expect(buttons[1]).toHaveTextContent("Click Me 2");
    global.score++;
  });

  it(`On clicking Add button the counter value should increase`, () => {
    render(<Counter />);
    const add_btn = screen.getByTestId("add-button");
    const counter_display = screen.getByTestId("counter-display");
    expect(counter_display).toHaveTextContent("Counter: 0");
    fireEvent.click(add_btn);
    expect(counter_display).toHaveTextContent("Counter: 1");
    fireEvent.click(add_btn);
    expect(counter_display).toHaveTextContent("Counter: 2");
    global.score++;
  });

  it(`On clicking Reduce button the counter value should decrease`, () => {
    render(<Counter />);
    const reduce_btn = screen.getByTestId("reduce-button");
    const counter_display = screen.getByTestId("counter-display");
    expect(counter_display).toHaveTextContent("Counter: 0");
    fireEvent.click(reduce_btn);
    expect(counter_display).toHaveTextContent("Counter: -1");
    fireEvent.click(reduce_btn);
    expect(counter_display).toHaveTextContent("Counter: -2");
    global.score++;
  });
});
