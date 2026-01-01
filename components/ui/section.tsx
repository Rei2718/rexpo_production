import { ComponentProps } from 'react';
import { Container } from './container';
import { Column } from './flex';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface SectionProps extends ComponentProps<typeof Container> {
    title: string;
}

export function Section({ title, children, ...props }: SectionProps) {
    // According to usage: Section title="..." > ...children...
    // Probably has some spacing between title and children.
    return (
        <Column gap="s8" {...props}>
            <ThemedText type="title3">{title}</ThemedText>
            <ThemedView>
                {children}
            </ThemedView>
        </Column>
    );
}
