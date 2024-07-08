import HeroImageOne from '../asset/hero-img-1.jpg';
import HeroImageTwo from '../asset/hero-img-2.jpg';
import HeroImageThree from '../asset/hero-img-3.jpg';
const HomeHero=()=>{
    return (
        <div className="flex pt-11 flex-col items-center justify-center bg-black text-white">
            <h1 className="[font-size:64px] text-center font-extrabold w-11/12">AI Powered Self Serve Influencer <br/> Marketing Platform</h1>
            <p className="text-lg text-center font-normal w-4/6">Tailored strategies, top influencers, and measurable results that elevate your brand. At Viral Pitch, we specialise in crafting bespoke influencer marketing campaigns that resonate, engage, and convert.</p>
            <button className="primary-btn large my-7"> Get Started</button>

            <div className="flex px-28 gap-10 py-10 items-center md:flex-row flex-col ">
                <div className='rounded-2xl overflow-hidden'>
                    <img src={HeroImageOne} alt='img1'/>
                </div>
                <div className='rounded-2xl overflow-hidden mb-10'>
                    <img src={HeroImageTwo} alt='img1'/>
                </div>
                <div className='rounded-2xl overflow-hidden'>
                    <img src={HeroImageThree} alt='img1'/>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;