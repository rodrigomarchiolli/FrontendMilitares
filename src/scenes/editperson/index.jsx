import  { Box, useTheme, Button } from "@mui/material";
import  { DataGrid, GridToolbar } from "@mui/x-data-grid";
import  { tokens } from "../../theme";
import  {mockDataContacts} from "../../data/mockData";

import Header from "../../components/Header";
import EditAction from "./EditAction";


const EditPerson = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [

        {
            field: "edit", 
            headerName:"Edit", 
            flex: 0.5, 
            cellClassName: "edit-column-cell" ,
            renderCell: (params) =>(
                <EditAction {...{params}}/>
            )
        },


        {field: "id", headerName: "ID", flex: 0.5},
        {field: "registrarId", headerName: "Registrar ID"}, 
        

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
            field: "address", 
            headerName:"Address", 
            flex: 1, 
        },

        {
            field: "city", 
            headerName:"City", 
            flex: 1, 
        },

        {
            field: "zipCode", 
            headerName:"ZipCode", 
            flex: 1, 
        },


    ];

    return(
        <Box m= "20px">
            <Header title="Editar Pessoa" subtitle ="Lista de Dados Cadastrais"/>

            <Box 
                m="1px 0 0 0" 
                height ="67vh" 
                sx ={{ 
                    "& .MuiDataGrid-root": {border: "none"},
                    "& .MuiDataGrid-cell": {border: "none"},
                    "& .name-column--cell": {color: colors.greenAccent[300]},
                    "& .MuiDataGrid-columnHeaders": {backgroundColor: colors.greenAccent[800], borderBottom: "none"},
                    "& .MuiDataGrid-virtualScroller": {backgroundColor: colors.primary[400]},
                    "& .MuiDataGrid-footerContainer":{borderTop:"none", backgroundColor: colors.greenAccent[800]},
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text":{color: `${colors.grey[100]} !important`,},
                    "& .MuiCheckbox-root":{color: `${colors.greenAccent[200]} !important`,}
                    
                    }} >
                    <DataGrid
                        rows={mockDataContacts}
                        columns={columns}
                        components={{Toolbar: GridToolbar}}
                    
                    />
            </Box>

            

        </Box>
    );
};

export default EditPerson;