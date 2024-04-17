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
                    <h3>Akshat</h3>
                    <p>My Money</p>
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
    padding: 1rem 1rem;
    width: 15vw;
    height: 100%;
    background: rgba(250, 250, 250, 0.80);
    border: 3px solid #FFFFFF;
    background-filter: blur(4.5px);
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
    .user-con{
        height: 10%;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0,0,0,0.06);
        }
        h3{
            color: rgba(34, 34, 96, 1);
            font-size:1.5rem;
        }
        p{
            color: rgba(34, 34, 96, .6);
            font-size:0.65rem;
        }
        }

        .menu-items{
            flex: 1;
            display: flex;
            flex-direction: column;
            li{
                display: grid;
                font-size: 0.75rem;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 0.5rem;
            position: relative;
                i{
                    color: rgba(34, 34, 96, .6);
                    font-size: 0.75rem;
                    transition: all .4s ease-in-out;

                }
            }

        }
        .bottom-nav{
            font-size: 0.75rem;
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
                width: 4px;
                height: 100%;
                background: #222260;
                border-radius: 0 10px 10px 0;


            }
        }
    

`;

export default Navigation