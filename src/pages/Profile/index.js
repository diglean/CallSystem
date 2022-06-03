import { useState, useContext } from 'react';
import './profile.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import avatar from '../../assets/avatar.png';

import { AuthContext } from '../../contexts/auth';

import { FiSettings, FiUpload } from 'react-icons/fi';

export default function Profile(){
    const { user, signOut } = useContext(AuthContext);
    
    const [nome, setNome] = useState(user && user.nome); //&& vai verificar se tem o user 
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.email);
    
    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Meu perfil">
                    <FiSettings size={25}/>
                </Title>


                <div className='container'>
                    <form className="form-profile">
                        <label className="label-avatar">
                            <span>
                                <FiUpload color="#FFF" size={25}/>
                            </span>

                            <input type="file" accept="image/*"/><br/>
                            {avatarUrl === null ? 
                            <img src={avatar} width="250" height="250" alt="Foto de perfil do usuário"/> 
                            : <img src={avatarUrl} width="250" height="250" alt="Foto de perfil do usuário"/>
                            }
                        </label>

                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                        <label>Email</label>
                        <input type="email" value={email} disabled={true}/>

                        <button type="submit">Salvar</button>
                    </form>
                </div>

                <div className="container">
                    <button className="logout-btn" onClick={ ()=>signOut() }>Sair</button>
                </div>
            </div>
        </div>
    )
}