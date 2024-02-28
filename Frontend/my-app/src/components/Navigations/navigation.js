import React from "react"
import styled from "styled-components"
import avatar from '../../img/avatar.png'
import { menuItems } from "../../Utils/menuitems"
import { signout } from "../../Utils/Icons"

function Navigation({active, setActive}) {
    
    return(
        <NavStyled>
            <div className="user-con">
                <img className="img-ak" src= {avatar} alt=""/>
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>

            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className = {active === item.id ? 'active': ''}
                
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
        height: 50%;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            height: 50%;
            width: 25%;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0,0,0,0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
        }

        .menu-items{
            flex: 1;
            display: flex;
            flex-direction: column;
            li{
                display: grid;
                grid-template-column: 40px auto;
                margin: .6rem 0;
                font-weight: 500;
                cursor: pointer;
                transition: all .4s ease-in-out;
                color: rgba(34, 34, 96, .6);
                padding: relative;
                i{
                    color: rgba(34, 34, 96, .6);
                    font-size: 1.4rem;
                    transition: all .4s ease-in-out;

                }
            }

        }

        .active{
            color: rgba(34,34,96,1) !important;
            i{
                color: rgba(34,34,96,1) !important;
            }
            &::before{
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 5px;
                height: 100%;
                background: #222260;
                border-radius: 0 10px 10px 0;


            }
        }
    

`;

export default Navigation