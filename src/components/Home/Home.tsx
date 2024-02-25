import { Link } from "react-router-dom"
export const Home = () => {
    return (
        <div className="w-full">
            <img src="https://assets-global.website-files.com/650eb5a79a5407e6942941bd/658d1439bc9f8a76fe44d43e_Group.png" alt="" className="w-full object-cover" />
            <div className="absolute top-0 w-full  mt-48 ml-[-70px]">
                <h1 className="text-center font-dmSans text-[48px] font-semibold">Naruto Shippuden なると 湿布電</h1>
                <div className="w-full justify-center items-center gap-2 flex mt-4">
                    <Link to="/dashboard">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg font-dmSans text-[24px] font-medium">Dashboard</button>
                    </Link>
                    <Link to="/charts">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg font-dmSans text-[24px] font-medium">Charts</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
