import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar= () => {
    const { connection } = useConnection();
    const wallet = useWallet();
    async function click() {
        // Uncomment the below command to test your connection to your node
        //console.log(await connection.getEpochInfo())
        // Add transfer instruction to transaction
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey('CmUVEBGd6h91m8ZGPxafFe9EdCC12jZxFBt5zTaQQehK'),
                lamports: LAMPORTS_PER_SOL / 100,
            })
        );

        // Sign transaction, broadcast, and confirm
        const signature = await wallet.sendTransaction(transaction, connection);
        console.log('SIGNATURE', signature);
    }
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src="https://solana.com/src/img/branding/solanaLogo.png"/>
                </a>
                <a className="navbar-brand" href="/">
                Organ Donation BlockChain
                </a>
                <div className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/location">Location</NavLink>
                </div>

                <WalletMultiButton />
                <button className="transButton" onClick={click}>
                        Deposit Entry Fees
                    </button>
            </div>
</nav>
        </div>
    )
}

export default Navbar;