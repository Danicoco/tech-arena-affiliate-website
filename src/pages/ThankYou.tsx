import Steps from "../assets/steps.jpg";

const ThankYou = () => {
  return (
    <div className="grid place-items-center w-screen h-screen text-center">
      <div>
        <h2 className="my-10 text-2xl font-extrabold truncate">Welcome {localStorage.getItem('fullName')},</h2>
        <div className="w-[480px]">
          <div className="shadow-sm flex justify-center hover:animate-pulse">
            <img src={Steps} width={300} height={300} />
          </div>
          <p className="mt-5">
            You've taken the first step to unlock your high-paying freelance
            journey. A mail has been sent to <span className="font-bold">{localStorage.getItem("email")}</span>{" "}
            with regards to accessing the course.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
