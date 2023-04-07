import Inquire from "../components/Inquire"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Whowehelp from "../components/Whowehelp"
import Footer from "../components/Footer"
import ClientsFeedback from "../components/Clients_feedback" 
import Clients from "../components/Clients"

const Main=(props)=>{
    return(
        <div className="">
        <Header provideNavToggler={props.provideNavToggler}/>
        <Intro/>
        <Whowehelp/>
        <ClientsFeedback/>
        <Clients/>
        <Inquire/>
        <Footer/>
        </div>
    )
}
export default Main