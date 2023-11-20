import type {NextPage} from "next";
import React, {useState} from "react";
import ControleEditora from "@/classes/controle/ControleEditora";
import {router} from "next/client";
import {Menu} from "@/components/Menu";

const controleEditora = new ControleEditora()
const baseUrl = "http://localhost:3000/api/livros"
const baseUrlEditora = "http://localhost:3000/api/editoras"


const LivroDados: NextPage = () => {

    //metodo que pega o array de editora e modifica colocando value e text
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome
    }));
    //Defini as States inicial
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);


    const navigate = (pagina: string) => router.push(pagina);

    const tratarCombo = (evento: any) => {
        const numerointeiro = parseInt(evento.target.value)
        setCodEditora(numerointeiro)
    }

    const incluir = (evento: any) => {
        evento.preventDefault();
        const livro = {
            codigo: 0,
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split("\n")
        };

        incluirLivro(livro);
        navigate("/LivroLista")


    };

    const incluirLivro = async (livro: any) => {
        const resposta = await fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(livro)
        }).then(respota => respota.json())
    };


    return (
        <>
            <Menu/>
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
                        <select className="form-control" id="editora" name='editora'
                                onChange={(evento) => tratarCombo(evento)}>
                            {opcoes.map((opcao) => (
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

export default LivroDados;