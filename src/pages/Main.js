import Contact from "../components/Contact"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Whowehelp from "../components/Whowehelp"

const Main=(props)=>{
    return(
        <>
        <Header provideNavToggler={props.provideNavToggler}/>
        <Intro/>
        <Whowehelp/>
        <Contact/>
        </>
    )
}
export default Main