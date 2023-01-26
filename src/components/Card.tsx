import * as React from 'react'

export const Card = ({children, style = {}}) => {
    return (
        <div 
            style={{
                padding: '0.6rem', 
                background: 'rgba(255,255,255,0.75)', 
                color: '#222222', 
                borderRadius: '0.6rem', 
                boxShadow: '3px 3px 7px 1px rgba(0, 0, 0, 0.2)',
                margin: '0.3rem',
                ...style
            }}
        >
            {children}
        </div>
    )
}