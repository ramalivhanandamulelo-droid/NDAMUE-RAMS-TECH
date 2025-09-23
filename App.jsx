
- This is a single-file UI for quick iteration. For a real site split into components and add routing, CMS for blog, and production AI integration.
*/

import React, { useState, useEffect, useRef } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-sky-100 text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <AIWidget />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between py-6 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-lg">&lt;/&gt;</div>
        <div>
          <div className="font-bold text-lg">NDAMUE RAMS TECH</div>
          <div className="text-sm text-slate-500">Web & Software Solutions • AI-driven</div>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 text-slate-700">
        <a href="#services" className="hover:underline">Services</a>
        <a href="#portfolio" className="hover:underline">Portfolio</a>
        <a href="#blog" className="hover:underline">Blog</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <div className="md:hidden text-slate-600">Menu</div>
    </header>
  );
}

function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
          Modern Web Design & Custom Software — <span className="text-sky-600">Built for growth</span>
        </h1>
        <p className="mt-6 text-lg text-slate-700 max-w-xl">
          I design and build fast, reliable websites and apps that showcase your brand and convert visitors into customers.
          From e-commerce to internal tools and AI-powered experiences — you name it, I build it.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#contact" className="px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold shadow">Get a quote</a>
          <a href="#portfolio" className="px-6 py-3 rounded-xl border border-slate-200 text-slate-800">See portfolio</a>
        </div>
        <div className="mt-8 flex gap-6 items-center text-sm text-slate-600">
          <div>
            <div className="font-semibold">Services</div>
            <div>Web • Mobile • Desktop • E‑Commerce • Hosting</div>
          </div>
          <div>
            <div className="font-semibold">Location</div>
            <div>South Africa (Remote Worldwide)</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow grid grid-cols-1 gap-4">
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="text-slate-700 font-medium">Tech highlights</div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>Tailwind CSS</li>
            <li>Databases: PostgreSQL / MongoDB</li>
            <li>OpenAI & LLMs</li>
            <li>Stripe Payments</li>
          </ul>
        </div>
        <div className="p-4 bg-gradient-to-r from-sky-50 to-white rounded-lg">
          <div className="text-sm text-slate-600">AI assistant</div>
          <div className="mt-2 font-semibold">Ask me anything — examples:</div>
          <ul className="mt-2 text-sm text-slate-600">
            <li>"How much to build an e-commerce site?"</li>
            <li>"Can you create a blog post about web security?"</li>
            <li>"Help me pick a tech stack for my startup."</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { title: "Custom Web Design & Development", desc: "Responsive, SEO-friendly websites tailored to your brand." },
    { title: "Mobile & Desktop Apps", desc: "Cross-platform apps with great UX and performance." },
    { title: "E‑Commerce Solutions", desc: "Payments, catalogs, and conversion-focused stores." },
    { title: "Secure Hosting & Maintenance", desc: "Managed hosting, backups, and uptime monitoring." },
    { title: "AI & Automation", desc: "Smart assistants, automation, and data tools to speed your business." },
  ];

  return (
    <section id="services" className="py-12">
      <h2 className="text-2xl font-bold">Our Services</h2>
      <p className="mt-2 text-slate-600 max-w-xl">Full-stack development and consulting for businesses of all sizes.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.title} className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="font-semibold">{it.title}</div>
            <div className="mt-2 text-sm text-slate-600">{it.desc}</div>
            <div className="mt-4">
              <a href="#contact" className="text-sky-600 font-medium">Request this service →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    { name: "Retail e‑shop", tags: ["E‑Commerce", "Stripe"], desc: "High-conversion online store for fashion brand." },
    { name: "Internal CRM", tags: ["SaaS", "Node.js"], desc: "Custom CRM and reporting tools for operations." },
    { name: "Marketing site", tags: ["Static", "SEO"], desc: "Fast, accessible sites for product launches." },
  ];
  return (
    <section id="portfolio" className="py-12">
      <h2 className="text-2xl font-bold">Portfolio</h2>
      <p className="mt-2 text-slate-600 max-w-xl">Selected projects — real results, measurable growth.</p>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.name} className="p-4 bg-white rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-slate-500">{p.tags.join(' • ')}</div>
            </div>
            <div className="mt-2 text-sm text-slate-600">{p.desc}</div>
            <div className="mt-4">
              <a className="text-sky-600 font-medium" href="#contact">Let's build something like this →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Blog() {
  const posts = [
    { title: "Top 7 Web Performance Tips", excerpt: "Speed matters — here's how to improve load times and UX." },
    { title: "How to Secure Your Node.js App", excerpt: "Practical steps to keep your app safe from common attacks." },
  ];
  return (
    <section id="blog" className="py-12">
      <h2 className="text-2xl font-bold">Blog</h2>
      <p className="mt-2 text-slate-600 max-w-xl">Articles about web development, security, AI, and running a digital business.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {posts.map((p) => (
          <article key={p.title} className="p-4 bg-white rounded-xl shadow">
            <div className="font-semibold">{p.title}</div>
            <div className="mt-2 text-sm text-slate-600">{p.excerpt}</div>
            <div className="mt-4">
              <a href="#" className="text-sky-600 font-medium">Read more →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6 items-start">
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="font-semibold">NDAMUE RAMS TECH</div>
          <div className="mt-2 text-sm text-slate-600">Email: ramalivhanandamulelo@gmail.com</div>
          <div className="mt-1 text-sm text-slate-600">Phone / WhatsApp: 060 948 6195</div>
          <div className="mt-1 text-sm text-slate-600">Website: http://6bbf1b3fd8bf.site123.me</div>
          <div className="mt-4">
            <a href="mailto:ramalivhanandamulelo@gmail.com" className="inline-block px-4 py-2 rounded-lg border">Email me</a>
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <form className="grid gap-3">
            <input className="border p-3 rounded" placeholder="Your name" />
            <input className="border p-3 rounded" placeholder="Your email" />
            <textarea className="border p-3 rounded" rows={4} placeholder="How can I help?" />
            <div className="flex gap-3">
              <button type="button" className="px-4 py-2 rounded bg-sky-600 text-white font-semibold">Send message</button>
              <button type="button" className="px-4 py-2 rounded border">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-12 bg-sky-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} NDAMUE RAMS TECH — Built with care</div>
        <div className="text-sm opacity-90">Designed for performance & accessibility</div>
      </div>
    </footer>
  );
}

/*
  AIWidget: Front-end chat interface. Simple, floating, and connects to /api/ai
  - The front-end keeps a local chat history visible to the user.
  - The server endpoint should accept { message } and return { reply }.
*/
function AIWidget() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm the NDAMUE AI assistant. Ask me about services, pricing, or tech recommendations." },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage() {
    if (!input.trim()) return;
    const text = input.trim();
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setLoading(true);
    try {
      // Front-end sends to your serverless function; implement server to call OpenAI or other LLM.
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const reply = data?.reply || "Sorry, I couldn't get a reply right now.";
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    } catch (err) {
      setMessages((m) => [...m, { from: "bot", text: "Network error: please try again later." }]);
    } finally {
      setLoading(false);
      setOpen(true);
    }
  }

  return (
    <div>
      <div className="fixed right-6 bottom-6">
        <div className="flex flex-col items-end">
          {open && (
            <div className="w-80 md:w-96 p-3 rounded-xl bg-white shadow-lg mb-3">
              <div className="text-sm text-slate-600 font-semibold">NDAMUE AI assistant</div>
              <div className="mt-2 max-h-64 overflow-auto text-sm space-y-2">
                {messages.map((m, i) => (
                  <div key={i} className={m.from === 'user' ? 'text-right' : ''}>
                    <div className={`inline-block p-2 rounded-lg ${m.from === 'user' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
              <div className="mt-2 flex gap-2">
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e)=>{ if(e.key==='Enter') sendMessage(); }} placeholder="Ask anything..." className="flex-1 border p-2 rounded" />
                <button onClick={sendMessage} disabled={loading} className="px-3 py-2 rounded bg-sky-600 text-white">{loading? '...' : 'Send'}</button>
              </div>
            </div>
          )}

          <button onClick={()=> setOpen(!open)} className="w-14 h-14 rounded-full bg-sky-600 shadow-lg flex items-center justify-center text-white font-bold">AI</button>
        </div>
      </div>
    </div>
  );
}

/*
Example Node / Express serverless endpoint (save as server.js or an API route)

const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/api/ai', async (req, res) => {
  const { message } = req.body;
  if(!message) return res.status(400).json({ error: 'No message' });

  // Replace with your OpenAI call or other LLM provider.
  // IMPORTANT: keep your API key on the server. Do NOT put it in front-end code.

  try {
    const apiKey = process.env.OPENAI_API_KEY; // set this on your server
    const prompt = `You are a helpful assistant for NDAMUE RAMS TECH. User: ${message}`;

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model: 'gpt-4o-mini', messages:[{role:'system',content:'You are NDAMUE RAMS TECH assistant.'},{role:'user',content:prompt}], max_tokens: 500 }),
    });
    const j = await r.json();
    const reply = j?.choices?.[0]?.message?.content || 'Sorry, no reply.';
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: 'Server error' });
  }
});

app.listen(3000, ()=> console.log('Server running on :3000'))
