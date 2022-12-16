import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";



const PostoBarChart = ({ postoData }) => {

    // console.log(postoData.map(item => { return { [item.nm_posto]: item.qtd } }));
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // console.log(Object.keys(colors));

    return (
        <ResponsiveBar
            data={postoData ? postoData.map(item=>{
                return{
                    [item.nm_posto]: item.qtd,
                    nm_posto: item.nm_posto
                }
            }) : []}
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
            keys={postoData.map(item => { return item.nm_posto })}
            indexBy="nm_posto"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={
                postoData
                    ? postoData.map((item) => {
                        return {
                            id: item.nm_posto,
                            type: 'solid',
                            color: colors[Object.keys(colors)[item.id_posto % Object.keys(colors).length]][100] ,
                            background: "inherit",
                            size: 4,
                            padding: 1,
                            stagger: true,
                        };
                    })
                    : []
            }
            fill={
                postoData
                    ? postoData.map((item) => {
                        return {
                            match: {
                                id: item.nm_posto,
                            },
                            id: item.nm_posto,
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
                legend: "Nome Posto",
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

        />)
}

export default PostoBarChart;