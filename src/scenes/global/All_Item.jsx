import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { colors, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import  HomeOutlinedIcon  from "@mui/icons-material/HomeOutlined";
import  PeopleOutlinedIcon  from "@mui/icons-material/PeopleOutlined";
import  ContactsOutlinedIcon  from "@mui/icons-material/ContactsOutlined";
import  HelpOutlinedIcon  from "@mui/icons-material/HelpOutlined";
import  GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import  PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const Item =({ title, to, icon, selected, setSelected}) =>{
    const theme = useTheme();
    const colors_theme = tokens(theme.palette.mode);
    return(
        <MenuItem 
            active ={selected === title} 
            style={{ color: colors_theme.grey[100]}} 
            onClick={() => setSelected(title)} 
            icon={icon}>

            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}



const All_Item=()=>{
    const theme = useTheme();
    const colors_theme = tokens(theme.palette.mode);
    const [selected, setSelected] = useState("Dashboard");
    return(
        <>
            <Item
                title = "Dashboard"
                to ="/"
                icon={<HomeOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors_theme.orangeAccent[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Dados
            </Typography>

            <Item
                title = "Aposentadoria"
                to ="/aposentadoria"
                icon={<PeopleOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title = "Alocação"
                to ="/alocacao"
                icon={<ContactsOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors_theme.orangeAccent[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Ajustes
            </Typography>

            <Item
                title = "Adicionar Pessoa"
                to ="/form"
                icon={<PersonAddAlt1Icon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title = "Remover Pessoa"
                to ="/removeprs"
                icon={<GroupRemoveIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title = "Editar Pessoa"
                to ="/editperson"
                icon={<ManageAccountsIcon/>}
                selected={selected}
                setSelected={setSelected}
            />


            <Typography
              variant="h6"
              color={colors_theme.orangeAccent[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Infos
            </Typography>

            <Item
                title = "FAQ"
                to ="/faq"
                icon={<HelpOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />
        </>
    );
};

export default All_Item;