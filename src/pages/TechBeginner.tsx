import { DollarSign, Edit, Video } from "react-feather";
import BeginnerProgrammer from "../components/forms/beginnerProgrammer";

function TechBeginner() {
  return (
    <div>
    <div className="grid place-items-center bg-slate-100">
      <div className="mx-3 my-5">
        <h3 className="text-center font-extrabold text-3xl sm:text-7xl sm:w-[950px] capitalize">
          Kickstart and build a profitable Freelance Career
        </h3>
        <h5 className="text-lg text-center mt-2">
          A step-by-step guide for programmers to build a consistent income
          stream via freelancing
        </h5>
      </div>

      <div className="shadow-2xl px-5 pt-3 rounded-lg bg-white">
        <p className="text-justify mb-0 text-sm">
          Freelancing allows you to build a noteworthy career and get high
          paying gigs. Fill in the form below to get started.
        </p>
        <BeginnerProgrammer />


      </div>

      <div className="my-10 mx-5">
        <p className="text-center font-mono text-lg">
          Three steps to get started
        </p>

        <div className="grid grid-cols-3 gap-5 mt-5">
          <div className="shadow-md text-center rounded-xl p-3 hover:animate-bounce">
            <div className="flex justify-center">
              <Edit size={30} />
            </div>
            <p className="mt-2">Fill the form</p>
          </div>

          <div className="shadow-md text-center rounded-xl p-3 hover:animate-bounce">
            <div className="flex justify-center">
              <Video size={30} />
            </div>

            <p className="mt-2">Get Course</p>
          </div>

          <div className="shadow-md text-center rounded-xl p-3 hover:animate-bounce">
            <div className="flex justify-center">
              <DollarSign size={30} />
            </div>

            <p className="mt-2">Start getting gigs</p>
          </div>
        </div>
      </div>


      <div className="my-5 mx-5 px-5 flex justify-center sm:w-[850px]">
        <p className="text-justify font-serif sm:font-normal italic">
          Are you a tech enthusiast seeking to build a remarkable career and
          increase your chances of securing high-paying gigs? Look no further
          than freelancing, a fantastic opportunity to earn substantial income
          while enjoying the comfort of your own home. With freelancing, you can
          tap into a vast array of possibilities, leveraging your programming
          skills to land lucrative projects. Whether you're a beginner or have
          some programming experience, our comprehensive course is designed to
          guide you step-by-step, empowering you to kickstart your freelancing
          journey and start making money. Don't miss out on this incredible
          opportunity. Fill in your details above to gain access to the course
          today.
        </p>
      </div>

      <p className="text-center my-5 bottom-0 mt-auto">
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </div>
    </div>
  );
}

export default TechBeginner;
