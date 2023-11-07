import React from 'react';
import { render, screen } from '@testing-library/react';
import Servings from './Servings';

jest.mock('gatsby', () => {
    return {
        graphql: jest.fn(),
        useStaticQuery: jest.fn(() => {
            return {
                site: {
                    siteMetadata: {
                        title: 'Sample Site Title',
                    },
                },
            };
        }),
    };
});

describe("Servings", () => {
    it('renders the number of servings', () => {
        const amount = '10';

        render(<Servings amount={amount} />);

        expect(screen.getByText(`Number of servings: ${amount}`)).toBeInTheDocument();
    })
})