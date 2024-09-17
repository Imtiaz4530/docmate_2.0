import { useState } from "react";
import { useStoreActions } from "easy-peasy";
import toast from "react-hot-toast";

import axiosInstance from "../../api/axiosInstance";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const setUser = useStoreActions((actions) => actions.user.setUser);
  const login = async (data, reset) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/api/auth/login", data);

      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);

      reset();
    } catch (e) {
      if (e.response) {
        const errorMessage =
          e.response.data?.message ||
          e.response.data?.error ||
          e.response.statusText ||
          "An error occurred";

        toast.error(`Error: ${e.response.status} - ${errorMessage}`);
        console.log(`Error: ${e.response.status} - ${errorMessage}`);
      } else if (e.request) {
        toast.error("No response from server. Please try again later.");
        console.log("No response from server. Please try again later.");
      } else {
        toast.error(`Error: ${e.message}`);
        console.log(`Error: ${e.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
