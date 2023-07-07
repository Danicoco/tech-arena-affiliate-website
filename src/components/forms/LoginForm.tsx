import { Button, Form, Input } from "antd";
import { useMutation } from "react-query";
import { adminLogin } from "../../server/admin";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const mutation = useMutation(adminLogin, {
    retry: false,
    onSuccess: (data: { meta: { token: string } }) => {
      navigate("/sp-mails");
      localStorage.setItem('token', data.meta.token);
    },
  });

  const onFinish = (values: Partial<IAdmin>) => {
    mutation.mutate(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="email"
        label="Email Address"
        rules={[
          { required: true, message: "Enter a valid email" },
          { type: "email", message: "Enter a valid email" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Enter password" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          className="bg-amber-300 text-black font-bold"
          block
          htmlType="submit"
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
