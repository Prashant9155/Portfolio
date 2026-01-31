import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
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
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-8 text-center">
        <CheckCircle className="mx-auto mb-4 h-10 w-10 text-green-600 dark:text-green-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Message sent successfully
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Thanks for reaching out. I’ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 space-y-5"
    >
      {["name", "email", "subject"].map((field) => (
        <input
          key={field}
          name={field}
          type={field === "email" ? "email" : "text"}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border dark:bg-neutral-900 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500"
        />
      ))}

      <textarea
        name="message"
        rows={5}
        placeholder="Tell me about your project or opportunity"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border dark:bg-neutral-900 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500 resize-none"
      />

      <button
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending…
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>

      {status && status !== "success" && (
        <p className="text-sm text-red-600 text-center">{status}</p>
      )}
    </form>
  );
}
