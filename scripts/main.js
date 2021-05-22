const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


var speed = 30 ;

async function createNewText(text){
  var p = document.createElement("p");
  p.id = "Initial"; 
  for(i in text) {
    p.innerHTML += text[i];
    app.appendChild(p);
    await delay (speed);
  }
}


async function blinkingCursor()
{
  const blink = document.createElement("span");
  blink.id = "cursor";
  app.appendChild(blink);
  await delay(1200);
  blink.parentNode.removeChild(blink);
}

async function open_terminal(){

  blinkingCursor();
  await delay(1200);

  var text = "";

  text = "Welcome, I'm Rahul Arepaka 👋";
  createNewText(text);
  await delay(text.length*speed + 50);

  text = "MIT License : Copyright (c) 2021 Rahul Arepaka";
  createNewText(text);
  await delay(text.length*speed + 50);

  text = "Starting the server 🔓";
  createNewText(text);
  await delay(text.length*speed + 50);

  text = "You can run several commands 👨‍💻";
  createNewText(text);
  await delay(text.length*speed + 50);

  await delay(500);
  createCode("about me", "Who am i and what do i do 😀");
  createCode("all", "See all commands 📂");
  createCode("social", "All my social networks 📱");

  await delay(100);
  new_line();
}


function new_line(){
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/rahularepaka";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects 🚧");
    createCode("about me", "Who am i and what do i do 🤠");
    createCode("tools", "Things I do and currently learning 🤔")
    createCode("awards", "Awards and Organizations which I was part of 🌎")
    createCode("resume", "Résumé 📝")
    createCode("social", "All my social networks 📱");
    createCode("contact", "If you have a question or simply want to say hello 😀")
    createCode("credits", "Special Mentions 🎈")
    createCode("clear", "Clean the terminal 🧹");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/rahularepaka' target='_blank'><i class='fab fa-github white'></i> github.com/rahularepaka </a>")
  }
  else if(value === "credits"){
    trueValue(value);
    createText("<a href='https://github.com/rahularepaka' target='_blank'><i class='fab fa-github white'></i> 😊 I made the website from a forked Repo </a>")
    createText("<a href='https://github.com/Rounak-Das-02' target='_blank'><i class='fab fa-github white'></i> 💙 Rounak Das : Thanks for the Typing Effect </a>")
    createText("<a href='https://github.com/rahularepaka/rahularepaka.github.io/blob/master/LICENSE' target='_blank'><i class='fab fa-github white'></i> MIT License : Copyright (c) 2021 Rahul Arepaka </a>")
  }
  else if(value === "resume"){
    trueValue(value);
    createText("<a href='https://drive.google.com/file/d/1ftTH0jLV3gu6NP3Ff6bEIuJNZ0SkJDMW/view?usp=sharing' target='_blank'></i> Here, is my Résumé 📝 </a>")
  }
  else if(value === "contact"){
    trueValue(value);
    createText("<a href='mailto:rahul.arepaka@gmail.com' target='_blank'></i> 📧 Email ID : rahul.arepaka@gmail.com  </a>")
  }
  else if(value === "awards"){
    trueValue(value);
    createText("🤖 14th Place at World Robotics Olympiad 2018 as Team UAE")
    createText("🔨 Think Award at FIRST Tech Challenge 2019")
    createText("👷 Judge at FIRST Lego League Judge 2020")
    createText("🔬  1st at Mahindra University Research Symposium 2020")
    createText("🕴️ 1st at Technobizad Business Challenge")
    createText("✨ 1st at University of Wollongong – Robotics Annual Competition")
    createText("🥇 1st at the National Robotics Olympiad UAE")
    createText("🌎 Organizations : " )
    createText("- World Robot Olympiad |Babson Build Challenge| MU Hult Prize")
    createText("- FIRST Tech Challenge|Hackobterfest|TEDx")
  }
  else if(value === "tools"){
    trueValue(value);
    createText("⚡ Arduino | NodeMCU | Raspberry Pi | Nvidia Jetson Nano | IoT")
    createText("🧰 Visual Studio Code | OpenCV | Fusion 360")
    createText("🖥️ C | C++ | Python")
  }
  else if(value === "about me"){
    trueValue(value);
    //createText("👋 Hi there, I'm Rahul Arepaka 👋;)")
    createText("🤖 I'm a Robotics Enthusiast and Developer 🤖")
    createText("🏫 19 | Our Own High School Al Warqa'a '20 🇦🇪 | Mahindra University '24 🇮🇳")
    createText("🖥️ Currently pursing Computer Science and Engineering at Mahindra University'24")
    createText("👷 Currently working on Laser Killing Weeds on FarmBot")
    createText("🚗 Currently Working on Dashboard on Renault Twizy : Self Driving Car")
    createText("🚁 Protyping on Co-Axial Drones using Graphite Solid State batteries")
    createText("❤️ Interests: Robotics |Reverse Engineering | Product Engineering")

  }
  else if(value === "social"){
    trueValue(value);
    createText("<a href='https://github.com/rahularepaka' target='_blank'><i class='fab fa-github white'></i> github.com/rahularepaka</a>")
    createText("<a href='https://www.linkedin.com/in/rahul-arepaka/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/rahul-arepaka</a>")
    createText("<a href='https://www.instagram.com/rahularepaka/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/rahularepaka</a>")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`🙅‍♂️ command not found 🙅‍♂️ : ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
