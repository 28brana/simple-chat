import { ChatCircle, Heart } from "phosphor-react";

const HomeCollaborate = () => {
    const videosList = [
        {
            id: 1,
            account: '@rupinderbob3'
        },
        {
            id: 3,
            account: '@shaleenanathani'
        },
        {
            id: 4,
            account: '@divyankatripathidahiya'
        },
        {
            id: 9,
            account: '@chefkunal'
        },
        {
            id: 6,
            account: '@sagarikaghatge'
        },
    ]
    return (
        <div className="mb-20 flex flex-col justify-center items-center">
            <p className="text-3xl font-semibold text-center my-9 w-4/5">Collaborate With Top Voices In The Industry, Just Like We Did!</p>
            <div className="flex flex-wrap gap-6 justify-center mx-12 md:mx-0">
                {
                    videosList.map((item, index) => (
                        <div key={index} className="rounded-xl overflow-hidden relative hover:scale-110 transition-all [transition-duration:250ms]">
                            <div className="absolute top-2 left-2 gap-1 flex flex-col">
                                <Heart size={22} className="icon-btn"  weight="fill" />
                                <ChatCircle size={22} className="icon-btn"  weight="fill" />
                            </div>
                            <video src={`https://dev.viralpitch.co/virallive/assets/img/video/${item.id}.mp4`} autoPlay muted loop />
                            <p className="absolute bottom-1 font-bold left-1 z-10 text-white">{item.account}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeCollaborate;