import * as React from 'react'

export const Grid = ({children, columns = 2}) => {
    const content = children.filter((child) => child !== '\n')
    const width = columns !== 0 ? Math.floor((100 - columns) / columns) : 50
    return (
        <div 
            style={{
                display: 'flex', 
                flexFlow: 'row wrap',
                gap: '0.6rem',
                justifyContent: 'space-between'
            }}
        >
            {content.map((child, index) => {
                console.log(child)
                return (
                    <div style={{width: `${width}%`}} key={index}>{child}</div>
                )
            })}
        </div>
    )
}