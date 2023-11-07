import React from 'react';
import { render, screen } from '@testing-library/react';
import CookingTime from './cookTime';

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

describe("CookingTime", () => {
    it('renders the cooking time', () => {
        const cookingTime = '30 minutes';

        render(<CookingTime time={cookingTime} />);

        expect(screen.getByText(`Cooking Time: ${cookingTime}`)).toBeInTheDocument();
    })
})