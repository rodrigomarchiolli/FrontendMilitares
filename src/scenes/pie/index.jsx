import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeneroPieChart from "../../components/GeneroPieChart";

const Pie = () =>{
    return(
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
            <Box height="71vh">
                <GeneroPieChart/>

            </Box>

        </Box>
    );

};

export default Pie;