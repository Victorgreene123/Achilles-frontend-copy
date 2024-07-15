import React from "react"

export default function Youtube(props) {
    return(
        
<iframe 
className={props.style}
// width="560"
//  height="315"
  src={`${props.src}?rel=0`}
   title={props.title}
   frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen></iframe>

    )
}

