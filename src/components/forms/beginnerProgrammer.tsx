import { Button, Form, Input } from "antd";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { createTechSubscribers } from "../../server/subscription";
import { useEffect, useState } from "react";

const BeginnerProgrammer = () => {
  const navigate = useNavigate();
  const [self,] = useState(true);
  const mutation = useMutation(createTechSubscribers, {
    onSuccess: (data) => {
      const subscriber = data.data as ISubscriber;
      localStorage.setItem("fullName", subscriber.fullName);
      localStorage.setItem("email", subscriber.email);
      navigate("/thank-you");
    },
  });

  const onFinish = (values: ISubscriber) => {
    mutation.mutateAsync({ ...values, type: "tech-beginner" });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://eocampaign1.com/form/e11e601a-183c-11ee-b1da-f5b14e9b882e.js';
    script.async = true;
    script.setAttribute('data-form', 'e11e601a-183c-11ee-b1da-f5b14e9b882e');

    const container = document.getElementById('form-container');
    container?.appendChild(script);

    return () => {
      container?.removeChild(script);
    };
  }, []);


  return (
    <>
    {self ?
    <Form layout="vertical" onFinish={onFinish}>
      <p className="text-red-700 text-sm text-center">
        {mutation.error instanceof Error &&
          (mutation.error.message.includes("Duplicate")
            ? "You already request access to this course. Kindly check your email"
            : mutation.error.message)}
      </p>
      <Form.Item
        name="fullName"
        label="Full Name"
        rules={[
          { required: true, message: "Full name is required" },
          { type: "string", message: "Enter your valid name" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email Address"
        rules={[
          { required: true, message: "Email address is required" },
          { type: "email", message: "Enter a valid email address" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          className="bg-red-600 text-white font-bold"
          loading={mutation.isLoading}
        >
          Yes! Show Me How
        </Button>
      </Form.Item>
    </Form>
    :
    // <script async src="https://eocampaign1.com/form/e11e601a-183c-11ee-b1da-f5b14e9b882e.js" data-form="e11e601a-183c-11ee-b1da-f5b14e9b882e"></script>
    <div className="flex justify-center items-center w-full">
      <div id="form-container"></div>
    </div>
    }
    </>
  );
};

export default BeginnerProgrammer;
