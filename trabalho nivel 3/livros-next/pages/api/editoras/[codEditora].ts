import {controleEditora} from ".";
import {NextApiRequest, NextApiResponse} from "next";
import {controleLivros} from "@/pages/api/livros";


export default (req: NextApiRequest, res: NextApiResponse) => {

    try{
        switch (req.method){
            default:
                res.status(405).json([{erro: 'Método não permitido!'}])
                break;

            case 'GET':
                const nomeEditora = controleEditora.getNomeEditora(parseInt(<string>req.query.codEditora))
                res.status(200).json({nome: nomeEditora})
                break;

            case'POST':
                controleLivros.incluir(req.body)
                res.status(200).json({sucesso: 'Livro Cadastrado com Sucesso!'})
                break;
        }
    } catch (e) {
        res.status(500).json([{erro: 'Erro interno do servidor: '}]);
    }


}