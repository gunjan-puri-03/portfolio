import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      const response = await axios.post(
        "https://portfolio-backend-tunn.onrender.com",
        formData
      );

      setSuccess(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSuccess("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-800 text-white"
    >
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-4">
          Have a project or opportunity? Feel free to reach out.
        </p>

        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-10"></div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-700"
        >

          <div className="mb-6">
            <label className="block mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full
                p-3
                rounded-lg
                bg-slate-700
                border
                border-slate-600
                focus:outline-none
                focus:border-blue-500
                transition
              "
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full
                p-3
                rounded-lg
                bg-slate-700
                border
                border-slate-600
                focus:outline-none
                focus:border-blue-500
                transition
              "
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="
                w-full
                p-3
                rounded-lg
                bg-slate-700
                border
                border-slate-600
                focus:outline-none
                focus:border-blue-500
                transition
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              py-3
              rounded-lg
              font-semibold
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p
              className={`text-center mt-4 ${
                success.includes("Failed")
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {success}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}

export default Contact;