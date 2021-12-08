import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

import RMDBLogo from '../../images/react-movie-logo.svg';

import { Content, LogoImg, Wrapper } from './Header.styles'

const Header = () => {
    const [user] = useContext(Context);
    console.log(user);

    return (

        <Wrapper>
            <Content>
                <div className="wrapper_nav">
                    <Link to="/">
                        <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                    </Link>
                    <Link className="hide_mobile" to="/">
                        <span>Movies</span>
                    </Link>
                    <Link className="hide_mobile" to="/">
                        <span>TV Shows</span>
                    </Link>
                    <Link className="hide_mobile" to="/">
                        <span>People</span>
                    </Link>
                    <Link className="hide_mobile" to="/">
                        <span>More</span>
                    </Link>
                </div>
                {
                    user ? (
                        <span>{user.username}</span>
                    ) : (
                        <Link to="/login">
                            <span >Login</span>
                        </Link>
                    )
                }
            </Content>
        </Wrapper>

    );
}
export default Header;
