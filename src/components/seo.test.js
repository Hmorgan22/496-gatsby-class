// Seo.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import Seo from "./seo"; // Adjust the import path as needed

// Mock GraphQL data
const mockData = {
    site: {
        siteMetadata: {
            title: "Sample Site Title",
        },
    },
};

// Mock Gatsby's graphql and useStaticQuery functions
jest.mock("gatsby", () => {
    return {
        graphql: jest.fn(),
        useStaticQuery: jest.fn(() => mockData),
    };
});

describe("Seo", () => {
    it("renders the title with the provided title and site title", () => {
        render(<Seo title="Sample Page Title" />);

        // Assert that the title element is rendered with the correct text
        expect(screen.getByText("Sample Page Title | Sample Site Title")).toBeInTheDocument();
    });
});
