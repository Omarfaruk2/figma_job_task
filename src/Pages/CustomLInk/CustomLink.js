import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
 
    return (
        <div>
            <Link
                style={{ colour: match ? "red" : "blue", textDecoration: match ? "underline" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
 
        </div>
    )
};

export default CustomLink;

// import React from 'react'
 
 
// function ({ children, to, ...props }) {
//     let resolved = useResolvedPath(to)
//     let match = useMatch({ path: resolved.pathname, end: true })
 
//     return (
//         <div>
//             <Link
//                 style={{ colour: match ? "red" : "blue", textDecoration: match ? "underline" : "none" }}
//                 to={to}
//                 {...props}
//             >
//                 {children}
//             </Link>
 
//         </div>
//     )
// }
 
 
// export default CustomLink