import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PopularCard from "../src/components/popularSection/PopularCard";


describe("PopularCard Component", () => {
    const mockData = {
        name: "Poblenou",
        image: "/popular/poblenou.jpg",
        description: "Poblenou is known as Barcelona's innovation district.",
    };

    it("renders the card with the correct data", () => {
        render(<PopularCard name={mockData.name} image={mockData.image} description={mockData.description} />);

        expect(screen.getByText(mockData.name)).toBeInTheDocument();
        const image = screen.getByAltText(mockData.name);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", mockData.image);
    });
});