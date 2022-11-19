import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar= () => {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/"/> */}
                <img src="https://solana.com/src/img/branding/solanaLogo.png"/>
                Organ Donation BlockChain
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/location">Location</NavLink>
                </li>
                </ul>

                <WalletMultiButton />

            </div>
</nav>
        </div>
    )
}

export default Navbar;