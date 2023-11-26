"use client"
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../utils/send-email';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactsForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <div className="container m-auto px-[15px] flex flex-col items-center mt-[20px] mb-[45px]">
      <div className="min-w-[320px] max-w-[600px] flex flex-col gap-[10px]">
        <h1 className="font-[500] text-[20px] uppercase">Contacts</h1>
        <p className="text-[16px] font-[300]">
          The team at Parallels is committed to providing quality customer
          service. If you have any questions, concerns, or feedback please
          contact us.
        </p>
        <p className="text-[16px] font-[300]">
          We are currently experiencing higher than normal email volume. Please
          allow up to 3 business days to receive a response.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="px-[20px] py-[30px] border p-[10px] flex flex-col gap-[30px] bg-[#F2F2F2]">
          <input
            placeholder="Name"
            type="text"
            className="py-[5px]  bg-transparent border-b focus:bg-white outline-0"
            {...register('name', { required: true })}
          />
          <input
            placeholder="Email address"
            type="email"
            className="py-[5px] bg-transparent border-b focus:bg-white outline-0"
            {...register('email', { required: true })}
          />
          <input
            placeholder="Phone number"
            type="tel"
            className="py-[5px] bg-transparent border-b focus:bg-white outline-0"
            {...register('phone', { required: true })}
          />
          <input
            placeholder="Message"
            type="text"
            className="py-[5px] bg-transparent border-b focus:bg-white outline-0"
            {...register('message', { required: true })}
          />
          <input value="SEND" className="bg-[#1D1D1D] text-white py-[15px]" type="submit" />
        </form>
      </div>
    </div>
  );
};
