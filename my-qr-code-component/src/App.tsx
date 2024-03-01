import ImageQRCode from './assets/image-qr-code.svg'
import './App.css'

function App() {
  return (
    // <></>
    <>
    <main className='bg-sky-100 h-screen flex flex-col justify-center'>
      <div className='flex justify-center'>
        <div className="font-outfit bg-white flex flex-col items-center rounded-xl p-2">
        <img src={ImageQRCode} width={200} height={37} className="logo" alt="QR Code image" />
          <h1 className="font-bold flex flex-col items-center m-2">
            <span>Improve your front-end</span>
            <span>skills by building projects</span>
          </h1>
          <p className="font-normal text-xs text-slate-400 flex flex-col items-center mb-6">
            <span>Scan the QR code to visit Frontend</span>
            <span>Mentor and take your coding skills to</span>
            <span>the next level</span>
          </p>
        </div>
      </div>
    </main>
    </>
    //   <a href="https://vitejs.dev" target="_blank">
    //   <img src={viteLogo} className="logo" alt="Vite logo" />
    // </a>
  )
}

export default App
