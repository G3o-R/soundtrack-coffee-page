import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [spaceData, setSpaceData] = useState({});
  const [adminData, setAdminData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/me-tenant", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 401) {
            return null;
          }
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setAdminData(data);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });

    fetch("http://127.0.0.1:3000/spaces/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data fetched successfully:", data.name);
        setSpaceData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Context.Provider value={{ spaceData, adminData, isLoading }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
