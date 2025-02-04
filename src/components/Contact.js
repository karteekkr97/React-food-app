const Contact = () => {
    return (
        <div className="max-w-4xl mt-10 mx-auto p-6 md:p-12 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                Contact Us
            </h1>
            <p className="text-center text-lg text-gray-600 mb-6">
                Have questions, feedback, or need assistance? Reach out to us!  
                We’re here to help with your food orders, app issues, and more.
            </p>

            <form className="flex flex-col items-center space-y-4">
                <input 
                    type="text" 
                    className="border border-gray-300 p-3 w-full md:w-96 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" 
                    placeholder="Your Name" 
                />
                <input 
                    type="email" 
                    className="border border-gray-300 p-3 w-full md:w-96 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" 
                    placeholder="Your Email" 
                />
                <textarea 
                    className="border border-gray-300 p-3 w-full md:w-96 h-32 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" 
                    placeholder="Your Message"
                ></textarea>
                <button 
                    className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-all w-full md:w-96"
                >
                    Send Message 🚀
                </button>
            </form>

            <div className="mt-8 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">📞 Customer Support</h2>
                <p className="text-gray-600">Email: <a href="mailto:support@quickbite.com" className="text-red-500">support@quickbite.com</a></p>
                <p className="text-gray-600">Phone: <a href="tel:+919876543210" className="text-red-500">+91 98765 43210</a></p>
                <p className="text-gray-600">Hours: 9 AM - 11 PM (IST), Monday to Sunday</p>
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">📍 Visit Our Office</h2>
                <p className="text-gray-600">QuickBite HQ</p>
                <p className="text-gray-600">123 Food Street, Bangalore, India</p>
            </div>
        </div>
    );
};

export default Contact;
