import { ComponentProps } from 'react';
import { Container } from './container';

export function Column(props: ComponentProps<typeof Container>) {
    return <Container flexDirection="column" {...props} />;
}

export function Row(props: ComponentProps<typeof Container>) {
    return <Container flexDirection="row" {...props} />;
}
