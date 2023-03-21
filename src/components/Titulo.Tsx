import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function Titulo (props) {
    return (
    <div className="flex flex-col justify-center rounded-md">
            <h1 className="px-7 py-2">
                {props.children}
                </h1>
        <hr  className="border-2 border-purple-500"/>
    </div>

    ) 

    }