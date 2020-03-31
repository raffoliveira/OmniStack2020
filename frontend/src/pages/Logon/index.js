import React, {useState} from  'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';


export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){

        e.preventDefault();

        try{
            const response = await api.post('session', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');

        }catch(err){
            alert('Login Fail! Try again.');
        }

    }
    
    return(
        <div className="logon-container">

            <section className="form">
                <img src={logoImg} alt="Be The Heroes"/>
            
                <form onSubmit={handleLogin}>
                    <h1>Make your logon</h1>
                    <input 
                        placeholder="Your ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button className = "button" type="submit">Log in</button>

                    <Link className="back-link" to ="/register">
                        <FiLogIn size={16} color="E02041"/> I don't have register.
                    </Link>
                </form>
            </section>

            <img src={herosImg} alt="Heroes"/>            
        </div>
       
    );
}