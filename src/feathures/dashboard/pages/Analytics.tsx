

import InfoCard from "../components/info-card"
import { Clock10, Clock5, HeartIcon, TrendingUp, Users2 } from "lucide-react";
import MultipleBarchartWidget from "../components/widgets/MultipleBarchartWidget";

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
        <div className="space-y-4">
            <div className="col-span-12 lg:col-span-9">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {analayticsCardInfo.map((item, idx) => (
                        <InfoCard  {...item} key={idx} />
                    ))}
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <MultipleBarchartWidget />
            </div>

        </div>
    )
}

export default Analytics



