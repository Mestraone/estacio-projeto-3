import Livros from "../modelo/Livros";

let livros: Livros[] = [
    (new  Livros(1,1,"TypeScript",'Gerando o JavaScript do Futuro',['Marcelo Soares da Costa','andre luiz'])),
    (new  Livros(2,2,"O Senhor dos Anéis","Uma jornada épica através da Terra-média",["J.R.R. Tolkien"])),
    (new Livros(4, 3, "1984", "Uma distopia sombria sobre um futuro opressivo", ["George Orwell"])),
]

class ControleLivro {

    obterLivros(){
        return livros;
    }

    incluir(livro: Livros):void {
        const codigoNovo = livros.length > 0 ?
            Math.max(...livros.map(l => l.codigo)) + 1 :
            1;
        livro.codigo = codigoNovo;
        livros.push(livro);
    }
    excluir(codigo: number) {
        livros = livros.filter((livro) => livro.codigo !== codigo);
        return livros;
    }


}

export default ControleLivro;
