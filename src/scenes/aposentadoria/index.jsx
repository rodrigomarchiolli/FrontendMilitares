import { Box, Button, FormLabel, TextField, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import Axios from "axios";
import { API_URL } from "../../configs";

const test_militares = [
    {
        "matricula": 900000,
        "nome": "Joaquim Alves da Silva Xavier",
        "sexo": "Masculino",
        "antiguidade": 99999,
        "dt_ingresso": 633837600,
        "dt_nascimento": 318222000,
        "licencas_esp_acc": 6,
        "endereco": "Avenida Engenheiro Mesquita, 586, Centro, Araranguá/SC",
        "ferias": 1643684400,
        "dt_aposentadoria": 1028602800,
        "nm_cidade": "Araranguá",
        "nm_posto": "Soldado",
        "nm_batalhao": null
    },
    {
        "matricula": 900001,
        "nome": "Joaquim Alves da Silva Xavier",
        "sexo": "Masculino",
        "antiguidade": 99999,
        "dt_ingresso": 633837600,
        "dt_nascimento": 318222000,
        "licencas_esp_acc": 6,
        "endereco": "Avenida Engenheiro Mesquita, 586, Centro, Araranguá/SC",
        "ferias": 1643684400,
        "dt_aposentadoria": 1028602800,
        "nm_cidade": "Araranguá",
        "nm_posto": "Soldado",
        "nm_batalhao": null
    },
]


const Aposentadoria = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [rowsData, setRowsData] = useState([]);

    const [filtroQtd, setFiltroQtd] = useState(10);
    const [filtroPagina, setFiltroPagina] = useState(1);
    const [filtroAposentadoriaSuperior, setFiltroAposentadoriaSuperior] = useState('');
    const [filtroAposentadoriaInferior, setFiltroAposentadoriaInferior] = useState('');
    const [filtroNome, setFiltroNome] = useState('');
    const [rows, setRows] = useState([]);

    const columns = [
        { field: "id", headerName: "Matricula" },
        {
            field: "nome",
            headerName: "Nome do Militar",
            // adiciona quebra de linha
            renderCell: (params) => {
                return (
                    <Typography
                        variant="body2"
                        style={{ whiteSpace: "pre-line" }}
                    >
                        {params.value}
                    </Typography>
                );
            }

        },
        { field: "sexo", headerName: "Sexo" },
        { field: "nm_posto", headerName: "Posto" },
        { field: "dt_ingresso", headerName: "Ingresso" },
        { field: "dt_nascimento", headerName: "Nascimento" },
        { field: "licencas_esp_acc", headerName: "Licenças Especiais" },
        { field: "endereco", headerName: "Endereço" },
        { field: "ferias", headerName: "Férias" },
        { field: "dt_aposentadoria", headerName: "Aposentadoria" },
        { field: "nm_cidade", headerName: "Cidade" },
        { field: "nm_batalhao", headerName: "Batalhão" },
    ];

    const applyFilters = () => {
        const params = {};
        if (filtroQtd && filtroQtd != '') params["qtd"] = filtroQtd;
        if (filtroPagina && filtroPagina != '') params["pagina"] = filtroPagina;
        if (filtroAposentadoriaSuperior && filtroAposentadoriaSuperior != '') {
            params["dt_aposentadoria_sup"] = filtroAposentadoriaSuperior;
            // converte para timestamp em segundos
            params["dt_aposentadoria_sup"] = new Date(params["dt_aposentadoria_sup"]).getTime() / 1000;
        }
        if (filtroAposentadoriaInferior && filtroAposentadoriaInferior != '') {
            params["dt_aposentadoria_inf"] = filtroAposentadoriaInferior;
            // converte para timestamp em segundos
            params["dt_aposentadoria_inf"] = new Date(params["dt_aposentadoria_inf"]).getTime() / 1000;
        }
        if (filtroNome && filtroNome != '') params["nome"] = filtroNome;
        console.log(params);
        Axios.get(API_URL + "/militares/aposentadoria", { params })
            .then((response) => {
                //setRows(response.data);
                console.log(response.data);
                setRowsData(response.data.militares);
            })
            .catch((error) => {
                alert(error.response.data.msg)
            });
    };
    useEffect(() => {
        applyFilters();
    }, []);

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
                            // o valor não pode ser menor que 1
                            onChange={(e) => {
                                if (e.target.value < 1) {
                                    e.target.value = 1;
                                    return;
                                };
                                setFiltroQtd(e.target.value);
                            }}
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
                            // o valor não pode ser menor que 1
                            onChange={(e) => {
                                if (e.target.value < 1) {
                                    e.target.value = 1;
                                    return;
                                };
                                setFiltroPagina(e.target.value);
                            }}
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

                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            alignItems="center"
                            mt="20px"
                        >

                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => applyFilters()}
                        >
                            Filtrar
                        </Button>
                        {/* botão para limpar este filtro */}
                        <Button
                                variant="contained"
                                color="warning"
                                onClick={() => {
                                    setFiltroQtd(10);
                                    setFiltroPagina(1);
                                    setFiltroAposentadoriaSuperior('');
                                    setFiltroAposentadoriaInferior('');
                                    setFiltroNome('');
                                }}
                            >
                                Limpar
                            </Button>
                        </Box>
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
                        // remove o footer
                        "& .MuiDataGrid-footerContainer": { display: "none" },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${colors.grey[100]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text:hover": { backgroundColor: `${colors.greenAccent[800]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text:active": { backgroundColor: `${colors.greenAccent[800]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text:focus": { backgroundColor: `${colors.greenAccent[800]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text:disabled": { backgroundColor: `${colors.greenAccent[800]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text:disabled:hover": { backgroundColor: `${colors.greenAccent[800]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text:disabled:active": { backgroundColor: `${colors.greenAccent[800]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text:disabled:focus": { backgroundColor: `${colors.greenAccent[800]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text.Mui-disabled": { backgroundColor: `${colors.greenAccent[800]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text.Mui-disabled:hover": { backgroundColor: `${colors.greenAccent[800]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text.Mui-disabled:active": { backgroundColor: `${colors.greenAccent[800]} !important`, },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text.Mui-disabled:focus": { backgroundColor: `${colors.greenAccent[800]} !important`, },

                    }}
                >
                    <DataGrid
                        rows={rowsData?rowsData.map((militar) => {
                            return {
                                id: militar.matricula,
                                nome: militar.nome,
                                sexo: militar.sexo,
                                nm_posto: militar.nm_posto,
                                graduacao: militar.graduacao,
                                // data de nascimento é passada como timestamp em segundo, enão vou converter para legivel no fuso brasileiro (apenas dd/mm/yyyy)
                                dt_nascimento: new Date(militar.dt_nascimento * 1000).toLocaleDateString("pt-BR"),
                                // data de aposentadoria é passada como timestamp em segundo, enão vou converter para legivel no fuso brasileiro (apenas dd/mm/yyyy)
                                dt_aposentadoria: new Date(militar.dt_aposentadoria * 1000).toLocaleDateString("pt-BR"),
                                // data de ingresso é passada como timestamp em segundo, enão vou converter para legivel no fuso brasileiro (apenas dd/mm/yyyy)
                                dt_ingresso: new Date(militar.dt_ingresso * 1000).toLocaleDateString("pt-BR"),
                                licencas_esp_acc: militar.licencas_esp_acc,
                                endereco: militar.endereco,
                                // ferias acumuladas é passada como timestamp em segundo, enão vou converter para legivel no fuso brasileiro (apenas dd/mm/yyyy)
                                ferias: new Date(militar.ferias * 1000).toLocaleDateString("pt-BR"),
                                nm_cidade: militar.nm_cidade,
                                nm_batalhao: militar.nm_batalhao ? militar.nm_batalhao : "---",


                            }
                        }):[]}
                        columns={columns}
                        
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Aposentadoria;