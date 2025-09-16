import React from "react";
const API_URL = import.meta.env.VITE_API_BASE_URL;
const TOKEN = import.meta.env.VITE_API_TOKEN;


const Laundry = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Laundry Service</h2>
      <p>ที่นี่จะเป็นหน้าดู/จัดการ Laundry</p>
    </div>
  );
};

export default Laundry;
