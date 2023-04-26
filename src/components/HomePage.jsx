import ResponsiveAppBar from "./AppBar";
import GridCards from "./GridCards";


function HomePage(){
    return(
        <div>
            <nav>
                <ResponsiveAppBar />
            </nav>
        <GridCards />
        
        </div>
    )
}

export default HomePage;