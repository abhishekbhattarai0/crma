

import InfoCard from "../components/info-card"
import { Clock10, Clock5, HeartIcon, TrendingUp, Users2 } from "lucide-react";
import MultipleBarchartWidget from "../components/widgets/MultipleBarchartWidget";
// import ChartPieDonutWidget from "../components/widgets/ChartPieDonutWidget";
import ChartAreaWidget from "../components/widgets/ChartAreaWidget";
import ChartPieDonutWidget from "../components/widgets/ChartPieDonutWidget";

const analayticsCardInfo = [
    {
        title: "Sessions",
        total: "24k",
        rate: -8.5,
        Icon: Users2,
        desc: "New Sessions Today",
    },
    {
        title: "Avg.Sessions",
        total: "24k",
        rate: 8.5,
        Icon: Clock5,
        desc: "Weekly Avg.Sessions",
    },
    {
        title: "Sessions",
        total: "24k",
        rate: 8.5,
        Icon: HeartIcon,
        desc: "Bounce Rate Weekly",
    },
    {
        title: "Sessions",
        total: "24k",
        rate: 8.5,
        Icon: Clock10,
        desc: "Completions Weekly",
    },
    {
        title: 'Sessions',
        total: '24k',
        rate: 8.5,
        Icon: TrendingUp,
        desc: ''
    },
];




const Analytics = () => {
    return (
        <div className="space-y-4  bg-white">
            <div className="col-span-12 lg:col-span-9">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {analayticsCardInfo.map((item, idx) => (
                        <InfoCard  {...item} key={idx} />
                    ))}
                </div>
            </div>

            {/* <div>
                <MultipleBarchartWidget />
            </div> */}

            <div className="grid gap-4  lg:grid-cols-12  ">

                <div className="lg:col-span-9   ">
                    <MultipleBarchartWidget />
                </div>
                <div className="lg:col-span-3 ">
                    {/* <ChartAreaWidget /> */}
                    <ChartPieDonutWidget />
                </div>

            </div>

            <div>
                {/* <ChartPieDonutWidget /> */}
                <ChartAreaWidget />
            </div>

            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>



        </div>
    )
}

export default Analytics






