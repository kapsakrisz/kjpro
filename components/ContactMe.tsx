import React from 'react';
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid"
import {useForm,SubmitHandler} from "react-hook-form";

type Inputs = {
    name:string;
    email:string;
    subject:string;
    message:string;
}


type Props ={}

function ContactMe({}:Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:kj_painting_decorating@gmail.com.         ?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }


    return (
        <div className="flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-3xl px-2 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
                contact
            </h3>
            <div className="flex flex-col space-y-8">
                <h4 className="text-1xl font-semibold text-center">
                    I have got what you need.{""}
                    <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
                    </h4>

                    <div className="space-y-10">
                        <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">07879210673        </p>
                        </div>

                        <div className="flex items-center space-x-1 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse"/>
                    <p className="text-1xl">kj_painting_decorating@gmail.com         </p>
                        </div>

                        <div className="flex items-center space-x-1 justify-center">
                    <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl"></p>
                        </div>
                    </div>
                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-4 ml-10">
                        <div className="flex ml-0">
                            <input {...register('name')} placeholder="   Name" className="contactInput" type="text"/>
                            <input {...register('email')} placeholder="Email" className="contactInput" type="email"/>
                        </div>
                        <input {...register('subject')} className="contactInput" type="text"/>
                        <textarea {...register('message')} placeholder="   Message" className="contactInput"/>
                        <button 
                        type="submit"
                        className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">submit</button>

                    </form>


                    </div>

        </div>
    );
}
export default ContactMe