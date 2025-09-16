import React, { useEffect, useState } from "react";

const AdminClimate = () => {
    const [climates, setClimates] = useState([]);
    const [loading, setLoading] = useState(true);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // ดึงค่าจาก .env
    const API_URL = import.meta.env.VITE_API_BASE_URL;
    const TOKEN = import.meta.env.VITE_API_TOKEN;

    const cities = [
        "Bangkok",
        "Amnat Charoen",
        "Ang Thong",
        "Bueng Kan",
        "Buri Ram",
        "Chachoengsao",
        "Chai Nat",
        "Chaiyaphum",
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await Promise.all(
                    cities.map(async (city) => {
                        const res = await fetch(`${API_URL}/api/climate?city=${city}`, {
                            headers: { Authorization: TOKEN },
                        });
                        return res.json();
                    })
                );
                setClimates(results);
            } catch (err) {
                console.error("Error fetching climate data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // pagination slice
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentClimates = climates.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(climates.length / itemsPerPage);

    // helper function สำหรับเลือก emoji ตามสภาพอากาศ
    const getWeatherEmoji = (weather) => {
        if (!weather) return "❓";
        const w = weather.toLowerCase();
        if (w.includes("clear")) return "☀️";
        if (w.includes("cloud")) return "☁️";
        if (w.includes("rain")) return "🌧️";
        if (w.includes("storm") || w.includes("thunder")) return "⛈️";
        if (w.includes("snow")) return "❄️";
        if (w.includes("mist") || w.includes("fog")) return "🌫️";
        return "🌍"; // fallback
    };

    if (loading)
        return (
            <div className="flex justify-center items-center min-h-screen text-white">
                กำลังโหลดข้อมูล...
            </div>
        );

    return (
        <div className="min-h-screen bg-gray-900 p-6 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">
                🌤 Climate Dashboard
            </h1>

            {/* card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentClimates.map((c, i) => (
                    <div
                        key={i}
                        className="relative bg-gray-800/80 rounded-lg shadow-lg p-4 border border-gray-700 hover:opacity-100 opacity-90 transition"
                    >
                        {/* emoji มุมขวาบน */}
                        <span className="absolute top-2 right-2 text-2xl bg-gray-700/50 rounded-full px-2 py-1">
                            {getWeatherEmoji(c.data?.weather)}
                        </span>

                        <h2 className="text-xl font-semibold mb-2">
                            {c.data?.city || "Unknown"}
                        </h2>
                        <p>🌡 Temp: {c.data?.temp} °C</p>
                        <p>💧 Humidity: {c.data?.humidity}%</p>
                        <p>☁ Weather: {c.data?.weather}</p>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div className="flex justify-center items-center mt-6 space-x-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-red-400 text-white rounded disabled:opacity-50"
                >
                    Previous
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-2 py-1 rounded ${currentPage === i + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-600 text-gray-200 hover:bg-blue-400"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-red-400 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AdminClimate;
