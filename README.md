# 🚧 NOOMİM – Under Construction Page

This repository contains the source code for the **Under Construction** landing page of [noomim.com](https://noomim.com), a company specializing in durable and sustainable bigbags (FIBCs) for industrial use.

The page features:
- Fullscreen background video
- Brand-focused text overlay
- Clickable email icon triggering a contact form popup
- Form submission via EmailJS

---

## 🌐 Live Website

👉 [https://noomim.com](https://noomim.com)

---

## 🛠 Built With

- [Next.js 15](https://nextjs.org/)
- [EmailJS](https://www.emailjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Custom HTML5 + CSS3
- Responsive design with flexbox

---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/noomim-under-construction.git
cd noomim-under-construction
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ You must create a template in EmailJS with fields: `from_name`, `from_email`, `subject`, and `message`.

### 4. Run Locally
```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
/public
  /videos/clouds.mp4
  favicon.ico

/src
  /app
    layout.js
    page.js
  /components
    Home.js
  /styles
    home.css
```

---

## ✉️ Contact Form Behavior

- Clicking the mail icon opens a smooth transition popup
- Form fields are required: Name, Email, Subject, Message
- Submission sends email via EmailJS to the configured recipient

---

## 📄 License

This project is licensed under the MIT License.  
You are free to use and modify it for your own personal or commercial projects.

---

## 👤 Author

Built by **Buğrahan Çoban** for the Noomim brand.  
For inquiries, reach out at [info@noomim.com](mailto:info@noomim.com)
