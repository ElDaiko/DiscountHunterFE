import Navigation from "./navbar"
import Footer from "./footer"
import "bootswatch/dist/lux/bootstrap.min.css"

export default function Layout({ children }) {  //Envuelve todo y dentro del layout se renderizan otros componentes
    return(
    <div className="body">
        <Navigation/>
        <main className="main">{children}</main>  
        <Footer/>
    </div>
    )
    
}