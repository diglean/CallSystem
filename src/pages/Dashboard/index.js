import './dashboard.css'
import { useState } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export default function Dashboard() {
    const [chamados, setChamados] = useState([1])
    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Atendimentos">
                    <FiMessageSquare size={25} />
                </Title>

                {chamados.length === 0 ? (
                    <div className="container dashboard">
                        <span>Nenhum chamado registrado...</span>
                        <Link to="/new" className="new">
                            <FiPlus size={25} color="#FFF" />
                            Novo chamado
                        </Link>
                    </div>
                ) : (
                    <>
                    <Link to="/new" className="new">
                            <FiPlus size={25} color="#FFF" />
                            Novo chamado
                        </Link>

                        <table>
                            <thead>
                                <tr>
                                    <th scope="column">Cliente</th>
                                    <th scope="column">Assunto</th>
                                    <th scope="column">Status</th>
                                    <th scope="column">Cadastrado em</th>
                                    <th scope="column">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Cliente">Sujeito</td>
                                    <td data-label="Assunto">Suporte</td>
                                    <td data-label="Status">
                                        <span className="badge" style={{backgroundColor: '#5cb85c'}}>Em aberto</span>
                                    </td>
                                    <td data-label="Cadastrado">12/07/2002</td>
                                    <td data-label="#">
                                        <button style={{backgroundColor: '#3583f6'}} className="action">
                                            <FiSearch color="#FFF" size={17}/>
                                        </button>
                                        <button style={{backgroundColor: '#f6a935'}} className="action">
                                            <FiEdit2 color="#FFF" size={17}/>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </>
                )}


            </div>

        </div>
    )
}