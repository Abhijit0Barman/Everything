import { renderHook, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Input from "../Components/Input";
import UserCard from "../Components/UserCard";
import useDarkMode from "../hooks/useDarkMode";

const imageSrc =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60";

describe("Evaluation test for RCT-211-B21-E3", () => {
  beforeAll(() => {
    global.score = 1;
    console.log("Rest score to: 1");
  });

  it("check the default return values and format of useDarkMode hook are inside an array", () => {
    const { result } = renderHook(() => useDarkMode());

    expect(result.current[0]).toBe(false);
    expect(typeof result.current[1]).toBe("function");
    global.score += 1;
  });

  it('should NOT use the "dark-mode" className by default on app-component', () => {
    render(<App />);
    expect(screen.getByTestId("app-component")).not.toHaveClass("dark-mode");
    global.score += 1;
  });

  it('The text on the theme button should have the text "Dark" (default value)', () => {
    render(<App />);
    const themeButton = screen.getByTestId("theme-button");
    expect(themeButton).toHaveTextContent(/dark/i);
    global.score += 1;
  });

  it('should change the button text from "Dark" to "Light" and when the theme is "light" and "dark" respectively', () => {
    render(<App />);
    const themeButton = screen.getByTestId("theme-button");
    expect(themeButton).toHaveTextContent(/dark/i);
    userEvent.click(themeButton, () => {
      expect(themeButton).toHaveTextContent(/light/i);
    });

    global.score += 1;
  });

  it("should persist the theme even with page refresh/re-render", () => {
    const { container } = render(<App />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const elements = container.getElementsByClassName("dark-mode");
    expect(elements.length).toBe(1);
    global.score += 1;
  });

  it("should render the UserCard component in the UI", () => {
    render(<App />);
    expect(screen.getByTestId("usercard")).toBeInTheDocument();
    global.score += 1;
  });

  it("should have the proptypes defined for the UserCard generic component, with name prop as `isRequired`", () => {
    jest.spyOn(console, "error");
    render(
      <UserCard
        title={2}
        backgroundColor={true}
        description={34}
        avatarShape={false}
      />
    );
    expect(console.error).toBeCalledTimes(5);
    jest.clearAllMocks();
    global.score += 1;
  });

  it("should show the default values of description (Testing Description) if the props are not present", () => {
    render(<UserCard name="Masai" />);
    const descriptionText = screen.getByText(/description/i);
    expect(descriptionText).toBeInTheDocument();
    global.score += 1;
  });

  it("should use the default values of red as classname for backgroundColor props for usercard, if it is not present", () => {
    const { container } = render(<UserCard name="Masai" />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const elements = container.getElementsByClassName("red");
    expect(elements.length).toBe(1);
    global.score += 1;
  });

  it("should render the imageURL inside an image tag properly", () => {
    render(<UserCard name="Testing" imageURL={imageSrc} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", imageSrc);
    global.score += 1;
  });

  it("should render the UserCard, with the title props", () => {
    render(<UserCard name="Testing 1" title="Full stack developer" />);
    expect(screen.getByText(/developer/i)).toBeInTheDocument();
    global.score += 1;
  });

  it('should render the UserCard with a default className of "round" as a value for the avatarShape prop for the userimage', () => {
    const { container } = render(
      <UserCard name="Testing 1" imageURL={imageSrc} />
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const elements = container.getElementsByClassName("round");
    expect(elements.length).toBe(1);
    global.score += 2;
  });

  it("should have the proptypes defined for the Input generic component, with variant prop as `isRequired`", () => {
    const consoleError = jest.spyOn(console, "error");
    render(<Input type={3} size={7} value={false} onChange={{}} />);
    expect(consoleError).toBeCalledTimes(5);
    global.score += 2;
  });

  it("should render the Input component in the UI", () => {
    render(<Input variant="filled" />);
    expect(screen.getByTestId("inputTag")).toBeInTheDocument();
    global.score += 1;
  });

  it("should use the default value of size(md) if the size prop is not given", () => {
    render(<Input variant="outline" />);
    const inputTag = screen.getByTestId("inputTag");
    expect(inputTag).toHaveClass("md");
    global.score += 1;
  });

  it("should use the variant props as classnames to the input tag", () => {
    render(<Input variant="flushed" size="lg" />);
    const inputTag = screen.getByTestId("inputTag");
    expect(inputTag).toHaveClass("flushed");
    global.score += 1;
  });

  it("should show the value typed inside the input box, inside App.js input-value div", () => {
    render(<App />);
    const inputTag = screen.getByTestId("inputTag");
    userEvent.type(inputTag, "Hello world");
    const inputValueDiv = screen.getByTestId("input-value");
    expect(inputValueDiv).toHaveTextContent(/world/i);
    global.score += 1;
  });
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
