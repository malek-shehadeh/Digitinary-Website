

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AuthForm.scss";

interface AuthFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);

      localStorage.setItem("userEmail", formData.email);

      navigate("/");

      toast.success(`Welcome back, ${formData.email.split("@")[0]}!`, {
        style: { backgroundColor: "#fff", color: "#193db0" },
      });
      console.log("Toast triggered"); 

      onClose();
    }, 1000);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal" onClick={handleBackgroundClick}>
      <div className="auth-modal__content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="auth-modal__close-button">
          <svg
            className="auth-modal__close-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <form onSubmit={handleSubmit} className="auth-form">
          <h2 className="auth-form__title">Login</h2>

          <div className="auth-form__inputs">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="auth-form__input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="auth-form__input"
            />

            <button
              type="submit"
              disabled={loading}
              className="auth-form__submit-button"
            >
              <span className="auth-form__submit-text">
                {loading ? "Loading..." : "Login"}
              </span>
              <div className="auth-form__submit-overlay"></div>
            </button>

            {error && <p className="auth-form__error">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;