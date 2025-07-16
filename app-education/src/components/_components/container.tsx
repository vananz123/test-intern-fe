import type React from "react";

function Container({children, className}:{children:React.ReactNode;className?:string}) {
    const maxWidth = `w-11/12 max-w-screen-xl ${className}`
    return ( 
        <div className='grid grid-cols-1 justify-items-center'>
            <div className={maxWidth}> {children}</div>
        </div>
    );
}

export default Container;