import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }

    componentDidMount() {
        console.log("Parent didMount");
    }

    componentDidUpdate() {
        console.log("Parent didUpdate");
    }

    componentWillUnmount() {
        console.log("Parent willUnmount");
    }

    render() {
        console.log("parent render");
        return (
            <div className="container mx-auto p-4 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">About Us</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
                    Welcome to QuickBite - Your Favorite Food Delivery App
                </h2>
                <p className="text-base md:text-lg text-gray-700 text-center md:text-left mb-6">
                    QuickBite is your go-to food delivery service that connects you with the best restaurants in your city. 
                    We offer a wide variety of cuisines, fast delivery, and an easy-to-use interface to make ordering food a seamless experience.
                </p>

                <h3 className="text-lg md:text-xl font-semibold mt-6">Why Choose Us?</h3>
                <ul className="list-disc ml-6 md:ml-8 text-gray-700">
                    <li>🚀 <strong>Fast and reliable</strong> food delivery</li>
                    <li>🍽️ <strong>Wide range</strong> of restaurants and cuisines</li>
                    <li>💳 <strong>Secure</strong> and multiple payment options</li>
                    <li>🌟 <strong>Real-time order tracking</strong></li>
                    <li>🎁 <strong>Exciting deals</strong> and discounts</li>
                </ul>

                <h3 className="text-lg md:text-xl font-semibold mt-6">Service Locations:</h3>
                <p className="text-gray-700">We currently operate in major cities, including:</p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 list-disc ml-6 md:ml-8 text-gray-700">
                    <li>Bangalore</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Chennai</li>
                    <li>Hyderabad</li>
                </ul>

                <h3 className="text-lg md:text-xl font-semibold mt-6">Join Us</h3>
                <p className="text-gray-700 mb-6">
                    Whether you're a foodie looking for your favorite dish or a restaurant looking to expand your reach, QuickBite is here for you.
                    Download the app now and enjoy delicious meals delivered straight to your door!
                </p>

                <div className="flex justify-center">
                    <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-all">
                        Download App
                    </button>
                </div>
            </div>
        );
    }
}

export default About;
