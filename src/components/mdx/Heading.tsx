import * as React from 'react'

export const HeadingProvider = (level: number) => {


    return ({children}) => {
        
        console.log(level)
        return <div 
                    style={{
                        fontSize: `${(5 - (level / 1.5)) * 0.5}rem`,
                        textDecoration:'underline'
                    }}
                >
                    {children}
                </div>
    }
    
}