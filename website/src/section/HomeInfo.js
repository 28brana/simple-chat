const HomeInfo = () => {
    const list = [
        {
            image: 'collaborate_with_top_creators.png',
            title: 'Find Your Perfect Match',
            subtitle: 'Our vast network of influencers across various niches ensures that we find the perfect match for your brand through our advanced search and filtering tools. We connect you with influencers who perfectly align with your brand values and campaign goals and genuinely resonate with your audience.'
        },
        {
            image: 'analyse_your_requirements.png',
            title: 'Get Customised Creative Solutions',
            subtitle: 'No two brands are the same, and neither are our strategies. From concept to execution, we manage every aspect of your influencer campaign and offer customised solutions tailored to your unique needs and goals and maximise your campaign’s impact.'
        },
        {
            image: 'measure_results_for.png',
            title: 'Measure Results For Strategic Growth',
            subtitle: 'Get access to intelligent, data-driven insights to measure your campaign’s success with Viral Pitch\'s robust reporting and analytics capabilities. We provide comprehensive reports to help you understand your ROI and fine-tune your strategies for future marketing campaigns'
        },
    ]
    return (
        <div  className="px-32 py-20 flex flex-col gap-28">
            {
                list.map((listItem, index) => (
                    <div key={index} className={`flex md:flex-row flex-col items-center gap-16 ${index & 1 ? 'md:flex-row-reverse':''}`}>
                        <div className="flex-1 ">
                            <img src={`https://dev.viralpitch.co/virallive/assets/img/${listItem.image}`} alt="Asset" />
                        </div>
                        <div className="flex-1">
                            <p className="text-5xl font-semibold">{listItem.title}</p>
                            <p className="text-xl [color:#606060] mt-8">{listItem.subtitle}</p>
                            <button className="secondry-btn mt-8">Explore More</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default HomeInfo;