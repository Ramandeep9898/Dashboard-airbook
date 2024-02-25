import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useGetData from '../../../hooks/useGetData';

export const BarChartComponent = () => {
    const { data: initialData, isLoading } = useGetData()

    const episodeCountmMap: { [key: string]: any } = {}
    !isLoading && initialData?.reduce((val: any, cur: any) => {
        if (!episodeCountmMap[cur.season]) {
            episodeCountmMap[cur.season] = { 'episodeCount': 0, 'totalRating': 0 }
        }
        episodeCountmMap[cur.season]['totalRating'] = episodeCountmMap[cur.season]['totalRating'] + Number(cur.rating)
        episodeCountmMap[cur.season]['episodeCount'] = episodeCountmMap[cur.season]['episodeCount'] + 1
        return val;
    }, {});

    const dataset = []
    for (const key of Object.keys(episodeCountmMap)) {
        const averageRating = Math.round(episodeCountmMap[key]['totalRating'] / episodeCountmMap[key]['episodeCount'])
        dataset.push({ name: key, averageRating: averageRating })
    }


    return (
        <div className="border border-grey-border rounded-md py-4 px-6">
            <p className='font-dmSans font-medium text-xl mb-24'>Rating Distribution:</p>
            <BarChart
                width={500}
                height={300}
                data={dataset}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="averageRating" fill="#ed4031" background={{ fill: '#eee' }} />
            </BarChart>
        </div>)
}