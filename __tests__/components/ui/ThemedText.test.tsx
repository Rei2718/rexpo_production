import { ThemedText } from '@/components/ui/themed-text';
import { render } from '@testing-library/react-native';
import React from 'react';

// Mock useThemeColor
jest.mock('@/hooks/use-theme-color', () => ({
    useThemeColor: jest.fn(() => '#000000'),
}));

describe('ThemedText', () => {
    it('renders correctly with default props', () => {
        const { getByText } = render(<ThemedText>Test Text</ThemedText>);
        const textElement = getByText('Test Text');
        expect(textElement).toBeTruthy();
    });

    it('applies correct style for h1 type', () => {
        const { getByText } = render(<ThemedText type="h1">Header</ThemedText>);
        const textElement = getByText('Header');
        expect(textElement).toBeTruthy();
    });
});
