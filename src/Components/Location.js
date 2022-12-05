import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Location =()=>{
    return(
        <div>
            <section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="absolute inset-0 bg-gray-900">
    <iframe title="map" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0IIITD+(Indraprastha Institute of Information Technology,Delhi)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
    ></iframe> 
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
    <img src="https://solana.com/src/img/branding/solanaLogo.png" alt="Logo" height="24" className="d-inline-block align-text-top"/>      <p className="leading-relaxed mb-5">Payment Successful</p>
      
      <p className="text-xs text-gray-400 text-opacity-90 mt-3">For more payments</p>
      <WalletMultiButton />
    
    </div>
  </div>
</section>

        </div>
    )
}
export default Location;