import { useEffect, useState } from "react";
import RecitersScreen from "./RecitersScreen";
import PlayerScreen from "./PlayerScreen";
import ChaptersScreen from "./ChaptersScreen";
import axios from "axios";

export default function HomeScreen() {

    const [reciters, setReciters] = useState([]);
    const [chapters, setChapters] = useState([])
    const [reciterDetail, setReciterDetail] = useState(null);
    const [chapterDetail, setChapterDetail] = useState(null);

    // Get all reciters with audio
    useEffect(() => {
        async function fetchData(){
            const {data: {reciters}} = await axios.get(`https://mp3quran.net/api/_english.php`)
            setReciters(reciters)
        }

        fetchData()
    }, [])

    // Get all chapters
    useEffect(() => {
        async function fetchData(){
            const {data: chapters} = await axios.get(`https://api.quran.com/api/v4/chapters`)
            setChapters(chapters)
        }
        reciters && reciters.length > 0 && fetchData()
    }, [reciters])

    const reciterHandler = (reciter) => {
        setReciterDetail(reciter)
    }

    const chapterHandler = (chapter) => {
        setChapterDetail(chapter)
    }

    return(
        <div className="row p-5 vh-100">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll">
                <RecitersScreen reciters={reciters} reciterHandler={reciterHandler} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll">
                <ChaptersScreen  chapters={chapters && chapters.chapters} chapterHandler={chapterHandler}/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll" >
                <PlayerScreen reciterDetail={reciterDetail} chapterDetail={chapterDetail} />
            </div>
        </div>
    )
}