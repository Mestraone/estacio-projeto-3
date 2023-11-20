import {controleLivros} from ".";
import {NextApiResponse, NextApiRequest} from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const codigoLivro = parseInt(<string>req.query.codigo)
    controleLivros.excluir(codigoLivro)

    try{
        switch (req.method){
            default:
                res.status(405).json([{erro: 'Método não permitido!'}])
                break;

            case 'GET':
                const codigoLivro = parseInt(<string>req.query.codigo)
                const retorno = controleLivros.excluir(codigoLivro)
                res.status(200).json(retorno)
                break;
        }
    } catch (e) {
        res.status(500).json([{erro: 'Erro interno do servidor: '}]);
    }
}