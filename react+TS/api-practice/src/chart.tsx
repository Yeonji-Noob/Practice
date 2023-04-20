import axios from "axios";
import { useEffect, useState } from "react";


interface chartDatas {
    rank: number,
    name: string,
    artist: string,
    image: string
}


export const ChartData = () => {

    // 1. 결과처리 2. 로딩처리 3. 에러처리
    const [chart, setChart] = useState<null | Array<chartDatas>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null>(null);


    console.log(chart);
    useEffect(() => {

        const fetchCharts = async () => {

            try {

                //데이터 가져오기 전 작업
                setError(null);
                setChart(null);
                setLoading(true);


                //데이터를 가져옴
                const response = await axios.get('https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json');
                const chartData = response.data.data.slice(0, 25);
                setChart(chartData);
            }
            catch (e: unknown) {

                console.error(e);

            }

            setLoading(false);


        }


        fetchCharts();

    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!chart) return null;


    //일단 임의로 정해준 것
    // const chartItems = Array.from({ length: 25 }, (_, i) => i + 1);

    return (
        <>

            {chart.map((music: chartDatas) => {


                return (

                    <div key={music.rank}>
                        <div className="chart-album-flaxbox">
                            <div className="chart-album-flax">
                                <div className="chart-album-cover">
                                    <img src={music.image} className="chart-album-cover" alt="" />
                                </div>
                                <div className="chart-album-textbox">
                                    <p>{music.rank}</p>
                                    <p>{music.name}</p>
                                    <p>{music.artist}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                );
            })}
        </>
    );

}

//연습완료 ,, 적용하러 가보자..