import React from "react";
const API_URL = import.meta.env.VITE_API_BASE_URL;
const TOKEN = import.meta.env.VITE_API_TOKEN;


const Climate = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Climate Data</h2>
      <p>ที่นี่จะเป็นหน้าดูข้อมูล Climate</p>
    </div>
  );
};

export default Climate;
