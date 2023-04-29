import ResponsiveAppBar from "../components/AppBar";
import GridCards from "../components/GridCards";


function HomePage(){

    async function getProducts(){
        const res = await fetch("http://localhost:5001/products");
        const jsonData = await res.json();
        console.log(jsonData);
    }
    
    getProducts();
    return(
        <>
        <GridCards />
        <GridCards />
        </>
    )
}

export default HomePage;