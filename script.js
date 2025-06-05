const text = "My name is Kristina, and I am a Front-End Developer";
const typingTarget = document.getElementById("typing-target");
let index = 0;

function type() {
  if (index < text.length) {
    typingTarget.textContent += text.charAt(index);
    index++;
    setTimeout(type, 40);
  }
}

window.addEventListener("DOMContentLoaded", type);


const projects = [
  {
    title: "RainyDays",
    description: "An online shopping site for outdoor enthusiasts.",
    image: "images/thumb-rainydays.png",
    liveLink: "https://kristinatonnessen.github.io/Rainydays/",
    repoLink: "https://github.com/kristinatonnessen/RainyDays"
  },
  {
    title: "Oslo Science Museum",
    description: "An interactive website showcasing the Oslo Science Museum.",
    image: "images/thumb-osm.png",
    liveLink: "https://kristinatonnessen.github.io/Semester-Project-1/",
    repoLink: "https://github.com/kristinatonnessen/Semester-Project-1"
  },
  {
    title: "HotView Labs",
    description: "A platform for sharing and discovering innovative ideas.",
    image: "images/thumb-hvl.png",
    liveLink: "https://fed1-pe1-kristinatonnessen.netlify.app/",
    repoLink: "https://github.com/NoroffFEU/FED1-PE1-kristinatonnessen"
  }
];

const grid = document.querySelector(".project-grid");

projects.forEach(project => {
  const item = document.createElement("div");
  item.classList.add("project-item");
  item.innerHTML = `
    <img class="thumbnail" src="${project.image}" alt="${project.title} thumbnail">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a class="visit-btn" href="${project.liveLink}" target="_blank">Visit site here</a>
    <a class="visit-btn" href="${project.repoLink}" target="_blank">View code here</a>
  `;
  grid.appendChild(item);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll(".project-item").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.02)";
    card.style.transition = "transform 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
document.querySelectorAll(".thumbnail").forEach(thumbnail => {
  thumbnail.addEventListener("mouseenter", () => {
    thumbnail.style.transform = "scale(1.16)";
    thumbnail.style.transition = "transform 0.3s ease";
  });
  thumbnail.addEventListener("mouseleave", () => {
    thumbnail.style.transform = "scale(1)";
  });
});
document.querySelectorAll(".visit-btn").forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#fff";
    button.style.color = "#000";
  });
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#7c4dff00";
    button.style.color = "#676767";
  });
});

const skillItems = document.querySelectorAll(".skill-item");

skillItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    skillItems.forEach((el, i) => {
      const distance = Math.abs(i - index);
      const scale = distance === 0 ? 1.3 : distance === 1 ? 1.15 : 1;

      el.style.transform = `scale(${scale})`;
    });
  });

  item.addEventListener("mouseleave", () => {
    skillItems.forEach(el => {
      el.style.transform = "scale(1)";
    });
  });
});
