import {useState} from "react";
import {NavLink} from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className={({isActive}) => isActive ? "active nav-link fw-bold" : "nav-link fw-bold"}
                                to="/">Catálogo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({isActive}) => isActive ? "active nav-link fw-bold" : "nav-link fw-bold"}
                                to="/novo">Novo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({isActive}) => isActive ? "active nav-link fw-bold" : "nav-link fw-bold"}
                                to="/cadastroeditora">Cadastra Editora</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}