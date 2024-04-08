
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'
import AuthProvider from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' bg-base-200'>
   <AuthProvider>
   <RouterProvider router={router}/>
   </AuthProvider>
  </div>,
)
