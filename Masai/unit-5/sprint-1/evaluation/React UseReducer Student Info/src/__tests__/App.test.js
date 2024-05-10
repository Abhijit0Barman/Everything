import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { reducer, initialState } from "../component/AddStudent";

const initialStateCheck = {
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive",
};

describe("React Form Component Testing", () => {
  beforeAll(() => {
    global.score = 1;
  });

  beforeEach(() => {
    cleanup();
    const defaultState = reducer(initialState, { type: "not-present" });
    expect(defaultState).toStrictEqual(initialStateCheck);
  });

  it("Reducer initialstate should match the initial state as per problem", () => {
    expect(initialState).toStrictEqual(initialStateCheck);
    global.score += 1;
  });

  it("Form is present with proper input fields to take input of student-data", () => {
    render(<App />);
    const inputForm = screen.getByTestId("input-form");
    expect(inputForm).toBeInTheDocument();
    const nameInput = screen
      .getByTestId("name-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(nameInput, { target: { value: "Student-1" } });
    expect(nameInput).toHaveValue("Student-1");

    const batchInput = screen
      .getByTestId("batch-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(batchInput, { target: { value: "FTWEB-13" } });
    expect(batchInput).toHaveValue("FTWEB-13");

    const courseInput = screen
      .getByTestId("course-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(courseInput, { target: { value: "RCT211" } });
    expect(courseInput).toHaveValue("RCT211");

    const imageInput = screen
      .getByTestId("image-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(imageInput, {
      target: {
        value:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png",
      },
    });
    expect(imageInput).toHaveValue(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
    );

    const selectRating = screen.getByRole("combobox");
    userEvent.selectOptions(
      selectRating,
      screen.getAllByRole("option", {
        name: "2",
      })
    );
    expect(screen.getByRole("option", { name: "2" }).selected).toBe(true);

    const current_status = screen.getByRole("checkbox");
    fireEvent.click(current_status);
    global.score += 2;
  });

  it("Reducer should update on typing name in the input box", () => {
    render(<App />);
    const nameInput = screen
      .getByTestId("name-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(nameInput, { target: { value: "Student-1" } });
    expect(nameInput).toHaveValue("Student-1");

    const newState = reducer(initialState, {
      type: "NAME",
      payload: "Student-1",
    });

    expect(newState).toStrictEqual({ ...initialStateCheck, name: "Student-1" });
    global.score += 1;
  });

  it("Reducer should update on typing batch in the input box", () => {
    render(<App />);
    const batchInput = screen
      .getByTestId("batch-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(batchInput, { target: { value: "FTWEB-13" } });
    expect(batchInput).toHaveValue("FTWEB-13");

    const newState = reducer(initialState, {
      type: "BATCH",
      payload: "FTWEB-13",
    });

    expect(newState).toStrictEqual({ ...initialStateCheck, batch: "FTWEB-13" });
    global.score += 1;
  });

  it("Reducer should update on typing course in the input box", () => {
    render(<App />);
    const courseInput = screen
      .getByTestId("course-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(courseInput, { target: { value: "RCT211" } });
    expect(courseInput).toHaveValue("RCT211");

    const newState = reducer(initialState, {
      type: "COURSE",
      payload: "RCT211",
    });

    expect(newState).toStrictEqual({ ...initialStateCheck, course: "RCT211" });
    global.score += 1;
  });

  it("Reducer should update on typing image in the input box", () => {
    render(<App />);
    const imageInput = screen
      .getByTestId("image-wrapper")
      .getElementsByTagName("input")[0];
    fireEvent.change(imageInput, {
      target: {
        value:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png",
      },
    });
    expect(imageInput).toHaveValue(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
    );

    const newState = reducer(initialState, {
      type: "IMAGE",
      payload:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png",
    });

    expect(newState).toStrictEqual({
      ...initialStateCheck,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png",
    });
    global.score += 1;
  });

  it("Reducer should update on selecting rating from the options", () => {
    render(<App />);
    const selectRating = screen.getByRole("combobox");
    userEvent.selectOptions(
      selectRating,
      screen.getAllByRole("option", {
        name: "2",
      })
    );
    expect(screen.getByRole("option", { name: "2" }).selected).toBe(true);

    const newState = reducer(initialState, {
      type: "RATING",
      payload: "2",
    });

    expect(newState).toStrictEqual({ ...initialStateCheck, rating: "2" });
    global.score += 1;
  });

  it("Reducer should update on checking the status checkbox", () => {
    render(<App />);
    const current_status = screen.getByRole("checkbox");
    fireEvent.click(current_status);

    const newState = reducer(initialState, {
      type: "STATUS",
      payload: true,
    });

    expect(newState).toStrictEqual({ ...initialStateCheck, status: "active" });
    global.score += 1;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
