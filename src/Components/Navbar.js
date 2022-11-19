import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import './Navbar.css';

const Navbar= () => {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/"/> */}
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsolana.com%2Fbranding&psig=AOvVaw1DImEe2VhGRVvVw87KQLXN&ust=1668935879104000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCj5uP0ufsCFQAAAAAdAAAAABAT" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                Organ Donation BlockChain
                <WalletMultiButton />
            </div>
</nav>
        </div>
    )
}

export default Navbar;