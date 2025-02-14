import React from "react";
import cancerCell from "../images/cancer-cell.jpg"; // Correct the import statement

const Home = () => {
  return (
    <div className="flex justify-center items-start mt-10">
      <div className="text-left mr-8 w-1/2 pl-6">
        <h1 className="text-3xl font-bold" style={{ color: '#F38181' }}>Welcome to Cancer AI Detection</h1>
        <p className="mt-4" style={{ color: '#F38181' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam, vel, doloribus deserunt libero ipsum itaque quia fuga maiores impedit officiis ipsa cupiditate rerum iusto doloremque sed alias atque maxime neque eum? Minus quod sit esse illo pariatur. Unde aspernatur eaque doloremque architecto minus eveniet?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab odit eveniet maiores sunt dignissimos explicabo quam accusamus temporibus perferendis. Tenetur ducimus eum neque.
        </p>
        <p className="mt-4" style={{ color: '#F38181' }}>
          This website helps detect cancer using AI technology.
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
      </div>
      <div className="w-1/2 pr-6">
        <img src={cancerCell} alt="Medical Illustration" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Home;
