<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NDAMUE RAMS TECH — Web & Software Solutions</title>
<meta name="description" content="NDAMUE RAMS TECH provides modern websites, software, and tech solutions. Creative, clean, and professional services for your digital needs.">
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<style>
  /* ---------- Root & Colors ---------- */
  :root {
    --primary: #0B64A0;
    --secondary: #18A558;
    --dark: #0A2B3A;
    --light: #F7FAFC;
    --muted: #6b7280;
    --radius: 12px;
    --max-width: 1200px;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; background:var(--light); color:var(--dark); overflow-x:hidden;}
  a{text-decoration:none;color:inherit;}
  img{max-width:100%;display:block;}

  /* ---------- Layout ---------- */
  .wrap{max-width:var(--max-width);margin:0 auto;padding:20px;position:relative; z-index:2;}
  header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:20px 0;position:relative; z-index:2;}
  .brand{display:flex;align-items:center;gap:12px;}
  .logo{width:50px;height:50px;background:linear-gradient(135deg,var(--primary),var(--secondary));border-radius:10px;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:20px}
  nav a{margin-left:16px;font-weight:600;color:var(--dark);}
  
  /* ---------- Hero ---------- */
  .hero{display:flex;flex-direction:column;align-items:center;text-align:center;padding:60px 20px;background:rgba(255,255,255,0.85);border-radius:var(--radius);margin-bottom:40px;backdrop-filter: blur(10px); animation: fadeInUp 1s ease forwards; opacity:0;}
  .hero h1{font-size:36px;margin-bottom:16px;}
  .hero p{font-size:18px;color:var(--muted);margin-bottom:24px;}
  .btn-primary{padding:12px 24px;background:var(--primary);color:white;border-radius:10px;font-weight:700;transition:transform 0.2s;}
  .btn-primary:hover{transform:scale(1.05);}
  
  /* ---------- Services ---------- */
  .services{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-bottom:40px;}
  .card{background:white;padding:20px;border-radius:var(--radius);box-shadow:0 6px 20px rgba(0,0,0,0.05);transition:transform 0.3s, opacity 1s; opacity:0; transform:translateY(30px);}
  .card img{width:60px;margin-bottom:12px;}
  .card h3{margin-bottom:8px;color:var(--primary);}
  .card p{color:var(--muted);}
  .card.visible{opacity:1; transform:translateY(0);}
  
  /* ---------- Footer ---------- */
  footer{background:var(--dark);color:white;text-align:center;padding:20px 0;margin-top:40px;position:relative; z-index:2;}
  footer a{color:var(--secondary);}

  /* ---------- Code Background ---------- */
  #code-bg{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1;
    pointer-events:none;
  }

  /* ---------- Scroll Animations ---------- */
  @keyframes fadeInUp {
    from{opacity:0; transform:translateY(30px);}
    to{opacity:1; transform:translateY(0);}
  }

  /* ---------- AI Floating Button ---------- */
  #chatButton {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg,#0B64A0,#18A558);
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 9999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    animation: pulse 2s infinite;
  }
  #chatBox {
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 350px;
    height: 500px;
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 9998;
    display: none;
  }
  @keyframes pulse {
    0% { transform: scale(1);}
    50% { transform: scale(1.1);}
    100% { transform: scale(1);}
  }
</style>
</head>
<body>
  <!-- Background Code Canvas -->
  <canvas id="code-bg"></canvas>

  <div class="wrap">
    <!-- Header -->
    <header>
      <div class="brand">
        <div class="logo">NR</div>
        <div class="site-title">
          <h1>NDAMUE RAMS TECH</h1>
          <p>Web & Software Solutions</p>
        </div>
      </div>
      <nav>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <h1>Modern Websites & Custom Software</h1>
      <p>We build sleek websites, powerful software, and creative tech solutions tailored to your needs.</p>
      <a href="#contact" class="btn-primary">Get in Touch</a>
    </section>

    <!-- Services Section -->
    <section id="services">
      <h2 style="text-align:center;margin-bottom:24px;">Our Services</h2>
      <div class="services">
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Website Icon">
          <h3>Custom Websites</h3>
          <p>Responsive, modern, and SEO-friendly websites that look amazing on all devices.</p>
        </div>
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/1033/1033219.png" alt="Software Icon">
          <h3>Software Development</h3>
          <p>Custom desktop or mobile software solutions to automate and simplify your business.</p>
        </div>
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="UI Icon">
          <h3>UI/UX Design</h3>
          <p>Beautiful, intuitive interfaces that provide a seamless experience for your users.</p>
        </div>
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Coding Icon">
          <h3>Tech Consulting</h3>
          <p>Expert advice on web and software technologies to grow your business efficiently.</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" style="text-align:center;margin-bottom:40px;">
      <h2>Contact Us</h2>
      <p style="margin-bottom:16px;">Have a project in mind? Let’s create something amazing together!</p>
      <p>Email: <a href="mailto:ndamueramstech@gmail.com">ndamueramstech@gmail.com</a></p>
      <p>Phone: <a href="tel:+276726701542">+27 72 670 1542</a>, <a href="tel:+27673745053">067 374 5053</a></p>
      <p>WhatsApp: <a href="https://wa.me/27726701542">072 670 1542</a></p>
      <a href="mailto:ndamueramstech@gmail.com" class="btn-primary">Email Us</a>
    </section>

    <!-- Footer -->
    <footer>
      © <span id="year"></span> NDAMUE RAMS TECH — All rights reserved. <br>
      <a href="#">Privacy & Terms</a>
    </footer>
  </div>

  <!-- AI Floating Chat -->
  <div id="chatButton">💬</div>
  <iframe id="chatBox" 
    src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/25/08/20250925080012-1AKX4PPN.json">
  </iframe>

<script>
document.getElementById('year').textContent = new Date().getFullYear();

/* Scroll Animations for Services */
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.2});
cards.forEach(card => observer.observe(card));

/* AI Chat Toggle */
const chatButton = document.getElementById('chatButton');
const chatBox = document.getElementById('chatBox');
chatButton.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
});

/* Background Code Animation */
const canvas = document.getElementById('code-bg');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let columns = Math.floor(width / 20);
let drops = Array(columns).fill(1);

function draw(){
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle = '#0B64A0';
  ctx.font = '16px monospace';
  for(let i=0;i<drops.length;i++){
    let text = Math.random() > 0.5 ? '0' : '1';
    ctx.fillText(text, i*20, drops[i]*20);
    if(drops[i]*20 > height && Math.random() > 0.975) drops[i]=0;
    drops[i]++;
  }
}
setInterval(draw,50);

window.addEventListener('resize',()=>{
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  columns = Math.floor(width / 20);
  drops = Array(columns).fill(1);
});
</script>
</body>
</html>
