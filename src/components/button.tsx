import React from "react"

export interface ButtonProps  {
    href: string
    text: string
    target?: "_blank" | "_self" | "_parent" | "_top" | string
}

export default function Button({ href, text, target="_self" }: ButtonProps) {
    return <>
        <a href={href} target={target} rel={target=="_blank" ? "noopener noreferrer":""} className="inline-block text-white px-9 py-4 bg-blue hover:bg-blue/50 text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            {text}
        </a>
    </>
}