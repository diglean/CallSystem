import './costumers.css';
import { useState } from 'react';
import Title from '../../components/Title'
import Header from '../../components/Header'

import { FiUser } from 'react-icons/fi';


export default function Costumers(){
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');

    function handleAdd(e){
        e.preventDefault();
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25}/>
                </Title>

                <div className="container" onSubmit={handleAdd}>
                    <form className="form-profile costumers">
                        <label>Nome fantasia</label>
                        <input type="text" placeholder="Nome da empresa" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)}/>

                        <label>CNPJ</label>
                        <input type="text" placeholder="CNPJ da empresa" value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>

                        <label>Endereço</label>
                        <input type="text" placeholder="Endereço da empresa" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}