import ControleEditora from "@/classes/controle/ControleEditora";
import {NextApiRequest, NextApiResponse} from "next";

export const controleEditora = new ControleEditora();
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        switch (req.method) {
            default:
                res.status(405).json([{erro: 'Método não permitido!'}])
                break;

            case 'GET':
                res.status(200).json(controleEditora.getEditoras())
                break;

            case 'POST':
                controleEditora.incluir(req.body)
                res.status(200).json(controleEditora.getEditoras())
                break;
        }
    } catch (e) {
        res.status(500).json([{erro: 'Erro interno do servidor: '}]);
    }

}