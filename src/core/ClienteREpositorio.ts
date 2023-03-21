import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    
    obterTodos():Promise<void>
}