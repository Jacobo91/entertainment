import './Navbar.css';
import * as React from 'react';
import { NavLink } from "react-router-dom";

import MovieIcon from '@mui/icons-material/Movie';
import WindowIcon from '@mui/icons-material/Window';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TvIcon from '@mui/icons-material/Tv';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const NavBar = () => {
    console.log("%cstarting navbar render", 'color: yellow')
    const navRef = React.useRef()
    return(
        <nav  ref={navRef} className='navbar' >
            
            <MovieIcon className='navbar--logo' />
            
            <div className="center-content nav--categories">
                <NavLink
                    className={`center-content nav-button home ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} 
                    to={'/'}>
                    <WindowIcon/>
                </NavLink>

                <NavLink
                    className={'center-content nav-button movies'} 
                    to={'/movies'}>
                    <LocalMoviesIcon/>
                </NavLink>

                <NavLink 
                    className={'center-content nav-button tv-series'} 
                    to={'/series'}>
                    <TvIcon/>
                </NavLink>

                <NavLink
                    className={'center-content nav-button bookmarked'} 
                    to={'/bookmarked'}>
                    <BookmarkIcon/>
                </NavLink>
            </div>

            <button className='avatar-button' >
                
            </button>
        </nav>
    );
};