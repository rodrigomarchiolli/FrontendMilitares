import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useEffect, useState } from "react";

const CursoBarChart = ({cursoData}) => {
    const [data, setData] = useState([]);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log(cursoData);
    useEffect(()=>{
        let dt = []
        let keys = Object.keys(cursoData);
        for(let i = 0;i<keys.length;i++){
            let dt2 = {}
            dt2[keys[i]] = cursoData[keys[i]]
            dt2["nm_curso"] = keys[i]
            dt2["id"] = i
            dt.push(dt2)
        }
        setData(dt)
        console.log(dt);
    },[cursoData])
    return (
        <ResponsiveBar
            // aqui vc tem que passar um vetor de objetos, cada objeto nesse vetor representa uma barra.
            // Neste objeto deve haver 2 chaves: 
            //  // Uma chave única para cada barra, que será usada para identificar a barra no gráfico (keys)
            //  // Uma chave com o NOME DA CHAVE igual em todos, é onde estarão os valores das barras (indexBy)
            
            //mesmo objeto -> barra estacada, objeto diferente-> barra do lado
            
            data={data ? data: []}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
            }}
            keys={data? data.map(item => { return item.nm_curso }):[]}
            indexBy="nm_curso"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            // define o estilo das barras
            // eu fiz um map pra haver um estilo diferente pra cada barra
            defs={
                data
                    ? data.map((item) => {
                        return {
                            id: item.nm_curso,
                            type: 'solid',
                            color: colors[Object.keys(colors)[item.id % Object.keys(colors).length]][100] , //  aqui eu pego cores diferentes pra cada bara, mas se quiser uma cor só deixa fixo, eu fico fazendo um modulo pra pegar uma cor diferente (%)
                            background: "inherit",
                            size: 4,
                            padding: 1,
                            stagger: true,
                        };
                    })
                    : []
            }
            // aqui vc tem que passar um vetor de objetos, cada objeto nesse vetor representa uma barra.
            // estes objetos dão o valor do estilo, definido em def
            fill={
                data
                    ? data.map((item) => {
                        return {
                            match: {
                                id: item.nm_curso,
                            },
                            id: item.nm_curso,
                        };
                    })
                    : []
            }
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Idioma",
                legendPosition: "middle",
                legendOffset: 32,
            }}

            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Quantidade',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
            isInteractive={true}
            />
    )
}

export default CursoBarChart;