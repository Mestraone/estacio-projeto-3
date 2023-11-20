import Link from "next/link";

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className='nav-item nav-link active' href='/'>Home</Link>
                    <Link className='nav-item nav-link ' href='/LivroLista'>Catálogo</Link>
                    <Link className='nav-item nav-link ' href='/LivroDados'>Novo</Link>
                </div>
            </div>
        </nav>
    )
}