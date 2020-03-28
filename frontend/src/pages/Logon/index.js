import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './styles.css'
import{FiLogIn} from 'react-icons/fi'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

import api from'../../services/api'


export default function Logon(){
    const [id,setId] = useState('')
    const history = useHistory()

async function logonHandler (e){
    e.preventDefault()
    const data = {
        id
    }
try{
    const response = await api.post('/sessions',data)

    localStorage.setItem('ongId',id)
    localStorage.setItem('ongName',response.data.name)
    
    console.log(response)
    history.push('/profile')
    
}catch(err){
    alert('Não existe login')
}

}
    
    return(
            <div className="logon-container">
                <section className="form">
                    <img src={logoImg} alt="Logo"/>
                    <form>
                        <h1>Faça seu Logon</h1>
                        <input 
                            placeholder="Sua ID"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                        <button type="submit" className="button" onClick={logonHandler}>Entrar</button>
                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#E02041"/>
                              Não tem cadastro? 
                        </Link>
                    </form> 
                </section>
                    <img src={heroesImg} alt="Heroes"/> 
            </div>   
    )
}