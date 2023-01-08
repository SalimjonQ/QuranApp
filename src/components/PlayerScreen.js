import ReactPlayer from "react-player"
export default function PlayerScreen( {reciterDetail, chapterDetail} ) {

    const audioLink = (reciter, number) => {
        return reciter + '/' + ('00' + number).slice(-3)+'.mp3'
    }

    return(
        <div className="min-vh-100 shadow-lg p-3 bg-red"> 
            <h1 className="fs-5 fw-bold text-center">Player</h1><hr/>
            {reciterDetail !== null && chapterDetail !== null ?  (
                 <ul className="list-group text-ends">
                 <div>
                     <li className="list-group-item bg-transparent border-0 text-light py-0 curser fs-6 ps-0 d-flex justify-content-between">
                         <span>Qori: </span>
                         <span className='fs-6'>{reciterDetail.name}</span>
                     </li>
                     <hr/>
                     <li className="list-group-item bg-transparent border-0 text-light py-0 curser fs-6 ps-0 d-flex justify-content-between">
                         <span>Arabcha nomi: </span>
                         <span className='fs-6'>{chapterDetail.name_arabic}</span>
                     </li>
                     <hr/>
                     <li className="list-group-item bg-transparent border-0 text-light py-0 curser fs-6 ps-0 d-flex justify-content-between">
                         <span>Inglizcha nomi: </span>
                         <span className='fs-6'>{chapterDetail.name_complex}</span>
                     </li>
                     <hr/>
                     <li className="list-group-item bg-transparent border-0 text-light py-0 curser fs-6 ps-0 d-flex justify-content-between">
                         <span>Nozil bo'ljan joy: </span>
                         <span className='fs-6'>{chapterDetail.revelation_place}</span>
                     </li>
                     <hr/>
                     <li className="list-group-item bg-transparent border-0 text-light py-0 curser fs-6 ps-0 d-flex justify-content-between">
                         <span>Tarjimasi:  </span>
                         <span className='fs-6'>{chapterDetail.translated_name.name}</span>
                     </li>
                     <hr/>
                     <div>
                         <ReactPlayer url={
                            audioLink(reciterDetail.Server, chapterDetail.id)
                         } controls={true} playing={true} width="100%" height="60px"/>
                     </div>
                 </div>
             </ul>
            ) : (
                <div className="text-center">
                    <span className="spinner-border"></span>
                </div>
            )}
        </div>
    )
}