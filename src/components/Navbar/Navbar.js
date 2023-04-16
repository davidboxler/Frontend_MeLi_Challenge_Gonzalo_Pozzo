import React from "react";
import logo from "../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsGift } from "react-icons/bs";
import { HiOutlineLocationMarker, HiOutlineShoppingCart } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav className="nav-navbar">
			<div className="main-container">
				<div className="navbar-search-container">
					<img
						className="header-logo"
						src={logo}
						alt="Logo de Mercado Libre"
					/>

					<div className="search-input-container">
						<input type="text" className="search-input" placeholder="Buscar productos, marcas y m&aacute;s..." />
						<AiOutlineSearch className="search-icon" />
					</div>

					<div className="free-shipping">
						<BsGift size="25px" />
						<h3>Envios gratis a partir de $4.500</h3>
					</div>
				</div>

				<div className="navbar-main-container">
					<div className="navbar-shipping-and-buttons">
						<div className="shipping-address">
							<HiOutlineLocationMarker className="address-icon" />
							<div>
								<p className="send-to">Enviar a</p>
								<p className="address">Buenos Aires 1337</p>
							</div>
						</div>

						<div className="navbar-buttons">
							<button>
								Categorias
								<MdKeyboardArrowDown className="arrow-categoriesBtn" />
							</button>
							<button>Ofertas</button>
							<button>Historial</button>
							<button>Supermercado</button>
							<button>Moda</button>
							<button>Vender</button>
							<button>Ayuda</button>

						</div>
					</div>

					<div className="navbar-buttons-account">
						<button>Crea tu cuenta</button>
						<button>Ingresa</button>
						<button>Mis compras</button>
						<HiOutlineShoppingCart className="cart-icon" />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;