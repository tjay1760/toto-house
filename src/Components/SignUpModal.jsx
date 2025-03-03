import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const SignUpModal = ({ setShowSignup }) => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send('contact_service', 'contact_form', {
        from_name: formState.name,
        to_name: 'Winne',
        from_email: formState.email,
        to_email: 'totohousehq@gmail.com',
      }, 'V_rUdmFvOuC8bQqTW')
      .then(
        () => {
          setLoading(false);
          alert('Thank you, I will get back to you soon!');
          setFormState({
            name: '',
            email: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Message not sent: Something went wrong");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 mb-2 border border-gray-300 rounded"
            onChange={handleChange}
          />
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-lg">
            Submit
          </button>
          <button
            className="w-full mt-2 text-gray-700 hover:text-gray-900"
            onClick={() => setShowSignup(false)}
          >
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpModal;