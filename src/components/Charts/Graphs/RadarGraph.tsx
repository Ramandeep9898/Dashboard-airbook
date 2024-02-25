import useGetData from "../../../hooks/useGetData";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

export const RadarGraph = () => {
    const { data: initialData, isLoading } = useGetData()
    const obj = !isLoading && initialData?.reduce((val: any, cur: any) => {
        val[cur.type] = val[cur.type] ? val[cur.type] + 1 : 1;
        return val;
    }, {});



    const dataset = []
    for (const key of Object.keys(obj)) {
        dataset.push({ type: key, value: obj[key] })
    }

    return (
        < div className="border border-grey-border rounded-md py-4 px-6">
            <p className='font-dmSans font-medium text-xl'>Type distribution</p>
            <RadarChart
                cx={250}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={dataset}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="type" />
                <PolarRadiusAxis />
                <Radar
                    name="Mike"
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#ed4031"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </div>)
}