import React, {useState} from "react";
import Header from "./component/Header";
import ControleEditora from "./controle/ControleEditora";
import {useNavigate} from "react-router-dom";

const controleEditora = new ControleEditora()
export default function EditoraDados() {

    const [nome, setNome] = useState('');

    const navigate = useNavigate();
    const incluir = (evento) => {
        evento.preventDefault();
        const editora = {
            codEditora: 0,
            nome: nome
        };
        controleEditora.incluir(editora);
        navigate("/novo");
    };


    return (
        <>
            <Header/>
            <main className='container'>
                <h1>Cadastro Editora</h1>
                <form onSubmit={incluir} method='post'>
                    <div className="form-group mb-3">
                        <label htmlFor="titulo">Nome da Editora</label>
                        <input
                            type="text"
                            className="form-control"
                            id="titulo"
                            name='nomeEditora'
                            onChange={(evento) => setNome(evento.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar Dados</button>
                </form>
            </main>
        </>
    )
}