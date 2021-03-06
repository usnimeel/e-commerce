import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"

import { ReactComponent as Logo } from "../../assets/crown.svg"
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <div className="logo-container">
                    <Link className="nav-link" to='/'>
                        <Logo className="logo"></Logo>
                    </Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to='shop'>SHOP</Link>
                    <Link className="nav-link" to='sign-in'>SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation