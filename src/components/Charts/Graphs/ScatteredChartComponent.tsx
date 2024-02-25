import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';
import useGetData from '../../../hooks/useGetData';

export const ScatteredChartComponent = () => {
    const { data: initialData, isLoading } = useGetData()
    const dataset: Array<object> = []
    !isLoading && initialData?.reduce((val: any, cur: any) => {
        dataset.push({ x: cur.votes, y: cur.season, z: cur.episodeNumberInSeason })
        return val;
    }, {});
    return (

        <div className="border border-grey-border w-full  rounded-md py-4 px-6">
            <p className='font-dmSans font-medium text-xl mb-3'>Episode Vs Vote Distribution WRT Season</p>
            <ResponsiveContainer width="100%" height={500}>
                <ScatterChart
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="vote" />
                    <YAxis type="number" dataKey="y" name="season" />
                    <ZAxis type="number" dataKey="z" name="episode" />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter name="A school" data={dataset} fill="#ed4031" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}