import Footer from '../footer/Footer'
import Header from '../header/Header'

const Main_layout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default Main_layout