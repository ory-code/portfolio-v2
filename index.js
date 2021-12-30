const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText("Hello World");
  await delay(750);
  createText("Server running...");
  await delay(999);
  createText("You can run several commands:");
  createCode("all", "See all commands.");
  createCode("profile", "Who am i and what do i do.");
  createCode("contact", "Contact me");
  await delay(600);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "$ user";
  //span1.textContent = " in";
  span2.textContent = " ~/ROOTS_SACHA_ORY";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  //const i = document.createElement("i");
  //i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  //div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  if (value === "all") {
    trueValue(value);
    createCode("projects", "My github page with my projects.");
    createCode("profile", "Who am i and what do i do.");
    createCode("skills", "My skills to code with you.");
    createCode("contact", "Contact me.");
    createCode("clear", "Clean the terminal.");
  } else if (value === "projects") {
    trueValue(value);
    createText("Go check my last project...;");
    createText(
      "<a href='https://github.com/ory-code' target='_blank'>github.com/ory-code;</a>"
    );
  } else if (value === "profile") {
    trueValue(value);
    createText("Hello my name is Sacha;");
    createText(
      "I finished my web developer apprenticeship at Openclassrooms, I am a junior fullstack developer, I have the will to prove myself. My challenge is to live up to your expectations, and I hope to join your team  "
    );
  } else if (value === "skills") {
    trueValue(value);
    createText("I can code with;");
    createText(
      "REACTJS REDUX HTML CSS SASS JAVASCRIPT NODESJS EXPRESS MONGODB MYSQL SWAGGER FIREBASE;"
    );
    createText("When i code i do;");
    createText("Website optimization SEO and W3C;");
    createText("Securing the application with OWASP;");
  } else if (value === "contact") {
    trueValue(value);
    createText(
      "<a href='https://github.com/ory-code' target='_blank'> github.com/ory-code</a>"
    );
    createText(
      "<a href='https://www.linkedin.com/in/sacha-ory-dev-junior/' target='_blank'> linkedin.com/in/sacha-ory-dev-junior</a>"
    );
    createText("<a href='mailto:orysacha@yahoo.be'>send me an email</a>");
    //createText("My email: orysacha@yahoo.be")
  }
  //   else if(value === "contact"){
  //     trueValue(value);
  //     createText("Didn't you mean: contact -a?")
  //   }
  else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
  } else {
    falseValue(value);
    createText(`command not found: ${value}`);
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  //   const i = document.createElement("i");
  //   i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  //div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  //const i = document.createElement("i");
  //i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  //div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
