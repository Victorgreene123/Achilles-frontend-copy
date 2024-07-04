import React from "react"

const BlogItem= (props) =>{
    return(
        <>
       <div class="max-w-md box-border text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm p-4 ">
        <img src={`/images/${props.image}`} class="w-full h-auto rounded-lg"></img>
        <div class="w-full flex items-center justify-between mt-2">
            <span class="text-gray-600">{props.category}</span>
            <span class="text-gray-600">{props.date}</span>
        </div>
        <div class="leading-tight mt-2">
            <h3 class="text-lg font-semibold">{props.title}</h3>
            <p class="leading-relaxed text-justify mt-2">{props.description}</p>
        </div>
    </div>
        </>
    )
}

export default BlogItem