import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockPieData, mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ElderlyIcon from "@mui/icons-material/Elderly";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import WcIcon from "@mui/icons-material/Wc";
import StatBox from "../../components/StatBox";
import { useState, useEffect } from "react";
import { API_URL } from "../../configs";
import axios from "axios";

//include dos meus componentes
import Header from "../../components/Header";
import GeneroPieChart from "../../components/GeneroPieChart.jsx";
import BarChart from "../../components/BarChart";
import PostoBarChart from "../../components/PostoBarChart";
import IdiomaBarChart from "../../components/IdiomaBarChart";
import CursoBarChart from "../../components/CursoBarChart";
import AfastamentoBarChart from "../../components/AfastamentoBarChart";

const Dashboard = () => {
  const theme = useTheme();
  const [generoData, setGeneroData] = useState(mockPieData);
  const [postoData, setPostoData] = useState([]);
  const [idiomaData, setIdiomaData] = useState([]);
  const [cursoData, setCursoData] = useState([]);
  const [afastamentoData, setAfastamentoData] = useState([]);
  const [idadeData, setIdadeData] = useState();
  const [servicoData, setServicoData] = useState();
  const colors = tokens(theme.palette.mode);

  // useEffect para quando a pagina iniciar
  useEffect(() => {
    // make an get with axios
    axios.get(API_URL + "/info/resumo").then((response) => {
      setGeneroData(
        response.data.resumo.genero.map((item) => {
          return { id: item.sexo, label: item.sexo, value: item.qtd };
        })
      );
      setIdadeData(response.data.resumo.media_idade);
      setServicoData(response.data.resumo.media_anos_corporacao);
      // console.log(response.data.resumo.media_idade);
      // console.log(response.data.resumo.posto);
      setPostoData(response.data.resumo.posto);
      setIdiomaData(response.data.resumo.idiomas);
      setAfastamentoData(response.data.resumo.afastados);


      let nm_tipo_curso = "";
      axios.get(API_URL + "/info/curso/tipo").then((resp) => {
        for (let i = 0; i < resp.data.tipocurso.length; i++) {
          if (resp.data.tipocurso[i].id_tipo_curso == 1) {
            nm_tipo_curso = resp.data.tipocurso[i].nm_tipo_curso;
            break;
          }
        }
        setCursoData(response.data.resumo.cursos_e_formacoes[nm_tipo_curso]);

      });
    });
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.greenAccent[800],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID AND CHARTS */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            isDashboard={false}
            title="Cadetes APMT"
            subtitle="12,361"
            progress="0.75"
            increase="+14%"
            icon={
              <SupervisedUserCircleIcon
                sx={{ color: colors.greenAccent[300], fontSize: "30px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Media de Idade APMT"
            subtitle={idadeData}
            progress="0.5"
            increase="+21%"
            icon={
              <ElderlyIcon
                sx={{ color: colors.greenAccent[300], fontSize: "px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Media de Anos de Servi??o"
            subtitle={servicoData}
            progress="0.30"
            increase="+5%"
            icon={
              <LocalPoliceIcon
                sx={{ color: colors.greenAccent[300], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} p="20px">
          <Box display="flex">
            <WcIcon sx={{ color: colors.greenAccent[300], fontSize: "26px" }} />
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ m: "5px 10px 0 5px" }}
            >
              G??nero
            </Typography>
          </Box>
          <Box height="200px" mt="-40px">
            <GeneroPieChart generoData={generoData} />
          </Box>
        </Box>
        {/*ROW 2 */}

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                Cursos
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <CursoBarChart cursoData={cursoData} />
          </Box>
        </Box>

        {/* TRANSACTIONS */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Adicionados Recentemente
            </Typography>
          </Box>
          {mockTransactions.map((transation, i) => (
            <Box
              key={`${transation.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transation.txId}
                </Typography>

                <Typography color={colors.grey[100]}>
                  {transation.user}
                </Typography>
              </Box>

              <Box color={colors.grey[100]}>{transation.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transation.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Postos
          </Typography>
          <Box height="250px" mt="-20px">
            <PostoBarChart postoData={postoData} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Titula????o Acad??mica
          </Typography>
          <Box height="250px" mt="-20px">
            <AfastamentoBarChart afastamentoData={afastamentoData} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="20px"
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: "15px" }}>
            Flu??ncia em Segundo Idioma
          </Typography>
          <Box height="250px" mt="-20px">
            <IdiomaBarChart idiomaData={idiomaData} />
          </Box>
        </Box>

        {/* FINAL BOX */}
      </Box>
    </Box>
  );
};

export default Dashboard;
