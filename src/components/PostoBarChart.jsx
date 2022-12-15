import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useState, useEffect } from "react";
const postoExample = [
    {
        "qtd": 1,
        "nm_posto": "Cabo",
        "id_posto": 2
    },
    {
        "qtd": 13,
        "nm_posto": "Soldado",
        "id_posto": 1
    }
]
const PostoBarChart = ({ postoData }) => {
    const [data, setData] = useState(postoExample)

    useEffect(() => {
        setData(postoData)
    }, [postoData])

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveBar
            data={postoData ? postoData :[]}
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
                            strokeWidth: 1
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
            // a lista vão ser os valores unicos de nm_posto
            keys={
                postoData ? postoData.map((item) => item.nm_posto) : []
            }
            indexBy="nm_posto" //isso serve para agrupar os valores de nm_posto
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            // os def serve para definir cores especificas para cada nm_posto
            defs={
                // [
                // {
                //     id: 'dots',
                //     type: 'patternDots',
                //     background: 'inherit',
                //     color: '#38bcb2',
                //     size: 4,
                //     padding: 1,
                //     stagger: true
                // },
                // {
                //     id: 'lines',
                //     type: 'patternLines',
                //     background: 'inherit',
                //     color: '#eed312',
                //     rotation: -45,
                //     lineWidth: 6,
                //     spacing: 10
                // }
                // ]
                // vou usar as colors definidas no temas pra fazer uma color pra cada nm_posto
                postoData ? postoData.map((item) => {
                    return {
                        id: item.nm_posto,
                        type: 'patternDots',
                        background: 'inherit',
                        // vai escoler a cor usando o id_posto%qtd de cores em cores pra selecionar a cor
                        color: colors[item.nm_posto % Object.keys(colors).length],
                        size: 4,
                        padding: 1,
                        stagger: true
                    }
                }) : []
            }
            //o fill funciona como um switch case, onde ele vai verificar o nm_posto e vai retornar a cor especifica
            fill={
                postoData ? postoData.map((item) => {
                    return {
                        match: {
                            id: item.nm_posto,
                        },
                        id: item.nm_posto,
                    }
                }
                ) : []

            }
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'posto',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'quantidade',
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

        />)
}
export default PostoBarChart;