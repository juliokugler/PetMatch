import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "./useAuthentication";

const useLogin = () => {
  const { login } = useAuthentication();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError("");

    try {
      const user = {
        email,
        password,
      };

      await login(user);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleLogin };
};

export default useLogin;
