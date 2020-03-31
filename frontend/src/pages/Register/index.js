import React, {useState} from  'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';


//style ={{}} indica a primeira chave esta inserindo Js dentro do HTML
//e a segunda indica que está inserindo um objeto do JS dentro do HTML
//pode colocar quantas propriedades vc quiser

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault(); //prevenir o carregamento da página toda ao enviar formulário

        const data = {name, email, whatsapp, city, uf};
        //console.log({name, email, whatsapp, city, uf});

        try{
            const response = await api.post('ongs', data);
            alert(`Your access ID is: ${response.data.id}`);
            history.push('/'); //depois enviar o usuário para tela home
        }catch(err){
            alert('Register error! Try again.');
            
        }
        
        
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Heroes"/>
                    <h1>Register</h1>
                    <p>Make your register. Enter the plataform, help people find the cases of your NGO.</p>

                    <Link className="back-link" to ="/">
                        <FiArrowLeft size={16} color="E02041"/> Back to Logon.
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Name of NGO"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="City" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF"                         
                            style={{width:100}} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>

       
    );
}