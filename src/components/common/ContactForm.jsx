import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border dark:bg-neutral-900"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border dark:bg-neutral-900"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border dark:bg-neutral-900"
      />

      <button
        disabled={loading}
        className="px-6 py-3 rounded-lg bg-blue-600 text-white"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
      {status && status !== "success" && (
        <p className="text-red-600">{status}</p>
      )}
    </form>
  );
}
