import PinDropIcon from '@mui/icons-material/PinDrop';
const Footer=()=>{
    return(
        <footer className="text-black bg-gray-100 dark:bg-black dark:text-white flex flex-col md:flex-row gap-5 items-center justify-between py-[100px] px-[13%]">
            <>
                <div>Logo</div>
            </>
            <div>
                <h4 className="text-lg font-bold">Ethiopia</h4>
                <address>
                    <PinDropIcon style={{color: 'red'}}/>
                    Lorem, ipsum dolor. Street</address>
                <a href="tel:+">13431243143214</a>
            </div>
            <div>
                <h4 className="text-lg font-bold flex items-center">Kenya</h4>
                <address>
                    <PinDropIcon style={{color: 'red'}}/> 
                    Lorem, ipsum dolor. Street</address>
                <a href="tel:+">3143143143143</a>
            </div>
            <div>
                <h4 className="text-lg font-bold">Somalia</h4>
                <address>
                    <PinDropIcon style={{color: 'red'}}/>
                        Lorem, ipsum dolor. Street</address>
                <a href="tel:+">13413241343124</a>
            </div>
        </footer>
    )
}
export default Footer