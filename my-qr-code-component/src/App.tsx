import ImageQRCode from './assets/image-qr-code.svg'
import './App.css'

function App() {
  return (
    <main className='bg-slate-200 h-screen flex flex-col justify-center'>
      <div className='flex justify-center'>
        <div className="font-outfit bg-white flex flex-col items-center rounded-xl p-2 drop-shadow-xl">
          <img src={ImageQRCode} width={290} height={37} className="logo rounded-xl" alt="QR Code image" />
          <h1 className="font-bold flex flex-col items-center m-4 text-2xl">
            <span>Improve your front-end</span>
            <span>skills by building projects</span>
          </h1>
          <p className="font-normal text-sm text-slate-400 flex flex-col items-center mb-6">
            <span>Scan the QR code to visit Frontend</span>
            <span>Mentor and take your coding skills to</span>
            <span>the next level</span>
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
