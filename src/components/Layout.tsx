import Titulo from "./Titulo";


interface Layoutprops{

    titulo: string
    children: any

}

export default function Layout (props: Layoutprops) {

    return (

        <div className="flex flex-col w-2/3
        bg-white text-gray-500 `"
            >
            <Titulo>{props.titulo}</Titulo>  
           
            <div className="p-6">

            {props.children}

            </div>
        

        </div>

    )

}