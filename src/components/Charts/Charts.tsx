import useGetData from '../../hooks/useGetData';
import { DASHBOARD_CONFIG } from '../Dashboard/Dashboard.config';
import { RadarGraph } from './Graphs/RadarGraph';
import { BarChartComponent } from './Graphs/BarChartComponent';
import { ScatteredChartComponent } from './Graphs/ScatteredChartComponent';
import { PieChartDirector } from './Graphs/PieChartDirector';
import { PieChartWriter } from './Graphs/PieChartWriter';
export const Charts = () => {
    const { data: initialData, isLoading } = useGetData()

    const obj = !isLoading && initialData?.reduce((val: any, cur: any) => {
        val[cur.writtenBy] = val[cur.writtenBy] ? val[cur.writtenBy] + 1 : 1;
        return val;
    }, {});


    const dataset = []
    for (const key of Object.keys(obj)) {
        dataset.push({ name: key, value: obj[key] })
    }


    const obj2 = !isLoading && initialData?.reduce((val: any, cur: any) => {
        val[cur.directedBy] = val[cur.directedBy] ? val[cur.directedBy] + 1 : 1;
        return val;
    }, {});

    const dataset2 = []
    for (const key of Object.keys(obj2)) {
        dataset2.push({ name: key, value: obj2[key] })
    }

    return (
        <main className="m-16 mt-36">
            <Header />
            <div className="flex flex-wrap gap-20 justify-between">
                <ScatteredChartComponent />
                <PieChartDirector />
                <PieChartWriter />
                <RadarGraph />
                <BarChartComponent />
            </div>
        </main>
    );
};



const Header = () => {
    const { title, subtitle, csvName, fileSize } = DASHBOARD_CONFIG

    return (
        <div className="">
            <h1 className="font-dmSans font-medium text-2xl mb-4 flex flex-row justify-center items-center w-fit">
                <div className="bg-primary w-1 h-6  mr-3"></div>
                Charts</h1>
            <h2 className="font-dmSans font-medium text-5xl mb-2">{title}</h2>
            <h3 className="font-dmSans font-normal text-2xl text-gray-600 mb-12">{subtitle}</h3>
            <h4 className="font-dmSans font-medium text-3xl mb-10">{csvName} <span className="text-gray-500 ">({fileSize})</span></h4>
        </div>
    )
}