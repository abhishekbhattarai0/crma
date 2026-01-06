
import { LabelList, Pie, PieChart, ResponsiveContainer } from "recharts"


import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A donut chart"

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "var(--chart-1)",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "Firefox",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Edge",
        color: "var(--chart-4)",
    },
    other: {
        label: "Other",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig

// export function ChartPieDonut() {
//     return (
//         <div className="size-54  ">
//             <ResponsiveContainer width="100%" height="100%"
//             >
//                 <ChartContainer
//                     config={chartConfig}
//                     className="mx-auto aspect-square w-full h-full "
//                 >
//                     <PieChart>
//                         <ChartTooltip
//                             cursor={false}
//                             content={<ChartTooltipContent hideLabel />}
//                         />
//                         <Pie
//                             data={chartData}
//                             dataKey="visitors"
//                             nameKey="browser"
//                             innerRadius="60%"
//                             outerRadius="80%"
//                         />
//                     </PieChart>
//                 </ChartContainer>
//             </ResponsiveContainer>
//         </div>
//     )
// }


export function ChartPieDonut() {
    return (
        <div className="size-54 h-[250px] w-full    ">
            <ResponsiveContainer width="100%" height="100%"
            >
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full h-full "
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius="0%"
                            outerRadius="90%"
                            label={({ payload, ...props }) => {
                                return (
                                    <text
                                        cx={props.cx}
                                        cy={props.cy}
                                        x={props.x}
                                        y={props.y}
                                        textAnchor={props.textAnchor}
                                        dominantBaseline={props.dominantBaseline}
                                        fill="hsla(var(--foreground))"
                                    >
                                        {payload.visitors}
                                    </text>
                                )
                            }}
                        //   nameKey="browser"
                        >
                            <LabelList
                                dataKey="browser"
                                className="fill-background"
                                stroke="none"
                                fontSize={12}
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </ResponsiveContainer>
        </div>
    )
}


