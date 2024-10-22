/* eslint-disable no-undef */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FormSection from "../src/components/formSection/FormSection";
import useFetch from "../src/customHooks/useFetch";

vi.mock("../src/customHooks/useFetch");

describe("FormSection Component", () => {
    beforeEach(() => {

        useFetch.mockImplementation((url) => {
            if (url === "/barrisVius/neighborhoodsActivities") {
                return { data: [{ id: 1, nombre: "Example District" }] };
            }
            if (url === "/api/actividades-economicas") {
                return { data: [{ id: 1, nombre: "Example Activity" }] };
            }
            return { data: [] };
        });
    });

    it("renders the form with correct labels and placeholders", () => {
        render(<FormSection />);

        expect(screen.getByText(/Vols obrir un negoci?/i)).toBeInTheDocument();
        expect(screen.getByText(/Selecciona el barri/i)).toBeInTheDocument();

        expect(screen.getByLabelText(/Barri/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Activitat Econòmica/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
    });


    it("submits the form with correct data", async () => {
        const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => { });

        render(<FormSection />);

        fireEvent.change(screen.getByLabelText(/Barri/i), { target: { value: "1" } });
        fireEvent.change(screen.getByLabelText(/Activitat Econòmica/i), { target: { value: "1" } });
        fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

        await waitFor(() => {
            expect(consoleSpy).toHaveBeenCalledWith({ district: "1", activity: "1" });
        });

        consoleSpy.mockRestore();
    });
});