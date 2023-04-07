import Inquire from "../components/Inquire"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Whowehelp from "../components/Whowehelp"
import Footer from "../components/Footer"
import ClientsExperiences from "../components/Clients_experiences"
import Clients from "../components/Clients"

const Main=(props)=>{
    return(
        <div className="span-y">
        <Header provideNavToggler={props.provideNavToggler}/>
        <Intro/>
        <Whowehelp/>
        <ClientsExperiences/>
        <Clients/>
        <Inquire/>
        <Footer/>
        </div>
    )
}
export default Main