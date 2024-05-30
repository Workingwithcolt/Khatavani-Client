import * as React from 'react'

type PropsType = {
    children: React.ReactNode
}

export const Button = ({ children }: PropsType) => {
    return (
        <button
            style={{
                padding: '5px',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: 'gray',
                color: 'white',
                fontSize: '1.2em'
            }}
        >{children}</button>
    )
}
