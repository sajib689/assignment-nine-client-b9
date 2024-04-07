
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' bg-base-200'>
    <RouterProvider router={router}/>
  </div>,
)
