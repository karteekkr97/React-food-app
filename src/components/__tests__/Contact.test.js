import Contact from "../Contact"
import "@testing-library/jest-dom"
import { render,screen } from "@testing-library/react";


test("The contact page heading should be loaded",()=>{
    render(<Contact />)

    const headingText=screen.getByRole("heading");

    expect(headingText).toBeInTheDocument();
})

test("The contact page 2 input elements should be loaded",()=>{
    render(<Contact />)

    const inputBox=screen.getAllByRole("textbox");

    expect(inputBox.length).toBe(2);
})

test("The contact page button element should be loaded",()=>{
    render(<Contact />)

    const button=screen.getByText("Submit");
    console.log(button);

    expect(button).toBeInTheDocument();
})