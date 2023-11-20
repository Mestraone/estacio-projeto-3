import ControleLivros from "@/classes/controle/ControleLivros";
import {NextApiRequest, NextApiResponse} from "next";

export const controleLivros = new ControleLivros()

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        switch (req.method) {
            default:
                res.status(405).json([{erro: 'Método não permitido!'}])
                break;

            case 'GET':
                res.status(200).json(controleLivros.obterLivros())
                break;

            case'POST':
                controleLivros.incluir(req.body)
                res.status(200).json({sucesso: `O Livro ${req.query.titulo} foi Cadastrado.`})
                break;
        }
    } catch (e) {
        res.status(500).json([{erro: 'Erro interno do servidor: '}]);
    }
}