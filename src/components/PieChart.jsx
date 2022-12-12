import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useState } from "react";
import { mockPieData as mockData } from "../data/mockData";


const PieChart = ({generoData}) => {

    //const [data, setData ] = useState(mockData)
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log(generoData);
    return(
        <ResponsivePie 
        data={generoData}
        theme={{
            axis: {
                domain:{
                    line:{
                        stroke: colors.grey[100]
                    },
                },

                legend: {
                    text:{
                        fill: colors.grey[100]
                    },
                },

                ticks:{
                    line:{
                        stroke: colors.grey[100],
                        strokeWidth: 1

                    },

                    text:{
                        fill: colors.grey[100]
                    },
                },
            },

            legends:{
                text:{
                    fill: colors.grey[100],
                },
            },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.2'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsDiagonalLength={1}
        arcLinkLabelsStraightLength={10}
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[]}
    />
    )
}

export default PieChart;