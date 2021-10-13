import React from 'react';
import { MdOutlineFastfood } from 'react-icons/md';
import { IoMdGlasses } from 'react-icons/io';
import { GiRunningShoe, GiNoodles, GiMedicinePills, GiNecklaceDisplay } from 'react-icons/gi';
const Menu = () => {
    return (
        <nav className="menu-list">
            <ul>
                <li className="box1 box">
                    <MdOutlineFastfood className="icon" />
                    <a href="/#">Descartables</a>
                </li>
                <li className="box2 box">
                    <IoMdGlasses className="icon" />
                    <a href="/#">Moda</a>
                </li>
                <li className="box3 box">
                    <GiRunningShoe className="icon" />
                    <a href="/#">Calzado</a>
                </li>
                <li className="box4 box">
                    <GiNoodles className="icon" />
                    <a href="/#">Alimentos</a>
                </li>
                <li className="box5 box text-center">
                    <GiMedicinePills className="icon" />
                    <a href="/#">Salud y Bienestar</a>
                </li>
                <li className="box6 box">
                    <GiNecklaceDisplay className="icon" />
                    <a href="/#">Joyerìa</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
