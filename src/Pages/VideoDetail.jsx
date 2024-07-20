import { IonIcon } from "@ionic/react"
import { play,thumbsUpOutline,thumbsDownOutline,download } from "ionicons/icons"  

const VideoDetail = () => {
  return (
    <>
    <div >
    <div className="flex flex-col ms-[8vw] mt-[20vh]" style={{
        // backdropFilter:
    }}>
        <h1 className=" text-5xl font-bold capitalize">
            Video name
        </h1>
        <p className="w-[50%] mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
        <div className="flex flex-row mt-5 gap-5">
            <p>IMDb 7.1</p>
            <p>1 h 50 min</p>
            <p>2003</p>
        </div>
        <div className="flex flex-row mt-3 gap-5">
            <p className=" font-semibold underline">Horror</p>
            <p className=" font-semibold underline">Drama</p>
            <p className=" font-semibold underline">Frightening</p>
        </div>
        <div className="flex flex-row gap-5 mt-5">
            <button className="p-2 flex items-center justify-center bg-black rounded-full"><IonIcon className="text-white text-4xl" icon={play}/></button>
            <button className="p-3 flex items-center justify-center bg-black rounded-full"><IonIcon className="text-white text-3xl" icon={thumbsUpOutline}/></button>
            <button className="p-3 flex items-center justify-center bg-black rounded-full"><IonIcon className="text-white text-3xl" icon={thumbsDownOutline}/></button>
            <button className="p-3 flex items-center justify-center bg-black rounded-full"><IonIcon className="text-white text-3xl" icon={download}/></button>
        </div>
    </div>
    </div>
    </>
  )
}

export default VideoDetail