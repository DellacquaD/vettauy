import { Outlet } from 'react-router'
import Header from '../components/AppHeader'
import Footer from '../components/AppFooter'

const Layout = () => {
  return (
    <div className='divContainer' style={{display: 'flex', flexDirection: 'column', marginTop: '12vh', minHeight: '80vh', backgroundImage: "url(https://images.unsplash.com/photo-1485965089147-0f655dcf01b0?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundRepeat: 'round', backgroundSize: 'cover'}}>
      <Header/>
        <div>
            <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}
export default Layout