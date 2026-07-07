import React from 'react';

const FruitList = ({ fruits }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-6 w-80">
                <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
                    🍎 Fruit List
                </h2>

                <ul className="space-y-3">
                    {fruits.map((fruit, index) => (
                        <li
                            key={index}
                            className="bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-sm hover:bg-green-200 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            {fruit}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FruitList;