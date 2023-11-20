import type {NextPage} from "next";
import styles from "../styles/Home.module.css"
import React, {useEffect, useState} from "react";
import Livros from "@/classes/modelo/Livros";
import {Menu} from "@/components/Menu";
import {LinhaLivro} from "@/components/LinhaLivro";
import Head from "next/head";

const baseURL = "http://localhost:3000/api/livros"

const LivroLista: NextPage = () => {
    const [livros, setLivros] = useState<Array<Livros>>([])
    const [carregado, setCarregado] = useState(false);


    const obterLivros = async () => {
        return await fetch(baseURL)
               .then((resposta) => resposta.json())
               .then((resposta) => resposta);
    }
    const excluirLivro = async (codigo: number) => {
        setCarregado(false);
        const returno = await fetch(`${baseURL}/${codigo}`, {method: 'GET'}).then(resposta => resposta.json())
        if (returno) {
            setLivros(returno)
            setCarregado(true);
        }
    }

    useEffect(() => {
        const carregaLivros = async () => {
            setLivros(await obterLivros());

            setTimeout(() => {
                setCarregado(true)
            }, 200);

            return livros;
        };

        carregaLivros();
    }, []);


    return (
        <div className={styles.conteiner}>
            <Head>
                <title>Loja Next | Catálago</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Menu/>
            <main className='container'>
                {!carregado && (<div className={styles.load}>
                    <div className={styles.load_box}>
                        <div className={styles.load_box_circle}></div>
                        <p className={styles.load_box_title}>Aguarde, carregando...</p>
                    </div>
                </div>)}
                <h1>Catálogo de Livros</h1>
                <table className="table table-striped">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Resumo</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Autores</th>
                    </tr>
                    </thead>
                    <tbody>
                    {livros.map((livro) => (<LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro}/>))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default LivroLista;