import React from "react";
import { render, screen } from "@testing-library/react";
import IndexPage from "./index";

jest.mock("../components/layout", () => {
    return ({ children }) => <div data-testid="layout-mock">{children}</div>;
});

describe("IndexPage", () => {
    it("renders the Index page content", () => {
        render(<IndexPage />);

        expect(screen.getByText("Testing 1 2 3.")).toBeInTheDocument();
    });
});