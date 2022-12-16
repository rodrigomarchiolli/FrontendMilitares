import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { API_URL, LISTAAP } from "../../configs";
import axios from "axios";

const Aposentadoria = () => {
  const [aposData, setAposData] = useState();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    axios.get(API_URL + LISTAAP , { params: { pagina: 1, qtd: 50 } }).then((response) => {
      
        if(!response.data.msg){
            setAposData(response.data.militares);
        // console.log(response.data.militares);
        // console.log(aposData);
        }else{
            alert(response.data.msg)
        }
      
    })
    .catch(e=>{
        // console.log(e);
        alert(e.response.data.msg)
    });
  }, []);

  const columns = [
    { field: "matricula", headerName: "Matricula" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "sexo",
      headerName: "Sexo",
      type: "number",
      headerAlign: "left",
      align: "left",
    },

    {
      field: "posto",
      headerName: "Posto",
      flex: 1,
    },

    {
      field: "antiguidade",
      headerName: "Antiguidade",
      flex: 1,
    },

    {
      field: "nm_cidade",
      headerName: "Cidade",
      flex: 1,
    },

    {
      field: "dt_aposentadoria",
      headerName: "Aposentadoria",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="APOSENTADORIA" subtitle="Gerenciando Aposentadoria" />
      <Box
        m="40px 0 0 0"
        height="71vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { border: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenAccent[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[800],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Aposentadoria;
