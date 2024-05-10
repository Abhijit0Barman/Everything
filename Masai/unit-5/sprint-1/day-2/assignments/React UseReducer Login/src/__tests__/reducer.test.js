import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App, { initialState, reducer } from "../App";

describe("Test Application using useReducer", () => {
  beforeAll(() => {
    global.score = 1;
  });

  beforeEach(() => {
    cleanup();
   
  });

  test("check if the reducer function handles the default case", () => {
    const defaultState = () => {
      reducer(initialState, { type: "not-present" });
    }
    expect(defaultState).toThrowError('invalid action type');
    global.score += 2;
  });

  test("check if the reducer function handles the email action type", () => {
    render(<App />);
    const newState = reducer(initialState, {
      type: "email",
      payload: "masai@gmail.com",
    });
    expect(newState).toStrictEqual({ email: "masai@gmail.com", password: "" });
    global.score += 2;
  });

  test("check if the reducer function handles the password action type", () => {
    render(<App />);
    const newState = reducer(initialState, {
      type: "password",
      payload: "testing1234",
    });
    expect(newState).toStrictEqual({ email: "", password: "testing1234" });
    global.score += 2;
  });


  test('should render "no details found" text initially when there is no submitted data', () => {
    render(<App />);
    expect(screen.getByTestId("no-details-container")).toHaveTextContent(
      /no details found/i
    );
    expect(screen.queryByTestId("submitted-data-email")).toBeNull();
    expect(screen.queryByTestId("submitted-data-password")).toBeNull();
    global.score += 1;
  });

  test("should display the submitted data in the UI", () => {
    render(<App />);
    const emailInputTag = screen.getByTestId("user-email");
    const passwordInputTag = screen.getByTestId("user-password");
    fireEvent.change(emailInputTag, {
      target: { value: "masaischool@gmail.com" },
    });
    fireEvent.change(passwordInputTag, {
      target: { value: "testing12345" },
    });

    const formElement = screen.getByTestId("form-wrapper");
    fireEvent.submit(formElement);

    const submittedEmailInputTag = screen.getByTestId("submitted-data-email");
    const submittedPasswordInputTag = screen.getByTestId(
      "submitted-data-password"
    );
    expect(submittedEmailInputTag).toHaveTextContent("masaischool@gmail.com");
    expect(submittedPasswordInputTag).toHaveTextContent("testing12345");
    global.score += 1;
  });

  test("should reset the input fields with initial data once the details are submitted", () => {
    render(<App />);
    const emailInputTag = screen.getByTestId("user-email");
    const passwordInputTag = screen.getByTestId("user-password");
    fireEvent.change(emailInputTag, {
      target: { value: "masaischool@gmail.com" },
    });
    fireEvent.change(passwordInputTag, {
      target: { value: "testing12345" },
    });

    const formElement = screen.getByTestId("form-wrapper");
    fireEvent.submit(formElement);
    expect(emailInputTag).toHaveValue("");
    expect(passwordInputTag).toHaveValue("");
    global.score += 1;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
