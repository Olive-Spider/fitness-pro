import { intro } from "../../assets"

const Intro = () => {
  return (
    <div className="flex flex-col lg:md:flex-row justify-center items-center px-8 py-16 md:px-20 md:py-28 lg:px-40 h-[69.375rem] w-[23.4375rem] md:w-[64rem] md:h-[40.125rem] lg:w-[90rem] lg:h-[51rem] flex-none order-4 flex-grow-0 gap-8">
      <div className="w-[23.4375rem] md:w-[26rem] lg:w-[40rem] h-[29.875rem] md:h-[33.15rem] lg:h-[51rem] rounded-3xl flex-none order-none lg:md:order-1">
        <img src={intro} alt="intro" />
      </div>
      <div className="flex-col items-start gap-10 w-[19.4375rem] md:w-[26rem] lg:w-[28rem] h-[33.5rem] lg:md:h-[23.5rem] order-1 lg:order-none self-stretch flex-none flex-grow-0">
        <h1 className="flex flex-col items-stretch text-[4rem] font-pro font-bold tracking-[-0.08rem] leading-[4rem] text-neutral3">Train smarter, get stronger.</h1>
        <br />
        <h3 className="flex flex-col items-stretch text-2xl font-poppins leading-8 tracking-[-0.015rem] text-neutral4">Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking, more lifting 🔥🏀</h3>
        <br />
        <button className="text-neutral8 flex px-6 py-4 justify-center items-center gap-3 rounded-[5.625rem] bg-primary">Start free trial</button>
      </div>
    </div>
  )
}

export default Intro