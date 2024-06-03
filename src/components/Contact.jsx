import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userinput = {
            name:data.name,
            email:data.email,
            password:data.message
        }

        try{
        await axios.post("https://getform.io/f/qblokrxa",userinput)
        toast.success('Here is your toast.');
        }catch(err){
        console.log(err + "error detected")
        toast.error("Something went wrong");
        }
      }
  return (
    <>
      <div name = "Contact" className="max-w-screen-2xl rounded mx-auto px-4 md:px-20 my-20 mt-20">
        <h1 className="text-3xl font-bold underline mb-5"> Contact Me</h1>
        <span>Please fill out the form below to contact</span>
        <div className="mt-5 flex flex-col items-center justify-center mx-6">
          <form onSubmit = {handleSubmit(onSubmit)} //</div>action="https://getform.io/f/qblokrxa" method="POST" 
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h1 className="my-4 text-xl font-semibold mb-4">
              Send Your Message
            </h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Name:-</label>
              <input {...register("name", { required: true })}
                className="shadow rounded-lg text-gray-500 py-2 px-3"
                type="text"
                name="name"
                placeholder="Enter your Name" 
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email:-</label>
              <input {...register("email", { required: true })}
                className="shadow rounded-lg text-gray-500 py-2 px-3"
                type="email"
                name="email"
                placeholder="Enter your Email" 
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message:-</label>
              <input {...register("message", { required: true })}
                className="shadow rounded-lg text-gray-500 py-2 px-3"
                type="text"
                name="message"
                placeholder="Enter your Message here"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button className = "bg-black text-white rounded m-2 p-2 hover:bg-slate-700 duration-300">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default contact;
