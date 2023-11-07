import React from 'react';
import { render, screen } from '@testing-library/react';
import PrepTime from './PrepTime';

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

describe("PrepTime", () => {
    it('renders the preperation time', () => {
        const prepTime = '30 minutes';

        render(<PrepTime time={prepTime} />);

        expect(screen.getByText(`Preperation Time: ${prepTime}`)).toBeInTheDocument();
    })
})