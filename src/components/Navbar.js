import React, { useState } from "react";
import logo from "../assets/images/logo_large_25years.png";
import useWindowWidth from "../hooks/useWindowWidth";

/* ----------- React Icons ------------ */
import {
  AiOutlineClockCircle,
  AiOutlineSearch,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { BsGift } from "react-icons/bs";
import { GiHamburgerMenu, GiReceiveMoney } from "react-icons/gi";
import { GrClose, GrHomeRounded } from "react-icons/gr";
import {
  HiDownload,
  HiOutlineLocationMarker,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { IoShirtOutline } from "react-icons/io5";
import {
  MdKeyboardArrowDown,
  MdOutlineHeadsetMic,
  MdOutlineLocalOffer,
  MdOutlineStorefront,
} from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

const Navbar = () => {
  const width = useWindowWidth();
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handleBurgerMenu = () => {
    setBurgerMenu((prevState) => !prevState);
  };
  return (
    <nav
      className={`nav-navbar ${
        burgerMenu && width <= 1200 ? "burger-menu-on" : ""
      }`}
    >
      {width > 1200 ? (
        <div className="main-container">
          <div className="navbar-search-container">
            <img
              className="header-logo"
              src={logo}
              alt="Logo de Mercado Libre: apreton de manos con texto mercado libre"
            />

            <div className="search-input-container">
              <input
                type="text"
                className="search-input"
                placeholder="Buscar productos, marcas y m&aacute;s..."
              />
              <AiOutlineSearch className="search-icon" />
            </div>

            <div className="free-shipping">
              <BsGift size="25px" />
              <h3>Env&iacute;os gratis en 24 hs a partir de $4.000</h3>
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
                  Categor&iacute;as
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
              <button>Cre&aacute; tu cuenta</button>
              <button>Ingres&aacute;</button>
              <button>Mis compras</button>
              <HiOutlineShoppingCart className="cart-icon" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="navbar-mobile-main-container">
            <img
              className="header-logo"
              src={logo}
              alt="Logo de Mercado Libre: apreton de manos"
            />

            <div className="search-input-container-mobile">
              <AiOutlineSearch className="search-icon-mobile" />
              <input
                type="text"
                className="search-input-mobile"
                placeholder="Estoy buscando..."
              />
            </div>

            {burgerMenu ? (
              <GrClose className="mobile-top-icon" onClick={handleBurgerMenu} />
            ) : (
              <GiHamburgerMenu
                className="mobile-top-icon"
                onClick={handleBurgerMenu}
              />
            )}

            <HiOutlineShoppingCart className="mobile-top-icon" />
          </div>

          <div className="navbar-mobile-shipping">
            <div className="shipping-address-mobile">
              <div className="address-mobile">
                <HiOutlineLocationMarker />
                <p className="address">Enviar a Buenos Aires 1337</p>
              </div>
            </div>
          </div>

          {burgerMenu && (
            <div>
              <div className="welcome-container">
                <BiUser className="user-icon-mobile" />

                <div className="welcome-main">
                  <h3>Bienvenido</h3>
                  <h4>
                    Ingresa a tu cuenta para ver tus compras, favoritos, etc.
                  </h4>

                  <div className="welcome-buttons-container">
                    <button className="btn-blue">Ingres&aacute;</button>
                    <button className="btn-outline-blue">
                      Cre&aacute; tu cuenta
                    </button>
                  </div>
                </div>
              </div>

              <div className="burger-list">
                <ul>
                  <li>
                    <GrHomeRounded size={22} />
                    Inicio
                  </li>
                  <li>
                    <MdOutlineLocalOffer size={22} />
                    Ofertas
                  </li>
                  <li>
                    <AiOutlineClockCircle size={22} />
                    Historial
                  </li>
                  <li>
                    <MdOutlineHeadsetMic size={22} />
                    Ayuda
                  </li>
                </ul>

                <ul>
                  <li>
                    <BiShoppingBag size={22} />
                    Supermercado
                  </li>
                  <li>
                    <IoShirtOutline size={22} />
                    Moda
                  </li>
                  <li>
                    <MdOutlineStorefront size={22} />
                    Tiendas oficiales
                  </li>
                  <li>
                    <AiOutlineUnorderedList size={22} />
                    Categor&iacute;as
                  </li>
                </ul>

                <ul>
                  <li>
                    <TiDocumentText size={22} />
                    Resumen
                  </li>
                  <li>
                    <GiReceiveMoney size={22} />
                    Vender
                  </li>
                </ul>

                <ul>
                  <li>
                    <HiDownload size={22} />
                    ¡Compr&aacute; y vend&eacute; con la app!
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
