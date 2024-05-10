import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../App";
import { todos } from "../App";
import Lists from "../Components/Lists";

describe("Testing the PSC application", () => {
  beforeAll(() => {
    global.score = 1;
    console.log("Score rest to 1");
  });

  it("should not show the list component by default", () => {
    render(<App />);
    expect(screen.queryByTestId("list-component")).not.toBeInTheDocument();
    global.score += 1;
  });

  it("should have a button to toggle the visibility of the List component", () => {
    render(<App />);
    const toggleButton = screen.getByTestId("show-list-button");
    expect(toggleButton).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("list-component")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId("list-component")).not.toBeInTheDocument();
    global.score += 2;
  });

  it("should show the 3 li tags in the list component, by default", () => {
    render(<Lists todos={todos} />);
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const listItems = getAllByRole("listitem");
    expect(listItems.length).toBe(3);
    global.score += 2;
  });

  it("should render an image tag in the UI with the given src and alt attributes", () => {
    render(<App />);
    const imageTag = screen.getByTestId("image-tag");
    expect(imageTag).toBeInTheDocument();
    expect(imageTag.src).toContain("images.unsplash.com");
    expect(imageTag.alt).toContain("todo-cover");
    global.score += 2;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
