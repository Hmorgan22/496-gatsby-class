import React from 'react';
import { render, screen } from '@testing-library/react';
import CookingTime from './cookTime';
import Difficulty from './Difficulty';

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

describe("Difficulty", () => {
    it('renders the difficulty level', () => {
        const task = 'easy';

        render(<Difficulty task={task} />);

        expect(screen.getByText(`Difficulty: ${task}`)).toBeInTheDocument();
    })
})