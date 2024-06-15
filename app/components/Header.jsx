import Link from "next/link"


function Header() {
    return (
        <div>
          
            <nav className="navbar bg-success border-bottom border-body" data-bs-theme="white">
              <div className="container-fluid">
                <Link className="navbar-brand text-white" href="/">Filmes B4</Link>
                <Link href="/" className="btn btn-success">Filmes</Link>
                <Link href="/tvshow" className="btn btn-success">Séries</Link>
                <Link href="/about" className="btn btn-success">Sobre Nós</Link>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">Buscar</button>
                </form>
              </div>
            </nav>
        </div>
    )
}

export default Header