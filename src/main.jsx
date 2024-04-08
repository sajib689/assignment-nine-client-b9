
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'
import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' bg-base-200'>
   <AuthProvider>
   <RouterProvider router={router}/>
   <Toaster/>
   </AuthProvider>
  </div>,
)
