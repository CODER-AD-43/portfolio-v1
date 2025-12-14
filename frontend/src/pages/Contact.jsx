import { useState } from "react";
import SkeletonGrid from "../components/SkeletonGrid";


function Contact() {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message");
      }
    } catch {
      setStatus("Server error");
    }
  }

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>
        <p>{status}</p>
      </form>
    </section>
  );
}

export default Contact;


// import { useEffect, useState } from "react";
// import SkeletonGrid from "../components/SkeletonGrid";

// function Contact() {
//   const [loading, setLoading] = useState(true);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [status, setStatus] = useState("");

//   // 🔹 skeleton loader (UI only)
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 800);
//     return () => clearTimeout(timer);
//   }, []);

//   // 🔹 input handler
//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   // 🔹 submit handler (YOUR EXISTING API)
//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       });

//       const data = await res.json();

//       if (data.success) {
//         setStatus("Message sent successfully");
//         setForm({ name: "", email: "", message: "" });
//       } else {
//         setStatus("Failed to send message");
//       }
//     } catch (err) {
//       setStatus("Server error");
//     }
//   }

//   // 🔹 skeleton view
//   if (loading) {
//     return (
//       <section className="contact fade-up">
//         <SkeletonGrid count={4} />
//       </section>
//     );
//   }

//   // 🔹 SAME CONTACT DESIGN (UNCHANGED)
//   return (
//     <section className="contact fade-up">
//       <h2>Contact Me</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="email"
//           type="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Send</button>
//         <p>{status}</p>
//       </form>
//     </section>
//   );
// }

// export default Contact;
