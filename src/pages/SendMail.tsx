import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import { Button, DatePicker, Input } from "antd";
import { useMutation } from "react-query";
import { sendMail } from "../server/mail";

const SendMail = () => {
  const [value, setValue] = useState("");
  const [subject, setSubject] = useState("");
  const [, setDate] = useState("");

  const mailMutation = useMutation(sendMail);

  const onFinish = () => {
    const body ={
        subject,
        content: value,
        subscriptionType: "tech-beginner",
    }
    mailMutation.mutateAsync(body);
  };


  return (
    <div className="mx-10 my-10 sm:h-[700px]">
      <div className="flex justify-end gap-10 pr-3">
        <Button className="bg-green-700 text-white" loading={mailMutation.isLoading} onClick={onFinish}>
          Send Mail
        </Button>
        <Button className="bg-orange-600 text-white">Schedule Mail</Button>
      </div>

      <div className="p-3">

        <div>
          <p className="text-center text-red-700 font-bold mb-5">{mailMutation.error instanceof Error && mailMutation.error.message}</p>
          <p>{mailMutation.isSuccess && "Mail sent successfully"}</p>
        </div>
        <div className="mb-2 flex gap-5">
            <p>Subject:</p>
        <Input onChange={(e) => setSubject(e.target.value)} />
        </div>

        <div className="mb-2 flex gap-5">
            <p>Cylce:</p>
        <Input type="number" onChange={(e) => setSubject(e.target.value)} />
        </div>

        <div className="mb-2">
        <DatePicker onChange={(d) => d && setDate(d as unknown as string)} className="w-full" />
        </div>

        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default SendMail;
