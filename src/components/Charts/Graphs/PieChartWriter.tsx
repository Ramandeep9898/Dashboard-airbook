import { PieChart, Pie, Tooltip, } from 'recharts';
import useGetData from '../../../hooks/useGetData';

export const PieChartWriter = () => {
    const { data: initialData, isLoading } = useGetData()

    const obj = !isLoading && initialData?.reduce((val: any, cur: any) => {
        val[cur.writtenBy] = val[cur.writtenBy] ? val[cur.writtenBy] + 1 : 1;
        return val;
    }, {});


    const dataset = []
    for (const key of Object.keys(obj)) {
        dataset.push({ name: key, value: obj[key] })
    }
    return (
        <div className="border border-grey-border rounded-md py-4 px-6">
            <p className='font-dmSans font-medium text-xl'>Writer Distribution</p>
            <PieChart width={500} height={500}>
                <Pie data={dataset} dataKey="value" cx="50%" cy="50%" outerRadius={150} fill="#ed4031" />
                <Tooltip />
            </PieChart>
        </div>
    )
}