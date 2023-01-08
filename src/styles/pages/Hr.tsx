import React from 'react'

type hrProps = {
    size?: string,
    margin?: string,
    otherProps?: object
}

export const Hr = ({size, margin, otherProps}: hrProps) => {
    return (
        <div
            style={{
                borderBottom: '1px solid #245460',
                width: size ? size : '90%',
                margin: margin ? margin : '5px auto'
            }}
        />
    )
}