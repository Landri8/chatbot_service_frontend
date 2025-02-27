import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: '',
        duration: 3000,
        style: {
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '100px',
          fontSize: '12px',
          padding: '5px 20px',
        }
      }}
    />
    <App />
  </BrowserRouter>
)
