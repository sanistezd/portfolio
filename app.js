import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const portfolioData = {
  name: "Dzetsina Oleksandr",
  title: "Full-stack Developer (in progress)",
  about: "I'm learning web development. Currently working with Node.js, Express and modern frontend technologies.",
  uni: "State University of Trade and Economics (SUTE)",
  bio: "Software Engineering student. Studying full-stack development. Experienced with Node.js, Express, EJS and building demo projects.",
  
  skills: {
    "Frontend": ["HTML", "CSS", "JavaScript", "EJS"],
    "Backend": ["Node.js", "Express.js"],
    "Tools": ["Git", "GitHub", "VS Code"],
    "Currently Learning": ["React", "Next.js", "TypeScript", "MongoDB"]
  },

  socialLinks: {
    github: "https://github.com/sanistezd",
    linkedin: "https://linkedin.com/in/your-profile"
  },

  projects: [
    {
      title: "Coffee Shop Website",
      subtitle: "Landing page for a coffee shop",
      desc: "My first project - simple coffee shop website with menu and contact information.",
      tech: ["HTML", "CSS"],
      img: "/images/poruch1.jpg",
      link: "https://github.com/sanistezd/poruchcoffee/",
      demo: "https://sanistezd.github.io/poruchcoffee/",
      hasDemo: true
    }
  ]
};

app.get("/", (req, res) => {
  res.render("index", { ...portfolioData });
});

app.get("/projects", (req, res) => {
  res.render("projects", { ...portfolioData });
});

app.get("/skills", (req, res) => {
  res.render("skills", { ...portfolioData });
});

app.get("/about", (req, res) => {
  res.render("about", { ...portfolioData });
});

app.get("/contact", (req, res) => {
  res.render("contact", { ...portfolioData });
});

app.post("/contact", (req, res) => {
  console.log("Contact form:", req.body);
  res.render("contact-confirm", { ...portfolioData, data: req.body });
});

app.listen(port, () => console.log(` Portfolio running at http://localhost:${port}`));