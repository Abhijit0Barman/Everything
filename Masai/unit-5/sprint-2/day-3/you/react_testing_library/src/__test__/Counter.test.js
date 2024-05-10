/**
 * if counter is present
 * The initial counter value should be 0
 * If I click it once its final value should be 1
 * If I click it twice its final value should be 2
 */

import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Test Counter App", () => {
  it("if counter is present", () => {
    render(<App />);
    const counter=screen.getByTestId("counter")
    expect(counter).toBeInTheDocument();
  });

  it("The initial counter value should be 0",()=>{
    render(<App />);
    const counter=screen.getByTestId("counter")
    expect(counter).toHaveTextContent("Counter: 0");
  })

  it("If I click it once its final value should be 1",()=>{
    render(<App />);
    const counter=screen.getByTestId("counter")
    expect(counter).toHaveTextContent("Counter: 0");
    const button=screen.getAllByTestId("test-button");
    fireEvent.click(button[0]);
    expect(counter).toHaveTextContent("Counter: 1");
  })
  
  it("If I click it twice its final value should be 2",()=>{
    render(<App />);
    const counter=screen.getByTestId("counter")
    expect(counter).toHaveTextContent("Counter: 0");
    const button=screen.getAllByTestId("test-button");
    fireEvent.click(button[0]);
    fireEvent.click(button[0]);
    expect(counter).toHaveTextContent("Counter: 2");
  })

  it("If I click it once for decrement its final value should be -1",()=>{
    render(<App />);
    const counter=screen.getByTestId("counter")
    expect(counter).toHaveTextContent("Counter: 0");
    const button=screen.getAllByTestId("test-button");
    fireEvent.click(button[1]);
    expect(counter).toHaveTextContent("Counter: -1");
  })

  it("If I click it twice for decrement its final value should be -2",()=>{
    render(<App />);
    const counter=screen.getByTestId("counter")
    expect(counter).toHaveTextContent("Counter: 0");
    const button=screen.getAllByTestId("test-button");
    fireEvent.click(button[1]);
    fireEvent.click(button[1]);
    expect(counter).toHaveTextContent("Counter: -2");
  })

});

//snapshot testing