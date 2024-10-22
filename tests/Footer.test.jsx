import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../src/components/Footer";

describe("Footer Component", () => {
    it("renders the footer text correctly", () => {
        render(<Footer />);

        expect(
            screen.getByText(/© 2024 Barris Vius. Todos los derechos reservados./i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Tens preguntes\? Escriu-nos a/i)
        ).toBeInTheDocument();
    });

    it("renders the correct email link", () => {
        render(<Footer />);

        const emailLink = screen.getByRole("link", { name: /info@barrisvius.com/i });
        expect(emailLink).toHaveAttribute("href", "mailto:info@latevaempresa.com");
    });
});