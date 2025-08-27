import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/search?query=${search}`);
    const data = await res.json();
    setResults(data.items || []);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>YouTube Dashboard</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색어 입력"
      />
      <button onClick={handleSearch}>검색</button>
      <ul>
        {results.map((item, idx) => (
          <li key={idx}>
            <img src={item.thumbnail} width="120" alt="thumbnail" />
            <p>{item.title}</p>
            <p>{item.channelTitle} | 조회수: {item.viewCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
