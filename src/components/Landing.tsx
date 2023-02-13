

function Landing() {
    const title = "My Future Endeavors in AI and Technology Integration with Blockchain"

    
    const content = "My future plan is to delve into the integration of AI and blockchain technology and understand how it can be leveraged for various use cases. I aim to learn about the implementation of AI algorithms on blockchain networks and their potential impact on the security and privacy of data."

    const icons = {
      facebook : "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",

      linkdin : "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",

      github : "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",

      discord : "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
    }
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
                  <path d={icons.facebook}/>
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