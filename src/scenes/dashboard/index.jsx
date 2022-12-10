import { Box , Button, IconButton, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import {mockTransactions} from "../../data/mockData";
import  DownloadOutlinedIcon  from "@mui/icons-material/DownloadOutlined";
import  EmailIcon  from "@mui/icons-material/Email";
import  PointOfSaleIcon  from "@mui/icons-material/PointOfSale";
import  PersonAddIcon  from "@mui/icons-material/PersonAdd";
import  TrafficIcon  from "@mui/icons-material/Traffic";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ElderlyIcon from '@mui/icons-material/Elderly';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import WcIcon from '@mui/icons-material/Wc';
import BarChart from "../../components/BarChart"
import PieChart from "../../components/PieChart"
import StatBox from "../../components/StatBox"
import ProgressCircle from "../../components/ProgressCircle"
import { useState, useEffect } from "react";
import { API_URL } from "../../configs";
import axios from "axios";

const Dashboard = () =>{
    const theme = useTheme();
    const [resumoData, setResumoData] = useState({});
    const colors = tokens(theme.palette.mode);

    // useEffect para quando a pagina iniciar
    useEffect( () => {
        // make an get with axios
        axios.get(API_URL + "/info/resumo").then((response) => {
            console.log(response.data);
            setResumoData(response.data);
        });
    }, []);


    return (
        <Box m="20px">
            <Box 
                display = "flex"
                justifyContent="space-between"
                alignItems="center">

                <Header title= "DASHBOARD" subtitle= "Welcome to your dashboard"/>

            

                <Box>
                    <Button 
                        sx={{backgroundColor : colors.greenAccent[800], 
                        color: colors.grey[100], 
                        fontSize: "14px", 
                        fontWeight: "bold", 
                        padding:"10px 20px",
                        }}>

                            <DownloadOutlinedIcon sx = {{mr: "10px"}}/>
                            Download Reports

                    </Button>
                </Box>
            </Box>

            {/* GRID AND CHARTS */}

            <Box
                display="grid"
                gridTemplateColumns = "repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px">

                    {/* ROW 1 */}
                        <Box 
                            gridColumn="span 3" 
                            backgroundColor ={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center">

                                <StatBox 
                                    isDashboard={false}
                                    title= "Cadetes APMT"
                                    subtitle="12,361"
                                    progress="0.75"
                                    increase="+14%"
                                    icon={
                                        <SupervisedUserCircleIcon sx={{ color: colors.greenAccent[300], fontSize:"30px"}}/>
                                    }
                                />

                        </Box>

                        <Box 
                            gridColumn="span 3" 
                            backgroundColor ={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center">

                                <StatBox 
                                    title= "Media de Idade APMT"
                                    subtitle="431,225"
                                    progress="0.5"
                                    increase="+21%"
                                    icon={
                                        <ElderlyIcon sx={{ color: colors.greenAccent[300], fontSize:"px"}}/>
                                    }
                                />

                        </Box>

                        <Box 
                            gridColumn="span 3" 
                            backgroundColor ={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center">

                                <StatBox 
                                    title="32,441"
                                    subtitle= "Media de Anos de Serviço"
                                    progress="0.30"
                                    increase="+5%"
                                    icon={
                                        <LocalPoliceIcon sx={{ color: colors.greenAccent[300], fontSize:"26px"}}/>
                                    }
                                />

                        </Box>

                        <Box
                            gridColumn = "span 3"
                            backgroundColor ={colors.primary[400]}
                            p="20px">

                                <Box display="flex">

                                    <WcIcon sx={{ color: colors.greenAccent[300], fontSize:"26px"}}/>
                                    <Typography variant="h5" fontWeight="600" sx={{m: "5px 10px 0 5px"}}>
                                        Gênero
                                    </Typography>
                                </Box>
                                <Box 
                                    height="200px"
                                    mt="-40px">
                                        <PieChart resumoData={resumoData.resumo}/>
                                </Box>
                        </Box>
                    {/*ROW 2 */}

                    <Box
                        gridColumn ="span 8"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}>

                            <Box 
                                mt="25px"
                                p="0 30px"
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center">

                                    <Box>
                                        <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
                                            Instituição de Origem
                                        </Typography>

                                    </Box>

                                    <Box>
                                        <IconButton>
                                            <DownloadOutlinedIcon sx={{fontSize:"26px", color: colors.greenAccent[500]}}/>
                                        </IconButton>
                                    </Box>

                            </Box>

                            <Box height="250px" mt="-20px">
                                <BarChart isDashboard={true}/>
                            </Box>
                    </Box>

                    {/* TRANSACTIONS */}
                    <Box 
                        gridColumn="span 4" 
                        gridRow="span 2" 
                        backgroundColor={colors.primary[400]}
                        overflow="auto">
                            
                            <Box 
                                display="flex" 
                                justifyContent="space-between" 
                                alignItems="center" 
                                borderBottom={`4px solid ${colors.primary[500]}`} 
                                colors={colors.grey[100]} 
                                p="15px">

                                    <Typography 
                                        color={colors.grey[100]} 
                                        variant ="h5" 
                                        fontWeight="600">

                                            Recent Transactions

                                    </Typography>

                            </Box>
                            {mockTransactions.map((transation, i) => (
                                <Box
                                    key= {`${transation.txId}-${i}`}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    borderBottom={`4px solid ${colors.primary[500]}`} 
                                    p="15px">
                                        
                                        <Box>
                                            <Typography 
                                                color={colors.greenAccent[500]} 
                                                variant ="h5" 
                                                fontWeight="600">

                                                    {transation.txId}

                                            </Typography>

                                            <Typography color={colors.grey[100]}>

                                                {transation.user}

                                            </Typography>

                                        </Box>

                                        <Box color={colors.grey[100]}>{transation.date}</Box>
                                        <Box 
                                            backgroundColor={colors.greenAccent[500]} p="5px 10px" 
                                            borderRadius="4px">

                                                {transation.cost}

                                        </Box>

                                </Box>
                            ))}
                    </Box>

                    {/* ROW 3 */}
                    <Box
                        gridColumn = "span 4"
                        gridRow="span 2"
                        backgroundColor ={colors.primary[400]}>

                            <Typography variant="h4" fontWeight="bold" sx={{p:"30px 30px 0 30px"}}>
                                Postos
                            </Typography>
                            <Box
                                height="250px"
                                mt="-20px">
                                    <BarChart isDashboard={true}/>
                            </Box>
                    </Box>
                    
                    <Box
                        gridColumn = "span 4"
                        gridRow="span 2"
                        backgroundColor ={colors.primary[400]}>

                            <Typography variant="h4" fontWeight="bold" sx={{p:"30px 30px 0 30px"}}>
                                Titulação Acadêmica
                            </Typography>
                            <Box
                                height="250px"
                                mt="-20px">
                                    <BarChart isDashboard={true}/>
                            </Box>
                    </Box>

                    <Box
                        gridColumn = "span 4"
                        gridRow="span 2"
                        backgroundColor ={colors.primary[400]}
                        p="20px">

                            <Typography variant="h4" fontWeight="bold" sx={{mb:"15px"}}>
                                Fluência em Segundo Idioma
                            </Typography>
                            <Box 
                                height="250px"
                                mt="-20px">
                                    <BarChart isDashboard={true}/>
                            </Box>
                    </Box>

                    
                    {/* FINAL BOX */}
            </Box>
        </Box>
    );
};

export default Dashboard;