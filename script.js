const navLinks = document.querySelectorAll(".link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav .right ul");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

const links = document.querySelectorAll("ul li");

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});

const eventBtn = document.querySelectorAll(".event-btn .btn");
const futures = document.querySelectorAll(".future");
const pasts = document.querySelectorAll(".past");
const all = document.querySelectorAll(".all");

eventBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    eventBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    const tabVal = btn.getAttribute("data-tabs");

    if (tabVal === "future") {
      futures.forEach((item) => {
        item.style.display = "block";
      });
      pasts.forEach((item) => {
        item.style.display = "none";
      });
    } else if (tabVal === "past") {
      pasts.forEach((item) => {
        item.style.display = "block";
      });
      futures.forEach((item) => {
        item.style.display = "none";
      });
    }
  });
});

const questions = document.querySelectorAll(".questions a");
const answer = document.querySelector(".answer");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    questions.forEach((question) => {
      question.classList.remove("open");
    });

    question.classList.add("open");

    e.preventDefault();
  });
});

const first = document.querySelector(".first");

first.addEventListener("click", () => {
  answer.textContent = `The community is inclusive, welcoming students from various
  departments such as Computer Science, Computer Engineering,
  Information and Communication Science, Telecommunication Science,
  and Computer Science Education. We provide tech-related discussions
  that cater to a wide range of students, from beginners taking their
  first steps in development to advanced learners looking to enhance
  their skills.`;
});

const second = document.querySelector(".second");
second.addEventListener("click", () => {
  answer.textContent = "The Second Answer";
});
const third = document.querySelector(".third");
third.addEventListener("click", () => {
  answer.textContent = "The Third Answer";
});
const fourth = document.querySelector(".fourth");
fourth.addEventListener("click", () => {
  answer.textContent = "The Fourth Answer";
});

const fifth = document.querySelector(".fifth");
fifth.addEventListener("click", () => {
  answer.textContent = "The Fifth Answer";
});
