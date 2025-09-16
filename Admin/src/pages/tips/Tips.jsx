import React from "react";
const API_URL = import.meta.env.VITE_API_BASE_URL;
const TOKEN = import.meta.env.VITE_API_TOKEN;


const Tips = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Tips & Tricks</h2>
      <p>ที่นี่จะเป็นหน้าจัดการ Tips</p>
    </div>
  );
};

export default Tips;
