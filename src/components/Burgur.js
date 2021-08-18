import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavLink from './Navlinks';
import { useLocation } from 'react-router-dom';


const Burger = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (open)
      setOpen(!open);
  }, [location.pathname])
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)} onMouseUp={() => console.log("click")}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavLink open={open} />
    </>
  )
}


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#333' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


export default Burger;