import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Apple() {
  const [newsData, setNewsData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=apple&from=2023-08-30&to=2023-08-30&sortBy=popularity&apiKey=8f7f9ea97b4442039c85506018a442aa"
    );
    console.log(response.data.articles);
    const filteredNewsData = response.data.articles.filter(
      (item) =>
        item.author !== null && item.title !== null && item.content !== null
    );
    setNewsData(filteredNewsData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mx-auto py-8">
      {newsData.map((item) => (
        <div
          key={item.title}
          className="bg-white shadow-lg rounded-lg p-6 mb-4"
        >
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-2">Author: {item.author}</p>
          <p className="text-gray-700">{item.content}</p>
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={() => window.open(item.source.url)}
          >
            {item.source.title}
          </button>

          {item.source.urlToImage && (
            <img
              className="mt-4 h-48 w-full rounded"
              src={item.source.urlToImage}
              alt="News"
            />
          )}
        </div>
      ))}
    </div>
  );
}
