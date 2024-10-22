import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeroSection from "../src/components/heroSection/HeroSection"; 

describe("HeroSection Component", () => {
    it("renders the heading correctly", () => {
        render(<HeroSection />);

        const heading = screen.getByRole("heading", {
            name: /Impulsa el teu negoci, tria el millor barri/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it("renders the paragraph text correctly", () => {
        render(<HeroSection />);

        const paragraph = screen.getByText(
            /Barris Vius és una plataforma digital que revitalitza el comerç local/i
        );
        expect(paragraph).toBeInTheDocument();
    });

    it("renders the image with correct alt text", () => {
        render(<HeroSection />);

        const image = screen.getByAltText(/Imatge Barri/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "./hero.svg");
    });
});
