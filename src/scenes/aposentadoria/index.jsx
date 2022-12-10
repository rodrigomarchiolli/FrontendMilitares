import  { Box, Typography, useTheme } from "@mui/material";
import  { DataGrid, GridToolbar } from "@mui/x-data-grid";
import  { tokens } from "../../theme";
import  {mockDataTeam} from "../../data/mockData";
import Header from "../../components/Header";

const Aposentadoria = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field: "id", headerName: "ID"}, 
        {
            field: "name", 
            headerName:"Name", 
            flex: 1, 
            cellClassName: "name-column-cell" 
        },
        {
            field: "age", 
            headerName:"Age", 
            type: "number",
            headerAlign: "left", 
            align: "left",
        },

        {
            field: "phone", 
            headerName:"Phone Number", 
            flex: 1, 
        },

        {
            field: "email", 
            headerName:"Email", 
            flex: 1, 
        },
        {
            field: "access", 
            headerName:"Access Level", 
            flex: 1, 
            renderCell: ({row: {access}})=>{
                return(
                    <Box
                        width = "60%"
                        m ="0 auto"
                        p= "5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={colors.greenAccent[700]}
                        borderRadius="4px">
                        
                        <Typography color={colors.grey[100]} sx={{ ml:"5px" }}>

                            {access}

                        </Typography>

                    </Box>
                );

            },
        },
    ];

    return(
        <Box m= "20px">
            <Header title="APOSENTADORIA" subtitle ="Gerenciando Aposentadoria"/>
            <Box 
                m="40px 0 0 0" 
                height ="71vh" 
                sx ={{ 
                    "& .MuiDataGrid-root": { border: "none"},
                    "& .MuiDataGrid-cell": {border: "none"},
                    "& .name-column--cell": {color: colors.greenAccent[300]},
                    "& .MuiDataGrid-columnHeaders": {backgroundColor: colors.blueAccent[700], borderBottom: "none"},
                    "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
                    "& .MuiDataGrid-footerContainer":{borderTop:"none", backgroundColor: colors.blueAccent[700]},
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text":{color: `${colors.grey[100]} !important`,},
                    
                    }} >
                    <DataGrid
                        rows={mockDataTeam}
                        columns={columns}
                        components={{Toolbar: GridToolbar}}
                    
                    />
            </Box>
        </Box>
    );
};

export default Aposentadoria;