import { Outlet } from 'react-router'
import Header from '../components/AppHeader'
import Footer from '../components/AppFooter'

const Layout = () => {
  return (
    <div className='divContainer' style={{display: 'flex', flexDirection: 'column', marginTop: '12vh', minHeight: '80vh', backgroundImage: "url(https://editorialtelevisa.brightspotcdn.com/dims4/default/16ac18c/2147483647/strip/false/crop/1500x857+0+0/resize/1486x849!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fc2%2F3e%2F22fe65ae49adbffd7cc78671679d%2Fapartamento-moderno-lujo-comoda-decoracion-almohadas-generada-ia.jpg)", backgroundRepeat: 'round', backgroundSize: 'cover'}}>
      <Header/>
        <div>
            <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}
export default Layout