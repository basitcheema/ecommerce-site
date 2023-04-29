import { Button } from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";
import GridCards from "../components/GridCards";
import { useState } from "react";


function HomePage(){

    const [prodList, setProdList]  = useState(null);

    async function GetProducts(){
        const res = await fetch("http://localhost:5001/products");
        const jsonData = await res.json();
        setProdList(jsonData);

    }
    
    GetProducts();

    return(
        <>

        {prodList === null ? <p>Product List Loading</p>:<GridCards data={prodList}/> }

        </>
    )
}

export default HomePage;