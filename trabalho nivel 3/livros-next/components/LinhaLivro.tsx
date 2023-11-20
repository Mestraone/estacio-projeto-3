import ControleEditora from "@/classes/controle/ControleEditora";
import Livros from "@/classes/modelo/Livros";
import React from "react";

interface LinhaLivroProps {
    livro:Livros
    excluir(codigo: number):void

}

const controleEditora = new ControleEditora()


export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    return (<tr>
        <td>
            <div className='mb-2'>{props.livro.titulo}</div>
            <button className="btn btn-danger" onClick={() => {
                props.excluir(props.livro.codigo);
            }}>Excluir
            </button>
        </td>
        <td>{props.livro.resumo}</td>
        <td>{controleEditora.getNomeEditora(props.livro.codEditora)}</td>
        <td>
            <ul className='pl-5'>
                {props.livro.autores.map((autor, index) => (<li key={index}>{autor}</li>))}
            </ul>
        </td>
    </tr>);

}