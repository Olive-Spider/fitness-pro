import { intro } from "../../assets"

const Intro = () => {
  return (
    <div className="flex flex-col lg:md:flex-row justify-center items-center px-8 py-16 md:px-20 md:py-28 lg:px-40 h-[69.375rem] w-[23.4375rem] md:w-[64rem] md:h-[40.125rem] lg:w-[90rem] lg:h-[51rem] flex-none order-4 flex-grow-0 gap-8">
      <div>
        <img className="w-[23.4375rem] md:w-[26rem] lg:w-[40rem] h-[29.875rem] md:h-[33.15rem] lg:h-[51rem] rounded-3xl flex-none order-none lg:md:order-1" src={intro} alt="intro" />
      </div>
      <div className="flex-col items-start gap-10 w-[311px] md:w-[416px] lg:w-[448px] h-[536px] lg:md:h-[376px] order-1 lg:order-none self-stretch flex-none flex-grow-0">
        <h1 className="">Train smarter, get stronger.</h1>
        <h3>Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking, more lifting 🔥🏀</h3>
      </div>
    </div>
  )
}

export default Intro