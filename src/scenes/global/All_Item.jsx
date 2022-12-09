import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import  HomeOutlinedIcon  from "@mui/icons-material/HomeOutlined";
import  PeopleOutlinedIcon  from "@mui/icons-material/PeopleOutlined";
import  ContactsOutlinedIcon  from "@mui/icons-material/ContactsOutlined";
import  ReceiptOutlinedIcon  from "@mui/icons-material/ReceiptOutlined";
import  CalendarTodayOutlinedIcon  from "@mui/icons-material/CalendarTodayOutlined";
import  HelpOutlinedIcon  from "@mui/icons-material/HelpOutlined";
import  PieChartOutlineOutlinedIcon  from "@mui/icons-material/PieChartOutlineOutlined";
import  TimelineOutlinedIcon  from "@mui/icons-material/TimelineOutlined";
import  MapOutlinedIcon  from "@mui/icons-material/MapOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import  BarChartOutlinedIcon  from "@mui/icons-material/MapOutlined";


const Item =({ title, to, icon, selected, setSelected}) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <MenuItem 
            active ={selected === title} 
            style={{ color: colors.grey[100]}} 
            onClick={() => setSelected(title)} 
            icon={icon}>

            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}



const All_Item=()=>{
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

            <Item
                title = "Invoices Balances"
                to ="/invoices"
                icon={<ReceiptOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title = "Profile Form"
                to ="/form"
                icon={<PersonOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title = "Calendar"
                to ="/calendar"
                icon={<CalendarTodayOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title = "FAQ"
                to ="/faq"
                icon={<HelpOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title = "Bar Chart"
                to ="/bar"
                icon={<BarChartOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title = "Pie Chart"
                to ="/pie"
                icon={<PieChartOutlineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title = "Line Chart"
                to ="/line"
                icon={<TimelineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title = "Geography Chart"
                to ="/geography"
                icon={<MapOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />

        </>
    );
};

export default All_Item;