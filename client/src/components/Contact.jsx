import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_436o63g', 'template_mz69ivo', form.current, {
          publicKey: 'efKP4QjrHW-A9j0yK',
        })
        .then(
          () => {
            alert('SUCCESS')
            console.log('SUCCESS!');
          },
          (error) => {
            alert("FAILED")
            console.log('FAILED...', error.text);
          },
        );
    };


    return (
        <div id={"Contact"}className="min-h-screen min-w-screen bg-base-300">
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form ref={form} onSubmit={sendEmail}>
                        <h1 className="mb-10 text-center text-5xl font-bold">Email Me</h1>
                        <div className="mb-5">
                            <label
                            for="user_name"
                            className="mb-3 block text-base font-medium "
                            >
                            Full Name
                            </label>
                            <input
                            type="text"
                            name="user_name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-neutral focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                            for="user_email"
                            className="mb-3 block text-base font-medium "
                            >
                            Email Address
                            </label>
                            <input
                            type="email"
                            name="user_email"
                            id="email"
                            placeholder="example@domain.com"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-neutral focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                            for="message"
                            className="mb-3 block text-base font-medium "
                            >
                            Message
                            </label>
                            <textarea
                            rows="4"
                            name="message"
                            id="message"
                            placeholder="Type your message"
                            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-neutral focus:shadow-md"
                            ></textarea>
                        </div>
                        <div className = "flex justify-center">
                            {/* <button className="hover:shadow-form rounded-md btn btn-primary py-3 px-8 text-base font-semibold outline-none">
                            Submit
                            </button> */}
                            <input className = "hover:shadow-form rounded-md btn btn-primary py-3 px-8 text-base font-semibold outline-none"
                        type={"submit"} value="Send"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Contact