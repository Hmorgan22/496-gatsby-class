import React from "react";
import { render, screen } from "@testing-library/react";
import AboutPage from "./about";

jest.mock("../components/layout", () => {
    return ({ children }) => <div data-testid="layout-mock">{children}</div>;
});

describe("AboutPage", () => {
    it("renders the About Me page content", () => {
        render(<AboutPage />);

        expect(screen.getByText("Hi there! I'm the proud creator of this site, which I built with Gatsby.")).toBeInTheDocument();
    });
});