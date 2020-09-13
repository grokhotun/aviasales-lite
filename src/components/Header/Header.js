import React from 'react'

import logoSvg from '@/assets/logo.svg'

import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logoSvg} alt="Лого приложения" />
            </div>
        </header>
    )
}

export default Header;
