import React from 'react';
import '../styles/FormComponent.css';
import { useState } from 'react';

const FormComponent = () => {

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };


    return (
      <form className="flex flex-col p-5 border border-gray-300 rounded-lg shadow-md bg-gray-50">
          <div className="relative mb-6">
              <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
              />
              <label className={`absolute left-3 top-3 transition-all transform ${formData.name ? '-translate-y-4 scale-75' : 'scale-100'} origin-top-left pointer-events-none text-gray-500`}>
                  För- och efternamn:
              </label>
          </div>
          <div className="relative mb-6">
              <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
              <label className={`absolute left-3 top-3 transition-all transform ${formData.email ? '-translate-y-4 scale-75' : 'scale-100'} origin-top-left pointer-events-none text-gray-500`}>
                  E-post:
              </label>
          </div>
          <div className="relative mb-6">
              <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  required
              />
              <label className={`absolute left-3 top-3 transition-all transform ${formData.phone ? '-translate-y-4 scale-75' : 'scale-100'} origin-top-left pointer-events-none text-gray-500`}>
                  Telefonnummer:
              </label>
          </div>
          <div className="relative mb-6">
              <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 resize-none"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  required
              />
              <label className={`absolute left-3 top-3 transition-all transform ${formData.message ? '-translate-y-4 scale-75' : 'scale-100'} origin-top-left pointer-events-none text-gray-500`}>
                  Ditt meddelande...
              </label>
          </div>
          <button
              type="submit"
              className="p-3 bg-blue-800 text-white rounded hover:bg-blue-600 transition duration-300"
          >
              Skicka
          </button>
      </form>
  );
}

export default FormComponent;