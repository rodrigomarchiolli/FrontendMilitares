import { Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import { ipcRenderer } from 'electron';

import  LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";
import  NotificationsOutlinedIcon  from "@mui/icons-material/NotificationsOutlined";
import  SettingsOutlinedIcon  from "@mui/icons-material/SettingsOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import  SearchIcon  from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
//import { borderRadius } from "@mui/system";

function closeApp() {
    ipcRenderer.send('close-app');
  }

function minimizeApp() {
ipcRenderer.send('minimize-app');
}

function expandApp() {
    ipcRenderer.send('expand-app');
  }


const Topbar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */ }
            <Box 
                display= "flex" 
                backgroundColor={colors.primary[400]} 
                borderRadius = "3px">

                <InputBase sx ={{ml: 2, flex: 1}} placeholder ="Search"/>
                
                <IconButton type = "button" sx={{ p: 1 }}>
                    <SearchIcon/>
                </IconButton>
                
            </Box>

            {/* ICONS */}
            <Box display= "flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode ==='dark'? (
                        <DarkModeOutlinedIcon/>
                    ) :(
                        <LightModeOutlinedIcon/>
                    )}
                    
                </IconButton>
                    
                <IconButton>
                    <MinimizeIcon onClick={() => minimizeApp()}/>
                    
                </IconButton>
                    

                <IconButton>
                    <FilterNoneIcon fontSize="small" onClick={() => expandApp()}/>
                    
                </IconButton>
                    
                <IconButton>
                    <CloseIcon onClick={() => closeApp()}/>
                    
                </IconButton>
            </Box>
        </Box>

    );
};

export default Topbar;