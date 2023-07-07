import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className="grid place-items-center h-screen">
      <div className="w-[450px]">
        <h3 className="text-2xl text-center capitalize font-semibold my-10">
          Oh! Welcome to the lost land...
        </h3>
        <p className="text-center">
          We can't find what you're looking for, however we think you might
          actually be interested in our freelancing course.{" "}
        </p>

        <div className="text-center mt-5">
          <Button
          className="bg-violet-500 text-white hover:text-white hover:bg-violet-500"
          onClick={() => navigate('/')}
          >
            Get Started Freelancing...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
