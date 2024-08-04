import { useState, useEffect, useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const useFetchWelcome = () => {
  const { fetchUserWelcome, isLoggedIn } = useContext(AppContext);
  const [welcomeData, setWelcomeData] = useState("");
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchUserWelcome();

        if (data && data.message) {
          setWelcomeData(data.message);
        } else {
          console.error("Invalid response format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading();
      }
    };

    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn, fetchUserWelcome]);

  return { welcomeData, isLoading };
};

export default useFetchWelcome;
