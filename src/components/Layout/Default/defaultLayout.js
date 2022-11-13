import './deafault.css'
import Nav from './nav/nav.js'
import Footer from './footer/footer.js'
// // import './fonts'
// import '../../../../public/css/fonts.css'

const Default = ({children}) => {
    return (  
        <>
        {/* <div className="App">
        <header>
        {children}
        </header>

        </div> */}
        <Nav />
        {children}
        <Footer/>

        </>
    );
}
 
export default Default;