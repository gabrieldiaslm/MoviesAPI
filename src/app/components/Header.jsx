'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react"


function Header() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  }

    return (
        <div>
          
            <nav className="navbar bg-success border-bottom border-body" data-bs-theme="white">
              <div className="container-fluid">
                <Link className="navbar-brand text-white" href="/">Filmes B4</Link>
                <Link href="/" className="btn btn-success">Filmes</Link>
                <Link href="/tvshow" className="btn btn-success">Séries</Link>
                <Link href="/about" className="btn btn-success">Sobre Nós</Link>
                <form className="d-flex" onSubmit={e => handleSubmit(e)} role="search">
                  <input onChange={e => setSearchText(e.target.value)} className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"/>
                  <button className="btn btn-outline-light" type="submit">
                    <span className="spinner-border d-none"></span>
                    Buscar</button>
                </form>
              </div>
            </nav>
        </div>
    )
}

export default Header