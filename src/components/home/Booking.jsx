import { booking  } from "../../assets"

const Booking = () => {
  return (
    <div className="px-4 md:py-28 lg:pl-20 lg:py-[8.5rem] lg:pr-40 pb-16 md:pl-20">
      <div>
        <img src={booking} alt="booking" />
      </div>
      <br />
      <div className="flex flex-col p-8 justify-center items-end gap-6 self-stretch rounded-3xl bg-neutral8 shadow-1">
        <div className="flex flex-col gap-5 self-stretch items-start w-[17.4375rem]">
          <h2 className="text-neutral2 text-5xl font-pro font-bold leading-[3.5rem] tracking-[-0.06rem]">Book a class</h2>
          <h2 className="text-neutral4 text-base font-poppins">Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.</h2>

          <div></div>
          
        </div>
      </div>
    </div>
  )
}

export default Booking