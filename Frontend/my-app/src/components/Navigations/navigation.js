import React from "react"
import styled from "styled-components"
import avatar from '../../img/avatar.png'
import { menuItems } from "../../Utils/menuitems"
import { signout } from "../../Utils/Icons"

function Navigation() {
    return(
        <NavStyled>
            <div className="use-con">
                <img src= {avatar} alt=""/>
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>

            </div>
            <ul classname="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>

                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>

        </NavStyled>
        
    )


    
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(250, 250, 250, 0.80);
    border: 3px solid #FFFFFF;
    background-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            height: 50px;
            width: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
    }

`;

export default Navigation