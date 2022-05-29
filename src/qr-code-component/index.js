import './assets/style.css'
import QRCodePNG from './assets/images/image-qr-code.png'

const QRCodeComponent = () => {
  return (
    <div className="h-screen bg-[#d6e2f0] flex justify-center items-center">
      <div className="card max-w-xs p-4 bg-white rounded-2xl shadow-md">
         <img className='rounded-xl' src={QRCodePNG} alt="qr-code" />
         <div className="font-['Outfit'] text-center p-4">
         <h3 className="font-bold text-xl text-slate-900">Improve your front-end skills by building projects</h3>
         <p className="font-normal text-sm text-slate-600 p-3">Scan the QR code tovisit Frontend Mentor and take your coding skills to the next level</p>
         </div>
      </div>
    </div>
  );
};

export default QRCodeComponent;
