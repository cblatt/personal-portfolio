'use client'

import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm: React.FC = () => {
    const [loading, setLoading] = useState(false);

    function smoothScrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
   
    async function handleSubmit(event:any){
        event.preventDefault();
        
        setLoading(true);

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value)
        }
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        if(response.ok){
            smoothScrollToTop();
            console.log("Message Sent")
            setLoading(false);

            toast.success("Thanks for reaching out! 🤝", {
				position: "top-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});

            
            
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.message.value = "";
        }else{
            console.log(response)
            console.log("Message Failed")
            setLoading(false);
        }
    }


	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<div className="w-full flex justify-center">
				<form onSubmit={handleSubmit}>
					<div className="w-full flex flex-col my-5">
						<label className="font-bold text-gray-800" htmlFor="name">
							Name
						</label>
						<input
							type="text"
							minLength={3}
							maxLength={150}
							required
							className="input input-bordered w-96"
							autoComplete="off"
							id="name"
						/>
					</div>
					<div className="w-full flex flex-col my-5">
						<label className="font-bold text-gray-800" htmlFor="email">
							Email
						</label>
						<input
							type="email"
							minLength={5}
							maxLength={150}
							required
							className="input input-bordered w-96"
							autoComplete="off"
							id="email"
						/>
					</div>
					<div className="w-full flex flex-col my-5">
						<label className="font-bold text-gray-800" htmlFor="message">
							Message
						</label>
						<textarea
							rows={6}
							required
							minLength={10}
							maxLength={500}
							name="message"
							className="input input-bordered w-96 h-36"
						/>
					</div>
					<div className="flex justify-center">
						<button
							type="submit"
							disabled={loading}
							className="btn btn-info px-4 py-2 w-40 hover:-translate-y-1 disabled:btn disabled:text-gray-100 text-white font-medium mt-4">
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
