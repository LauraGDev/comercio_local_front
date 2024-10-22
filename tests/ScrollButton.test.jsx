import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ScrollButton from "../src/components/heroSection/ScrollButton"; 

describe("ScrollButton Component", () => {
    it("renders the button with the correct image", () => {
        render(<ScrollButton handleScroll={() => { }} target="next-section" />);

        const buttonImage = screen.getByAltText(/Salta a la següent secció/i);
        expect(buttonImage).toBeInTheDocument();
        expect(buttonImage).toHaveAttribute("src", "./arrow-icon.svg");
    });

    it("calls handleScroll with the correct target when clicked", () => {
        const handleScrollMock = vi.fn();
        render(<ScrollButton handleScroll={handleScrollMock} target="next-section" />);

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(handleScrollMock).toHaveBeenCalledWith("next-section");
        expect(handleScrollMock).toHaveBeenCalledTimes(1);
    });
});
