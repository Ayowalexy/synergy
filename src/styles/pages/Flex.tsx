import React from 'react'
import { ReactNode } from 'react'

type flexProps = {
    children: ReactNode,
    w?: string | number,
    otherProps?: object
}

const Flex = ({children, w = '100%', otherProps}: flexProps): JSX.Element => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: w,
                ...otherProps
            }}
        >
            {children}
        </div>
    )
}

type textProps = {
    children: ReactNode,
    otherProps?: object
}

export const Text = ({children, otherProps}: textProps) => {
    return (
        <p
            style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#EFEFEF',
                ...otherProps
            }}
        >
            {children}
        </p>
    )
}

export default Flex