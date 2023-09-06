import { render } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
    it("counter displays correct initial count", () => {
        const {getByTestId} = render(<Counter count={0} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });
    it("counter displays 5 when initialized with 5", () => {
        const {getByTestId} = render(<Counter count={5} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(5);
    });
});