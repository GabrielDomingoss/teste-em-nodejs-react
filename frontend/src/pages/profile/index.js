import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi';
import './style.css'
import logoImg from '../../assets/logo.svg';
export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"></img>
                <span>Bem Vindo, Axes</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>
            <h1>Casos Registrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição</strong>
                    <p>Descrição teste</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição</strong>
                    <p>Descrição teste</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição</strong>
                    <p>Descrição teste</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição</strong>
                    <p>Descrição teste</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                    </button>
                </li>
            </ul>
        </div>
    )
}