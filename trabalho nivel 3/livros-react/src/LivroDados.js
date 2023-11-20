import React, {useState} from "react";
import Header from "./component/Header";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import {useNavigate} from "react-router-dom";

const controlelivros = new ControleLivros()
const controleEditora = new ControleEditora()
export default function LivroDados() {


    //metodo que pega o array de editora e modifica colocando value e text
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    const tratarCombo = (evento) => {
        const numerointeiro = parseInt(evento.target.value)
        setCodEditora(numerointeiro)
    }

    const incluir = (evento) => {
        evento.preventDefault();
        const livro = {
            codLivro: 0,
            titulo: titulo,
            resumo: resumo,
            codEditora: codEditora,
            autores: autores.split("\n")
        };
        controlelivros.incluir(livro);
        navigate("/");
    };


    return (
        <>
            <Header/>
            <main className='container'>
                <h1>Dados do Livro</h1>
                <form onSubmit={incluir} method='post'>
                    <div className="form-group mb-3">
                        <label htmlFor="titulo">Titulo</label>
                        <input
                            type="text"
                            className="form-control"
                            id="titulo"
                            name='titulo'
                            onChange={(evento) => setTitulo(evento.target.value)}/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="resumo">Resumo</label>
                       <textarea
                           className="form-control"
                           id="resumo"
                           name='resumo'
                           onChange={(evento) => setResumo(evento.target.value)}
                       ></textarea>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="editora">Editora</label>
                        <select className="form-control" id="editora" name='editora' onChange={tratarCombo} >
                            {opcoes.map((opcao)=>(
                                <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="autores">Autores (1 por linha)</label>
                        <textarea
                            className="form-control"
                            id="autores"
                            name='autores'
                            onChange={(evento) => setAutores(evento.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Salvar Dados</button>
                </form>
            </main>
        </>
    )
}