import  {collection, getDocs, doc, addDoc, updateDoc, deleteDoc} from 'firebase/firestore'
import 'firebase/compat/firestore';
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteREpositorio";
import {db} from '../config';


export const criarCliente: any = async (novoCliente: any) => {
    const docRef = await addDoc(collection(db, 'clientes'), novoCliente);
    console.log('Cliente criado com ID: ', docRef.id);
    return docRef.id;
  };

 
export const obterTodos : any = async  () => { 

    const query = collection( db, 'clientes');
 
    const allClients = await getDocs(query)
    console.log('Feijão',query)

    const dataPosts = allClients.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
    console.log ('Leandro Bobão',dataPosts)
}

export const atualizarCliente: any = async (id: string, novosDados: any) => {
    const docRef = doc(db, 'clientes', id);
    await updateDoc(docRef, novosDados);
    console.log('Cliente atualizado com ID: ', id);
  };

  export const excluirCliente = async (id: string) => {
    const clientRef = doc(db, 'clientes', id);
    await deleteDoc(clientRef);
    return id;
  }

// export default class ColecaoCliente implements ClienteRepositorio{

    
    // //conversor = {

    // //    toFirestore(cliente: Cliente){
    //         return {

    //             nome: cliente.nome,
    //             idade: cliente.idade,

    //         }
    //     },
    //     fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente{

    //         const dados = snapshot.data(options)
    //         return new Cliente (dados.nome, dados.idade, snapshot.id)

    //     }

    // }



    // async salvar (cliente: Cliente): Promise<Cliente> {
    //     if(cliente?.id){

    //       await  this.colecao().doc(cliente.id).set(cliente)
    //      return cliente 
    //     } else {

    //      const docRef = await this.colecao().add(cliente)
    //      const doc = await docRef.get()
    //     return doc.data() as Cliente

    //     }
    // }
    // async excluir (cliente: Cliente): Promise<void> {
    //     return this.colecao().doc(cliente.id).delete()
    // }
    


    // private colecao() {
    //     return collection( db, 'clientes');
    // }
    
