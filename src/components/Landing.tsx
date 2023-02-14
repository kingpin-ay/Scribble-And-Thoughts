import icons from "../variables/icons"

function Landing() {
    const title = "My Future Endeavors in AI and Technology Integration with Blockchain"

    
    const content = "My future plan is to delve into the integration of AI and blockchain technology and understand how it can be leveraged for various use cases. I aim to learn about the implementation of AI algorithms on blockchain networks and their potential impact on the security and privacy of data."

  return (
    <>
      <div className="tablet:flex px-10 py-5 h-screen text-white">
        <div className="tablet:flex tablet:flex-1 text-left tablet:items-center my-[110px] ">
            <div className="font-display block">
                <p className="tablet:text-3xl text-navy-blue animate-slide-in-right max-[600px]:opacity-100 landing-title-animation-delay text-lg max-[600px]:animate-none">{title}</p>
                <p className="tablet:text-[16px] my-6 animate-slide-in-right max-[600px]:opacity-100 landing-content-animation-delay text-sm max-[600px]:animate-none">{content}</p>
                <button className="bg-navy-blue px-4 py-2  rounded-md landing-button animate-slide-in-right max-[600px]:opacity-100 max-[600px]:animate-none">Read More -&#62;</button>
            </div>
        </div>
        <div className="tablet:flex-1 flex tablet:items-center max-[600px]:justify-around tablet:flex-row-reverse">
          <ul className="list-none max-[600px]:flex max-[600px]:justify-around max-[600px]:w-full ">
            <li>
              <a href="https://www.youtube.com/channel/UCNTWx8YAn4uhiHuAjhR4rcw"  target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#05445E" className="bi bi-youtube tablet:opacity-0  animate-slide-in-right max-[600px]:animate-none icons" viewBox="0 0 16 16">
                  <path d={icons.youtube}/>
                </svg>
              </a>
            </li>
            <li className="tablet:my-14">
              <a href="https://www.linkedin.com/in/ayush-mondal-a13023205/" target="_blank"  rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#05445E" className="bi bi-linkedin  tablet:opacity-0 animate-slide-in-right max-[600px]:animate-none icons" viewBox="0 0 16 16">
                  <path d={icons.linkdin}/>
                </svg>
              </a>
            </li>
            <li className="tablet:my-14">
              <a href="https://github.com/kingpin-ay" target="_blank"  rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#05445E" className="bi bi-github tablet:opacity-0  animate-slide-in-right max-[600px]:animate-none icons" viewBox="0 0 16 16">
                  <path d={icons.github}/>
                </svg>
              </a>
            </li>
            <li className="tablet:my-14">
              <a href="https://discord.gg/Fycw94eCjM" target="_blank"  rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#05445E" className="bi bi-discord tablet:opacity-0 animate-slide-in-right max-[600px]:animate-none icons" viewBox="0 0 16 16">
                  <path d={icons.discord}/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Landing