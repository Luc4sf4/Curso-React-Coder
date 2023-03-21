import * as firebase from "firebase/app";
import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteREpositorio"
import { useEffect, useState } from "react"
import useTabelaOuForm from "./useTabelaouForm"
import { obterTodos } from "@/backend/db/ColecaoCliente";
// import ColecaoCliente from '@/backend/db/ColecaoCliente';

export default function useClientes (){ 

    // const repo: ClienteRepositorio = new ColecaoCliente();

    const { exibirFormulario, exibirTabela,formularioVisivel, tabelaVisivel} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela' )
  
  useEffect(()=>{
    obterTodosget()
  }, [])

   const obterTodosget =()=> {

        obterTodos().then((clientes: any) => {

            setCliente(cliente)
            exibirTabela()
          console.log('batata',clientes)
        })


    }
  
    const clientes = [
      new Cliente('Ana', 34, '1'),
      new Cliente('Lucas', 18, '2'),
      new Cliente('Miuki', 18, '3'),
      new Cliente('Felipe', 22, '4'),
        ]
   
    function clienteSelecionado (cliente: Cliente){
      setCliente(cliente)
        exibirFormulario()
    }
  
    function clienteExcluido (cliente: Cliente){
      console.log(`Excluir... ${cliente.nome}`)
    }
    
    function novoCliente () {
      setCliente(Cliente.vazio())
      exibirFormulario()
  }
    function salvarCliente(cliente: Cliente){
  
      console.log(cliente)
      setVisivel('tabela')
  
    }

    return {
        exibirTabela,
        tabelaVisivel,
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        clienteExcluido,
        clienteSelecionado,
        obterTodos
        


    }


}