import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Layout from "../components/Layout"
import Botao from "../components/Botao"
import { useState } from "react"
import Formualrio from "../components/Formulario"
import useClientes from "../hooks/useClientes"
import React from "react"
import { getAuth } from 'firebase/auth';
import * as firebase from 'firebase/compat/app'
import '@firebase/firestore'


export default function Home() {
 
  
  const {clienteSelecionado, 
    novoCliente, clienteExcluido, 
    salvarCliente, 
    clientes, 
    cliente,
    tabelaVisivel ,
    exibirTabela } =  useClientes()
  

  return (
   
    
        <div className="flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white "
        >
        <Layout titulo="Cadastro Simples" >


        {tabelaVisivel ? ( 
           <>
            <div className="flex justify-end">

          <Botao cor="gray" className="mb-4" onClick={novoCliente}> Novo Cliente</Botao>

            </div>


          <Tabela clientes = {clientes} 
          clienteSelecionado = {clienteSelecionado}
          clienteExcluido = {clienteExcluido}/>
            
            </>):( 
            <Formualrio 
            cliente = {cliente}
            clienteMudou = {salvarCliente}
            cancelado = {exibirTabela}/>
         
         
          
         

        
          
     

       
  
   
      )}
      </Layout>
         
         
        
      </div>
  )



}
