import { Outlet } from 'react-router'
import Header from '../components/AppHeader'
import Footer from '../components/AppFooter'

const Layout = () => {
  return (
    <div className='divContainer' style={{display: 'flex', flexDirection: 'column'}}>
      <Header/>
        <div>
            <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}
export default Layout