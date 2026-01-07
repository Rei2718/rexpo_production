import { ThemedText, ThemedTextProps } from '@/components/ui/themed-text';
import { useMemo } from 'react';

export function useFormattedText(text: string, props?: ThemedTextProps) {
    return useMemo(() => {
        return text.split('\n').map((line, index) => (
            <ThemedText type="footnote" key={index} {...props}>
                {line}
            </ThemedText>
        ));
    }, [text, props]);
}
