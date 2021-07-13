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
path_for_Image = "images/";

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

  /*
  text = "MIT License : Copyright (c) 2021 Rahul Arepaka";
  createNewText(text);
  await delay(text.length*speed + 50);
  */

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
    
    createCode("about me", "Who am i and what do i do 🤠");
    createCode("projects", "My github page with my projects 🚧");
    createCode("skills", "Things I do and currently learning 🤔")
    createCode("education", "My Second Home 🏫")
    createCode("awards", "Awards and Organizations which I was part of 🌎")
    createCode("resume", "Résumé 📝")
    createCode("social", "All my social networks 📱");
    createCode("contact", "If you have a question or simply want to say hello 😀")
    createCode("license", "Some Legal Stuff ⚖️")
    createCode("clear", "Clean the terminal 🧹");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/rahularepaka/Project-Cyclops' target='_blank'><i class='fab fa-github white'></i> Project-Cyclops : Laser Tool for Killing Weeds ☘️ </a>")
      text_that_you_want_to_render = "This is all-new laser killing weed removal for the Farmbot designed by our team. This tool is designed to destroy weeds using Thermal Technique : Laser by detecting weeds using Camera and weed detection.The Camera will detect for weeds and give those coordiantes to the farmbot and give add/subtract the off-set of the laser mount location and turn on the laser for 500ms and spray water on the location to complete the sequence.The Laser module was tested and designed for the farmbot genesis v1.3 and this attachement is expected out to all the farmbot kits in the 2023.Find the documentation in the github Repo which contains the reports, parts details and test videos.";
       fileName = "laser.jpg"
       createImage(fileName,text_that_you_want_to_render);
    
    createText("<a href='https://github.com/rahularepaka/Project-Clara' target='_blank'><i class='fab fa-github white'></i> Project-Clara : Cable Lifted Automated Robot for Agriculture 🚜 </a>")
      text_that_you_want_to_render_1 = "Theory : A leading cause of Soil compaction is the use of heavy land-based agricultural machinery which leads to loss of air content within the soil Due to this heavy farm equipment including tractors can exert considerable weight onto the soil surface and consequently into the subsoil. Solution : We decided to do Cable Driven Parallel Robot (CDPR) which can carry out different agriculture processes and can work in indoor and outdoor environments So we made CLARA (Cable Lifted Automated Robot for Agriculture) is CDPR and her motion is dependent on 8 Motors from which she is suspended using strings. Find the documentation in the github Repo which contains the reports, parts details and test videos.";
       fileName1 = "clara.jpg"
       createImage(fileName1,text_that_you_want_to_render_1);
  }

  else if(value === "education"){
    trueValue(value);
    createText("École Centrale School of Engineering, Mahindra University | Bachelor of Technology in Computer Science and Engineering");
    createText("Oct 2020 – Exp. June 2024")
    createText("Our Own High School Al Warqa’a, GEMS Education | Science Stream with Computer Science, CBSE");
    createText("April 2010 – March 2020");
  }

  else if(value === "credits"){
    trueValue(value);
    createText("<a href='https://github.com/rahularepaka' target='_blank'><i class='fab fa-github white'></i> 😊 I made the website from a forked Repo </a>")
    createText("<a href='https://github.com/Rounak-Das-02' target='_blank'><i class='fab fa-github white'></i> 💙 Rounak Das : Thanks for the Typing Effect </a>")
    createText("<a href='https://github.com/rahularepaka/rahularepaka.github.io/blob/master/LICENSE' target='_blank'><i class='fab fa-github white'></i> MIT License : Copyright (c) 2021 Rahul Arepaka </a>")
  }
  else if(value === "resume"){
    trueValue(value);
    createText("<a href='https://drive.google.com/file/d/1EcBxrVSWqRVwsi9I1mdeFuECedEFKIYX/view?usp=sharing' target='_blank'></i> Here, is my Résumé 📝 </a>")
  }
  else if(value === "contact"){
    trueValue(value);
    createText("<a href='mailto:rahul.arepaka@gmail.com' target='_blank'></i> 📧 Email ID : rahul.arepaka@gmail.com  </a>")
  }
  else if(value === "awards"){
    trueValue(value);
    createText("🏗️ Finalist for Global Babson Collaborative challenge – Bachelor’s level (Top 10 Teams)")
    createText("🤖 14th Place at World Robotics Olympiad 2018 as Team UAE")
    createText("🔨 Think Award at FIRST Tech Challenge 2019")
    createText("👷 Judge at FIRST Lego League Judge 2020 | 2021")
    createText("🔬  1st at Mahindra University Research Symposium 2020")
    createText("🕴️ 1st at Technobizad Business Challenge")
    createText("✨ 1st at University of Wollongong – Robotics Annual Competition")
    createText("🥇 1st at the National Robotics Olympiad UAE")
    createText("🌎 Organizations : " )
    createText("- World Robot Olympiad |Babson Build Challenge| MU Hult Prize")
    createText("- FIRST Tech Challenge|Hackobterfest|TEDx")
  }
  else if(value === "skills"){
    trueValue(value);
    createText("🧑‍💻 Programming Languages: C, C++, Python")
    createText("💻 Operating Systems: Linux, Windows, WSL.")
    createText("⚙️ Technical Tools: Arduino, Raspberry Pi, OpenCV, Autodesk Fusion 360, Git, VS Code, Image Processing, IoT, NodeMCU.")
    createText("💗 Interests: Robotics, Reverse Engineering, Product Engineering, Rapid Prototyping, Hardware Hacking, Product Innovation.")

  }
  else if(value === "about me"){
    trueValue(value);
    createText(">> Here is a sweet Into of Myself 🥰 ")
      text_that_you_want_to_render_M = "Hi there, I'm Rahul Arepaka 👋, 19 years old and currently studying at Mahindra University '24 🇮🇳 in computer science and engineering 🏫 . I'm a Robotics Enthusiast 🤖 and love to contribute towards research in agriculture field 🧑‍🌾 . I am currently working on killing weeds using lasers 🔥 and researching on the co-axial drones using solid state batteries 🔋 .My interest are Reverse Engineering ⛏️ and Product Engineering ✂️ . Love to connect and meet new people and open to collobration research projects 😍 "
       fileNameM = "rahul.jpeg"
       createImage(fileNameM,text_that_you_want_to_render_M);

  }
  else if(value === "social"){
    trueValue(value);
    createText("<a href='https://github.com/rahularepaka' target='_blank'><i class='fab fa-github white'></i> github.com/rahularepaka</a>")
    createText("<a href='https://www.linkedin.com/in/rahul-arepaka/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/rahul-arepaka</a>")
    createText("<a href='https://www.instagram.com/rahularepaka/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/rahularepaka</a>")
  }

  else if(value == "license"){
    trueValue(value);
        createText("<a href='https://github.com/rahularepaka/rahularepaka.github.io/blob/master/LICENSE' target='_blank'><i class='fab fa-github white'></i> MIT License : Copyright (c) 2021 Rahul Arepaka</a>")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("img").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found ⛔ ${value}`)
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
  
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =`${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function createImage(fileName, text){
  const container = document.createElement("span");
  container.setAttribute("class", "imageContainer");
  const img = document.createElement("img");
  img.setAttribute("class", "image");
  img.setAttribute("id", "image");
  img.setAttribute("src", (path_for_Image+fileName));
  container.appendChild(img);
  const p = document.createElement("p");
  p.setAttribute("class", "image_description");
  p.innerHTML = text;
  container.appendChild(p);
  app.appendChild(container)
}


open_terminal();
