import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../src/components/Navbar";
import { vi } from 'vitest';

const handleScroll = vi.fn();

describe("Navbar Component", () => {
    it("renders the navbar with correct links", () => {
        render(<Navbar handleScroll={handleScroll} />);

        expect(screen.getByText(/Barris més populars/i)).toBeInTheDocument();
        expect(screen.getByText(/Vols obrir un negoci\?/i)).toBeInTheDocument();
    });

});
