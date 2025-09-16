import React from "react";
const API_URL = import.meta.env.VITE_API_BASE_URL;
const TOKEN = import.meta.env.VITE_API_TOKEN;

const Users = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <p>ที่นี่จะแสดงตาราง User หรือ CRUD user ได้</p>
    </div>
  );
};

export default Users;
