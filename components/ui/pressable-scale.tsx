import { PressableScale as PresstoPressableScale } from 'pressto';
import { ComponentProps } from 'react';

type PressableScaleProps = ComponentProps<typeof PresstoPressableScale>;

export function PressableScale(props: PressableScaleProps) {
    return (
        <PresstoPressableScale
            {...props}
            rippleColor="transparent"
        />
    );
}