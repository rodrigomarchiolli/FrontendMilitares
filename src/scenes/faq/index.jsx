import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandedMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens} from "../../theme";

const FAQ = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Perguntas frequentes"></Header>
            
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandedMoreIcon/>}>

                    <Typography color ={colors.greenAccent[500]} variant="h5">
                        Pergunta Importante
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>

                    <Typography>
                        Para que serve um FAQ?  
                     </Typography>

                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandedMoreIcon/>}>

                    <Typography color ={colors.greenAccent[500]} variant="h5">
                        Outra Pergunta Importante
                    </Typography>
                    
                </AccordionSummary>

                <AccordionDetails>

                    <Typography>
                        Eu deveria fazer um FAQ?  
                     </Typography>

                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandedMoreIcon/>}>

                    <Typography color ={colors.greenAccent[500]} variant="h5">
                        Pergunta Aleatoria
                    </Typography>
                    
                </AccordionSummary>

                <AccordionDetails>

                    <Typography>
                        É possivel respirar enquanto engole a saliva?  
                     </Typography>

                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandedMoreIcon/>}>

                    <Typography color ={colors.greenAccent[500]} variant="h5">
                        Why are you still here?
                    </Typography>
                    
                </AccordionSummary>

                <AccordionDetails>

                    <Typography>
                        Just to Suffer?  
                     </Typography>

                </AccordionDetails>
            </Accordion>

        </Box>
    );

};

export default FAQ;