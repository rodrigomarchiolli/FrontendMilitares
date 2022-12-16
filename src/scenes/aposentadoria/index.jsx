import { Box, Button, FormLabel, TextField, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { useState } from "react";
import Axios from "axios";




const Aposentadoria = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [filtroQtd, setFiltroQtd] = useState(null);
    const [filtroPagina, setFiltroPagina] = useState(null);
    const [filtroAposentadoriaSuperior, setFiltroAposentadoriaSuperior] = useState(null);
    const [filtroAposentadoriaInferior, setFiltroAposentadoriaInferior] = useState(null);
    const [filtroNome, setFiltroNome] = useState(null);
    const [rows, setRows] = useState([]);

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column-cell"
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },

        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },

        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={colors.greenAccent[600]}
                        borderRadius="4px">

                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>

                            {access}

                        </Typography>

                    </Box>
                );

            },
        },
    ];

    const applyFilters = () => {
        const params = {};
        if (filtroQtd) params.qtd = filtroQtd;
        if (filtroPagina) params.pagina = filtroPagina;
        if (filtroAposentadoriaSuperior) params.aposentadoriaSuperior = filtroAposentadoriaSuperior;
        if (filtroAposentadoriaInferior) params.aposentadoriaInferior = filtroAposentadoriaInferior;
        if (filtroNome) params.nome = filtroNome;

        Axios.get("/api/aposentadoria", { params })
            .then((response) => {
                setRows(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Box m="20px"
        >
            <Header title="APOSENTADORIA" subtitle="Gerenciando Aposentadoria" />
            {/* box com o componente de filtragem, que possui os filtros usados no useState */}
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="normal"
                alignItems="center"
                mt="20px"
                mb="20px"
                height="71vh"
            >
                <Box
                    m="40px 20px 0 0"
                    p="20px"
                    height="100%"
                    display="flex"
                    width="20%"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        backgroundColor: colors.primary[400],
                        borderRadius: "4px",
                        "& .MuiTextField-root": { m: "10px 0 0 0" },
                        "& .MuiButton-root": { m: "20px 0 0 0" },
                    }}
                >
                    <Typography color={colors.grey[100]} variant="h5" sx={{ mb: "20px" }}>
                        Filtrar
                    </Typography>

                    <form>
                        <TextField
                            label="Quantidade"
                            variant="outlined"
                            color="secondary"
                            type="number"
                            value={filtroQtd}
                            onChange={(e) => setFiltroQtd(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Página"
                            variant="outlined"
                            color="secondary"
                            type="number"
                            value={filtroPagina}
                            onChange={(e) => setFiltroPagina(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Aposentadoria Superior"
                            variant="outlined"
                            color="secondary"
                            type="date"
                            value={filtroAposentadoriaSuperior}
                            onChange={(e) => setFiltroAposentadoriaSuperior(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Aposentadoria Inferior"
                            variant="outlined"
                            color="secondary"
                            type="date"
                            value={filtroAposentadoriaInferior}
                            onChange={(e) => setFiltroAposentadoriaInferior(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Nome"
                            variant="outlined"
                            color="secondary"
                            value={filtroNome}
                            onChange={(e) => setFiltroNome(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            margin="normal"
                        />

                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={applyFilters}
                        >
                            Filtrar
                        </Button>
                    </form>

                </Box>


                <Box
                    m="40px 0 0 0"
                    height="100%"
                    width="100%"
                    sx={{
                        "& .MuiDataGrid-root": { border: "none" },
                        "& .MuiDataGrid-cell": { border: "none" },
                        "& .name-column--cell": { color: colors.greenAccent[300] },
                        "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.greenAccent[800], borderBottom: "none" },
                        "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
                        "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.greenAccent[800] },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${colors.grey[100]} !important`, },
                    }}
                >
                    <DataGrid
                        rows={mockDataTeam}
                        columns={columns}
                        filterModel={{
                            items: [{ columnField: 'rating', operatorValue: '>', value: '2.5' }],
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Aposentadoria;