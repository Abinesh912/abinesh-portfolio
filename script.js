const form = document.getElementById("terminal-form");
const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

const commands = {
  help: () => [
    "Available commands:",
    "  whoami          — introduction",
    "  about           — professional summary",
    "  experience      — training experience",
    "  projects        — selected GitHub projects",
    "  skills          — technical skills",
    "  education       — academic background",
    "  certifications  — certifications",
    "  contact         — contact links",
    "  clear           — clear terminal"
  ],
  whoami: () => ["ABINESH A", "IT Operations & Production Support", "Bangalore, India"],
  about: () => ["Engineering graduate (B.E. Civil Engineering, Minor in Full Stack Development).", "Targeting Enterprise Support and IT Infrastructure Support roles.", "Hands-on with Linux/Unix, AWS EC2, Docker, Nginx, networking, log analysis and troubleshooting."],
  experience: () => ["PySpiders — Python Full Stack Development with DevOps", "Upskilling / hands-on training · Oct 2025 – Apr 2026", "Practiced CI/CD and Docker troubleshooting, Django REST API debugging, SQL queries, Linux command-line work and shell scripting basics."],
  projects: () => ["01  Django Support Ticket API", "    Django REST API, token authentication, ticket CRUD, health checks and automated tests.", "    https://github.com/Abinesh912/Django-Support-API", "02  Production Operations Incident Management Lab", "    Flask lab for health monitoring, incident simulation, logging, outage detection and recovery alerts.", "    https://github.com/Abinesh912/Production-Operations-Incident-Management-Lab", "03  Windows IT Support Toolkit", "    Windows system monitoring, network diagnostics and support ticket management.", "    https://github.com/Abinesh912/Windows-IT-Support-Toolkit", "04  Python Log Analyzer", "    Severity filtering, repeated-error detection, text reports and automated tests.", "    https://github.com/Abinesh912/python-log-analyzer"],
  skills: () => ["IT Support: troubleshooting, incident triage (foundational), RCA, log analysis, SOPs", "OS: Linux/Unix, Linux administration fundamentals, Bash basics", "Networking: TCP/IP, DNS, HTTP/HTTPS", "Cloud: AWS EC2, CloudWatch, IAM, VPC, Security Groups", "Tools: Docker, Nginx, Kubernetes, Jenkins, GitHub Actions, Git", "Programming: Python, SQL, Django ORM, REST APIs, JavaScript"],
  education: () => ["B.E. Civil Engineering — KPR Institute of Engineering and Technology, Coimbatore", "2021 – 2025 · Minor Degree: Full Stack Development · CGPA: 7.99"],
  certifications: () => ["Oracle Cloud Infrastructure Foundations Associate — Udemy (2025)", "Google Cloud Data Engineer Professional — Udemy (2024)", "Data Visualization — TATA Groups, Udemy (2025)"],
  contact: () => ["Email: abinesh.aofficiall@gmail.com", "GitHub: https://github.com/Abinesh912", "LinkedIn: https://www.linkedin.com/in/abinesh-a-7447b9225", "Location: Bangalore, India"]
};

function addLine(text, className = "terminal-line") {
  const line = document.createElement("div");
  line.className = className;
  line.textContent = text;
  output.appendChild(line);
}
function runCommand(raw) {
  const command = raw.trim().toLowerCase();
  if (!command) return;
  addLine(`abinesh@portfolio:~$ ${raw}`, "terminal-line muted");
  if (command === "clear") { output.innerHTML = ""; return; }
  if (commands[command]) commands[command]().forEach(line => addLine(line));
  else addLine(`Command not found: ${command}. Type "help" to see available commands.`);
  output.scrollTop = output.scrollHeight;
}
form.addEventListener("submit", event => {
  event.preventDefault();
  runCommand(input.value);
  input.value = "";
});
document.querySelectorAll("[data-command]").forEach(button => {
  button.addEventListener("click", () => {
    runCommand(button.dataset.command);
    input.focus();
  });
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== input) {
    event.preventDefault();
    input.focus();
  }
});
