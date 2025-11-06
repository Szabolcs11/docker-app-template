import { useEffect, useState } from "react";
import { API_URL } from "./consts";

function App() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetchUptime = async () => {
      try {
        const res = await fetch(API_URL + "api/uptime");
        const data = await res.json();
        console.log("API Uptime:", data);
        setResponse(data);
      } catch (error) {
        console.error("Error fetching API uptime:", error);
      }
    };

    fetchUptime();
  }, []);

  return (
    <div>
      <p>
        <strong>API Response:</strong>
      </p>
      <pre>{response ? JSON.stringify(response) : "Loading..."}</pre>
    </div>
  );
}

export default App;
