import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
    it("counter displays correct initial count", () => {
        const initialValue = 0
        const {getByTestId} = render(<Counter count={initialValue} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(initialValue);
    });
    it("counter displays 5 when initialized with 5", () => {
        const initialValue = 5
        const {getByTestId} = render(<Counter count={initialValue} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(initialValue);
    });
    it("count should increment by 1 if increment button is clicked", () => {
        const initialValue = 0
        const {getByTestId, getByRole} = render(<Counter count={initialValue} />);
        const incrementBtn = getByRole("button", {name: "Increment"});
        fireEvent.click(incrementBtn)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(initialValue + 1);
    });
    it("count should decrement by 1 if decrement button is clicked", () => {
        const initialValue = 1
        const {getByTestId, getByRole} = render(<Counter count={initialValue} />);
        const decrementBtn = getByRole("button", {name: "Decrement"});
        fireEvent.click(decrementBtn)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(initialValue - 1);
    });
    it("count should reset to initial value when Reset button is clicked", () => {
        const initialValue = 1
        const {getByTestId, getByRole} = render(<Counter count={initialValue} />);
        const incrementBtn = getByRole("button", {name: "Increment"});
        const resetBtn = getByRole("button", {name: "Reset"});
        fireEvent.click(incrementBtn)
        fireEvent.click(resetBtn)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(initialValue);
    });
    it("count should change sign when Switch Sign button is clicked", () => {
        const initialValue = 1
        const {getByTestId, getByRole} = render(<Counter count={initialValue} />);
        const switchSignBtn = getByRole("button", {name: "Switch Sign"});
        fireEvent.click(switchSignBtn)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(initialValue * -1);
    });
});