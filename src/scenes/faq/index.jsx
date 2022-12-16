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
                        Filtragem na Aposentadoria
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>

                    <Typography>
                        Para você filtrar os militares na aba de aposentadoria, 2 paramêtros são obrigatórios: Quantidade e Paginas.
                        Sendo o limite minimo de Quantidades igual a 10. 
                     </Typography>

                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandedMoreIcon/>}>

                    <Typography color ={colors.greenAccent[500]} variant="h5">
                        Como posso baixar um relatório de projeto?
                    </Typography>
                    
                </AccordionSummary>

                <AccordionDetails>

                    <Typography>
                        Infelizmente não adicionamos essa funcionalidade ao projeto. Porém assim que possivel estaremos atualizando para que possamos fornecer a você essa informação 
                     </Typography>

                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandedMoreIcon/>}>

                    <Typography color ={colors.greenAccent[500]} variant="h5">
                        Como posso adicionar novos membros?
                    </Typography>
                    
                </AccordionSummary>

                <AccordionDetails>

                    <Typography>
                        Ainda não foi implementado a rota direta para que você possa fazer isso. 
                        Mas a ideia seria: Ao ir na aba de  Adicionar Pessoa você precisa passar apenas os dados obrigatórios para seu cadastro e logo em seguida apertar no botão CREATE USER 
                     </Typography>

                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandedMoreIcon/>}>

                    <Typography color ={colors.greenAccent[500]} variant="h5">
                        Como posso Editar um membro?
                    </Typography>
                    
                </AccordionSummary>

                <AccordionDetails>

                    <Typography>
                        Ainda não foi implementado a rota direta para que você possa fazer isso. 
                        Mas a ideia seria: Ao ir na aba de Editar Pessoa, através da listagem de militares, você poderia clicar no icone de editar representado por um lápis, o qual irá direcionar você para uma aba onde estaram as informações do usuário, possibilitando você editar elas, desde que mantenha os dados obrigatórios
                     </Typography>

                </AccordionDetails>
            </Accordion>

        </Box>
    );

};

export default FAQ;