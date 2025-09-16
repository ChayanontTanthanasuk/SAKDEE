import React from "react";
const API_URL = import.meta.env.VITE_API_BASE_URL;
const TOKEN = import.meta.env.VITE_API_TOKEN;


const News = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">News Management</h2>
      <p>ที่นี่จะเป็นหน้าจัดการข่าว</p>
    </div>
  );
};

export default News;
