<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portefolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link
    href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
    rel="stylesheet"
  />
  <style>
    @font-face {
      font-family: myFont;
      src: url(font/Gistesy.ttf);
    }
  </style>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            krona: ["Krona One", "sans-serif"],
            myFont: ["myFont", "sans-serif"],
          },
        },
      },
    };
  </script>
</head>
<body 
class="bg-gradient-to-r from-black to-[#070c22]">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <header 
        
        class="h-[500px] flex flex-col">
            <nav class="h-[70px] bg-gradient-to-r from-black to-[#070c22] fixed top-0 left-0 right-0 z-50 nav-bar-menu">
                <ul class="flex text-white p-4 justify-center gap-20 text-xl">
                    <li><a class="link-about" href="#about">About</a></li>
                    <li><a class="link-about" href="#skills">Skills</a></li>
                    <li><a class="link-projects" href="#projects">Projects</a></li>
                    <li><a class="link-contact" href="#contact">Contact</a></li>
                    <li><button id="lang-toggle" class="text-white bg-blue-500 px-4 py-2 rounded-md text-[15px] active:opacity-70 h-10">Italiano</button></li>
                </ul>
            </nav>
            <section 
                data-aos="fade-up"
                data-aos-duration="2000"
                class="flex justify-between px-60 mt-52 items-center text-[20px]" id="hero">
                <div class="text-white">
                    <p class=" text-blue-100 lang" data-lang="en">Hello, my name is </p>
                    <p class="text-blue-100 hidden lang" data-lang="it">Ciao, mi chiamo</p>
                    <p class="text-white font-krona my-[10px] text-[40px] lang" data-lang="en"> <span class="bg-gradient-to-r from-[#5c5ced] via-amber-100 to-[#0c399a] text-transparent bg-clip-text">FRANCK EMMANUEL </span><br> 
                      <span class="bg-gradient-to-r from-[#5c5ced] via-amber-100 to-[#0c399a] text-transparent bg-clip-text">NEGHUEKO DJOUMESSI</span></p>
                      <p class="text-white font-krona my-[10px] text-[40px] hidden lang" data-lang="it"> <span class="bg-gradient-to-r from-[#5c5ced] via-amber-100 to-[#0c399a] text-transparent bg-clip-text">FRANCK EMMANUEL </span><br> 
                        <span class="bg-gradient-to-r from-[#5c5ced] via-amber-100 to-[#0c399a] text-transparent bg-clip-text">NEGHUEKO DJOUMESSI</span></p>
                    <p class="text-[30px] text-blue-100 lang" data-lang="en">JUNIOR FRONT END DEVELOPER</p>
                    <p class="text-[30px] text-blue-100 hidden lang" data-lang="it">SVILUPPATORE FRONT END JUNIOR</p>
                    <div class="flex mt-10 gap-5">
                        <a target="_blank" href="https://www.linkedin.com/in/franck-emmanuel-neghueko-djoumessi-8aa5352a7/"><img class="size-9 hover:opacity-60" src="Images/icons8-linkedin-100.png" alt="icon linkedin"></a>
                        <a target="_blank" href="https://github.com/FranckEmmanuel89"><img class="bg-transparent size-9 hover:opacity-60" src="Images/icons8-github-100 (1).png" alt="icon github"></a>
                        <button><a class=" bg-blue-500 w-28 py-2 px-4 text-white font-semibold text-[20px] rounded-lg lang" data-lang="en" href="#contact">CONTACT ME</a></button>
                        <button><a class=" bg-blue-500 w-28 py-2 px-4 text-white font-semibold text-[20px] rounded-lg hidden lang" data-lang="it" href="#contact">CONTATTAMI</a></button>
                    </div>
                </div>
                <div class="">
                    <img class="absolute -z-40 right-0 top-40 w-[500px] h-[300px]" src="Images/pngegg.png" alt="">
                    <img class="size-60 border-2 border-amber-100 rounded-full object-cover" src="Images/1 (1).jpg" alt="Immagine del profile">
                </div>
            </section>
        </header>
        <main class="mt-[200px]">
            <section id="about" class="h-[330px] mb-96">
                <div 
                data-aos="fade-up"
                data-aos-duration="2000"
                class="flex justify-center items-center mb-32">
                    <h2 class="text-3xl relative text-slate-900 font-semibold md:text-2xl xl:text-6xl font-krona lang" data-lang="en">
                        ABOUT
                    </h2>
                    <h2 class="text-3xl relative text-slate-900 font-semibold md:text-2xl xl:text-6xl font-krona hidden lang" data-lang="it">
                        INFORMAZIONI
                    </h2>
                    <h2 class="text-xl text-white absolute font-semibold md:text-xl font-krona lang" data-lang="en">
                        ABOUT
                    </h2>
                    <h2 class="text-xl text-white absolute font-semibold md:text-xl font-krona hidden lang" data-lang="it">
                        INFORMAZIONI
                    </h2>
                </div>
                <div class="flex items-center">
                    <div class="ml-10 mr-[100px] w-[610px]">
                        <img
                        data-aos="zoom-in-right"
                        data-aos-duration="1000" 
                        class="size-10" src="Images/pngegg (9).png" alt="">
                        <img
                        data-aos="zoom-in-right"
                        data-aos-duration="500" 
                        class="size-10 ml-20" src="Images/pngegg (6).png" alt="">
                        <img
                        data-aos="zoom-in-right"
                        data-aos-duration="3000" 
                        class="size-40 ml-40" src="Images/pngegg (8).png" alt="">
                        <img 
                        data-aos="zoom-in-right"
                        data-aos-duration="1800"
                        class="-z-5 size-[120px]" src="Images/pngegg (4).png" alt="">
                    </div>
                    <div 
                    data-aos="zoom-in-left"
                    data-aos-duration="2000"
                    class="flex flex-col w-[50%]">
                        <div class="text-white w-[550px] border-l-2 border-white hover:bg-slate-900 transition ease-in-out duration-[0.8s] rounded-r-lg mb-8 p-[30px]">
                            <p class="lang" data-lang="en">Web development is more than just a career for me; it's a true passion. I love creating interactive and intuitive experiences that blend design and functionality. Every project is an opportunity to learn, innovate, and push the boundaries of what I can achieve. My curiosity for new technologies and my commitment to improving my skills motivate me daily to become a better developer...</p>
                            <p class="hidden lang" data-lang="it">Lo sviluppo web è più di una semplice carriera per me; è una vera passione. Amo creare esperienze interattive e intuitive che fondono design e funzionalità. Ogni progetto è un'opportunità per imparare, innovare e spingere i limiti di ciò che posso realizzare. La mia curiosità per le nuove tecnologie e il mio impegno a migliorare le mie competenze mi motivano quotidianamente a diventare un sviluppatore migliore...</p>
                            <img class="absolute -z-40 size-24 rotate-45 right-10" src="Images/pngegg (10).png" alt="">
                        </div>
                        <div class="h-[45px] flex items-center gap-10">
                            <button class="text-white border border-amber-100 rounded-lg bg-slate-950 w-32 h-10 hover:bg-white hover:text-slate-950 active:mt-[1px] active:ml-[1px] lang" data-lang="en"><a target="_blank" href="">My Resume</a></button>
                            <button class="text-white border border-amber-100 rounded-lg bg-slate-950 w-32 h-10 hover:bg-white hover:text-slate-950 active:mt-[1px] active:ml-[1px] hidden lang" data-lang="it"><a target="_blank" href="">Curriculum</a></button>
                        </div>
                    </div>
                    </div>
            </section>
            <section id="skills" class="h-[700px] pb-36 flex flex-col items-center justify-center overflow-hidden ">
                <div 
                data-aos="fade-up"
                data-aos-duration="2000"
                class="flex justify-center items-center mb-32 mt-24">
                <h2 class="text-3xl relative text-slate-900 font-semibold md:text-2xl xl:text-6xl font-krona lang" data-lang="en">
                    SKILLS
                </h2>
                <h2 class="text-3xl relative text-slate-900 font-semibold md:text-2xl xl:text-6xl font-krona hidden lang" data-lang="it">
                    COMPETENZE
                </h2>
                <h2 class="text-xl text-white absolute font-semibold md:text-xl font-krona lang" data-lang="en">
                    SKILLS
                </h2>
                <h2 class="text-xl text-white absolute font-semibold md:text-xl font-krona hidden lang" data-lang="it">
                    COMPETENZE
                </h2>
                </div>
                <div 
                data-aos="zoom-in"
                data-aos-duration="2000"
                class="grid grid-cols-3 gap-x-32 gap-y-20 items-center justify-center text-white mb-32">   
                    <div class="flex flex-col justify-center items-center border border-amber-100 rounded-lg w-32 h-32 bg-gradient-to-b from-slate-950 to-[#102a61] hover:scale-[1.5] duration-[1s] logo-js-animation">
                        <img class="size-16" src="Images/js.png" alt="">
                        <p class="hover:text-amber-100"><a href="https://it.wikipedia.org/wiki/JavaScript" target="_blank">JAVASCRIPT</a></p>
                    </div>
                    <div class="flex flex-col justify-center items-center border border-amber-100 rounded-lg w-32 h-32 bg-gradient-to-b from-slate-950 to-[#102a61] hover:scale-[1.5] duration-[1s] logo-css-animation">
                        <img class="size-16" src="Images/css.png" alt="">
                        <P class="hover:text-blue-400"><a href="https://it.wikipedia.org/wiki/CSS" target="_blank">CSS</a></P>
                    </div> 
                    <div class="flex flex-col justify-center items-center border border-amber-100 rounded-lg w-32 h-32 bg-gradient-to-b from-slate-950 to-[#102a61] hover:scale-[1.5] duration-[1s] logo-html-animation">
                        <img class="size-16" src="Images/html.png" alt="">
                        <P class="hover:text-orange-400"><a href="https://it.wikipedia.org/wiki/HTML" target="_blank">HTML</a></P>
                    </div> 
                    <div class="flex flex-col justify-center items-center border border-amber-100 rounded-lg w-32 h-32 bg-gradient-to-b from-slate-950 to-[#102a61] hover:scale-[1.5] duration-[1s] logo-git-animation">
                        <img class="size-16" src="Images/git.png" alt="">
                        <P class="hover:text-red-400"><a href="https://git-scm.com/" target="_blank">GIT</a></P>
                    </div> 
                    <div class="flex flex-col justify-center items-center border border-amber-100 rounded-lg w-32 h-32 bg-gradient-to-b from-slate-950 to-[#102a61] hover:scale-[1.5] duration-[1s] logo-tailwind-animation">
                        <img class="size-16" src="Images/tailwind.png" alt="">
                        <P class="hover:text-[#38BDF8]"><a href="https://tailwindcss.com/" target="_blank">TAILWIND</a></P>
                    </div> 
                    <div class="flex flex-col justify-center items-center border border-amber-100 rounded-lg w-32 h-32 bg-gradient-to-b from-slate-950 to-[#102a61] hover:scale-[1.5] duration-[1s] logo-vue-animation">
                        <img class="size-16" src="Images/vue.png" alt="">
                        <P class="hover:text-green-300"><a href="https://vuejs.org/" target="_blank">VUE JS</a></P>
                    </div>         
                </div>
                <div class="w-[600px] overflow-hidden">
                    <img class="size-[400px] absolute -z-50 right-5 " src="Images/pngegg (3).png" alt="">
                </div>
            </section>
            <section id="projects">
                <div 
                data-aos="fade-up"
                data-aos-duration="2000"
                class="flex justify-center items-center ">
                <h2 class="text-3xl relative text-slate-900 font-semibold md:text-2xl xl:text-6xl font-krona lang" data-lang="en">
                    PROJECTS
                </h2>
                <h2 class="text-3xl relative text-slate-900 font-semibold md:text-2xl xl:text-6xl font-krona hidden lang" data-lang="it">
                    PROGETTI
                </h2>
                <h2 class="text-xl text-white absolute font-semibold md:text-xl font-krona lang" data-lang="en">
                    PROJECTS
                </h2>
                <h2 class="text-xl text-white absolute font-semibold md:text-xl font-krona hidden lang" data-lang="it">
                    PROGETTI
                </h2>
                </div>
                <div class="mx-56 mt-32">
                    <div
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    class="w-[700px] h-[226px] overflow-hidden mt-20 flex text-white items-center">
                       <button><video class="w-[500px] hover:transition-opacity" src="Vidéos/memory card game.mp4" autoplay muted loop></video></button> 
                        <div class="w-[400px] ml-[40px]">
                            <p class="mb-5 text-blue-100 underline underline-offset-[7px]">MEMORY CARD GAME</p>
                            <a class="mb-10 hover:text-slate-500" href="https://github.com/FranckEmmanuel89/Memory-Card-Game" target="_blank">Github Repository</a>
                            <p><a class="hover:text-slate-500 lang" data-lang="en" href="https://franckemmanuel89.github.io/Note-App/" target="_blank">Visit and try</a></p>
                            <p><a class="hover:text-slate-500 hidden lang" data-lang="it" href="https://franckemmanuel89.github.io/Note-App/" target="_blank">Visita e Gioca</a></p>
                            <p class="mt-5"><span class="text-amber-100">JS</span> - <span class="text-orange-300">HTML</span> - <span class="text-blue-400">CSS</span></p>
                        </div>
                    </div>
                    <div 
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    class=" ml-[321px]  w-[750px] flex flex-row-reverse h-[226px] overflow-hidden text-white items-center mt-[50px]">
                        <video class="w-[500px]" src="Vidéos/borcelle restaurant.mp4" autoplay muted loop></video>
                        <div class="w-[400px] mr-[40px]">
                            <p class="mb-5 text-blue-100 underline underline-offset-[7px] text-end">MULTI PAGE RESTAURANT WEBSITE</p>
                            <p class="text-end"><a class="mb-10 hover:text-slate-500" href="https://github.com/FranckEmmanuel89/Borcelle-Restaurant" target="_blank">Github Repository</a></p>
                            <p class="text-end mt-5"><span class="text-orange-300">HTML</span> - <span class="text-blue-400">CSS</span></p>
                        </div>
                    </div>
                    <div
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    class="w-[700px] h-[226px] overflow-hidden mt-20 flex text-white items-center">
                        <video class="w-[500px] hover:transition-opacity" src="Vidéos/Note App.mp4" autoplay muted loop></video>
                        <div class="w-[400px] ml-[40px]">
                            <p class="mb-5 text-blue-100 underline underline-offset-[7px]">NOTE APP</p>
                            <a class="mb-10 hover:text-slate-500" href="https://github.com/FranckEmmanuel89/Note-App" target="_blank">Github Repository</a>
                            <a class="hover:text-slate-500 lang" data-lang="en" href="https://franckemmanuel89.github.io/Note-App/" target="_blank">Visit and try</a>
                            <a class="hover:text-slate-500 hidden lang" data-lang="it" href="https://franckemmanuel89.github.io/Note-App/" target="_blank">Visita e Prova</a>
                            <p class="mt-5"><span class="text-green-300">VUE.JS</span> - <span class="text-orange-300">HTML</span> - <span class="text-blue-400">CSS</span></p>
                        </div>
                    </div>
                    <div 
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    class=" ml-[321px]  w-[750px] flex flex-row-reverse h-[226px] overflow-hidden text-white items-center mt-[50px]">
                        <video class="w-[500px]" src="Vidéos/Pretty Lovely.mp4" autoplay muted loop></video>
                        <div class="w-[400px] mr-[40px]">
                            <p class="mb-5 text-blue-100 underline underline-offset-[7px] text-end">PRETTY LOVELY</p>
                            <p class="text-end"><a class="mb-10 hover:text-slate-500" href="https://github.com/FranckEmmanuel89/Pretty-Lovely" target="_blank">Github Repository</a></p>
                            <p class="text-end mt-5"><span class="text-amber-100">JS</span> - <span class="text-[#38BDF8]">TAILWIND CSS</span> - <span class="text-orange-300">HTML</span></p>
                        </div>
                    </div>

                    <div class="more">
                        <div
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        class="w-[700px] h-[226px] overflow-hidden mt-20 flex text-white items-center">
                            <video class="w-[500px] hover:transition-opacity" src="Vidéos/Aqua serene.mp4" autoplay muted loop></video>
                            <div class="w-[400px] ml-[40px]">
                                <p class="mb-5 text-blue-100 underline underline-offset-[7px]">AQUA SERENE</p>
                                <a class="mb-10 hover:text-slate-500" href="https://github.com/FranckEmmanuel89/Aqua-Serene" target="_blank">Github Repository</a>
                                <p><a class="hover:text-slate-500 lang" data-lang="en" href="https://franckemmanuel89.github.io/Note-App/" target="_blank">Visit The Website</a></p>
                                <p><a class="hover:text-slate-500 hidden lang" data-lang="it" href="https://franckemmanuel89.github.io/Note-App/" target="_blank">Visita il sito web</a></p>
                                <p class="mt-5"><span class="text-orange-300">HTML</span> - <span class="text-[#38BDF8]">TAILWIND CSS</span>
                            </div>
                        </div>
                        <div 
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        class=" ml-[321px]  w-[750px] flex flex-row-reverse h-[226px] overflow-hidden text-white items-center mt-[50px]">
                            <video class="w-[500px]" src="Vidéos/Meteo App.mp4" autoplay muted loop></video>
                            <div class="w-[400px] mr-[40px]">
                                <p class="mb-5 text-blue-100 underline underline-offset-[7px] text-end">METEO APP</p>
                                <p class="text-end"><a class="mb-10 hover:text-slate-500" href="https://github.com/FranckEmmanuel89/Meteo-App" target="_blank">Github Repository</a></p>
                                <p class="text-end"><a class="mb-10 hover:text-slate-500 lang" data-lang="en" href="https://franckemmanuel89.github.io/Meteo-App/" target="_blank">Visit and try</a></p>
                                <p class="text-end"><a class="mb-10 hover:text-slate-500 hidden lang" data-lang="it" href="https://franckemmanuel89.github.io/Meteo-App/" target="_blank">Visita e prova</a></p>
                                <p class="text-end mt-5"><span class="text-amber-100">JS</span> - <span class="text-orange-300">HTML</span> - <span class="text-blue-400">CSS</span></p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="more-btn-container">
                    <button class="more-btn mt-10">More</button>   
                </div>       
            </section>

            <section id="contact">
                <div 
                data-aos="fade-up"
                data-aos-duration="2000"
                class="flex justify-center items-center mb-12 mt-32 ">
                <h2 class="text-3xl relative text-slate-900 font-semibold md:text-2xl xl:text-6xl font-krona lang" data-lang="en">
                    CONTACT
                </h2>
                <h2 class="text-3xl relative text-slate-900 font-semibold md:text-2xl xl:text-6xl font-krona hidden lang" data-lang="it">
                    CONTATTI
                </h2>
                <h2 class="text-xl text-white absolute font-semibold md:text-xl font-krona lang" data-lang="en">
                    CONTACT
                </h2>
                <h2 class="text-xl text-white absolute font-semibold md:text-xl font-krona hidden lang" data-lang="it">
                    CONTATTI
                </h2>
                </div>

                <div 
                data-aos="fade-up"
                data-aos-duration="2000"
                class="flex flex-col justify-center items-center lg:mt-48 xl:mt-0">
                <div class="flex flex-col items-center justify-center h-[600px] rounded-[2] md:pl-10 xl:flex-row">
                  <div class="bg-stone-200 px-2 shadow-xl mb items-center justify-center w-[330px] h-[450px] py-5 mb-10 flex flex-col md:px-10 md:w-[450px] md:items-start md:h-[350px] xl:mb-0">
                    <span class="mb-4 lang" data-lang="en">GET IN TOUCH</span>
                    <span class="mb-4 hidden lang" data-lang="it">SCRIVIMI</span>
                    <div class="mb-2">
                      <input
                        class="w-[150px] mr-[8px] rounded-sm p-2 outline-stone-300 text-sm md:w-[175px]"
                        type="text"
                        placeholder="Name"
                      />
                      <input
                        class="w-[150px] rounded-sm p-2 outline-stone-300 text-sm md:w-[175px]"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <input
                      class="w-[312px] mb-2 p-2 outline-stone-300 text-sm md:w-[364px]"
                      type="text"
                      placeholder="Subject"
                    />
                    <textarea
                      class="rounded-sm mb-2 p-2 w-[312px] outline-stone-300 text-sm md:w-[364px]"
                      name="message"
                      cols="30"
                      rows="5"
                      placeholder="Your message"
                    ></textarea>
                    <button
                      class="bg-black w-[145px] font-normal text-white py-2 px-5 rounded-lg text-sm mt-2 lang" data-lang="en"
                    >
                      Send Message
                    </button>
                    <button
                    class="bg-black w-[145px] font-normal text-white py-2 px-5 rounded-lg text-sm mt-2 hidden lang" data-lang="it"
                  >
                    Invia messaggio
                  </button>
                  </div>
                  <div class="bg-slate-900 w-[300px] h-[450px] rounded-md flex flex-col justify-center mb-20 p-5 text-white lg:mb-40 xl:mb-0">
                    <span class="mb-5 lang" data-lang="en">CONTACT ME</span>
                    <span class="mb-5 hidden lang" data-lang="it">CONTATTAMI</span>
                    <div class="flex mb-4">
                      <img
                        class="size-8 bg-slate-600 rounded-full p-2 mr-3"
                        src="images/icons8-téléphone-100.png"
                        alt="icon telefono"
                      />
                      <span>327 895 2132</span>
                    </div>
                    <div id="findUs" class="flex mb-5">
                      <img
                        class="size-8 bg-slate-600 rounded-full p-2 mr-3"
                        src="images/icons8-email-24.png"
                        alt="icon mail"
                      />
                      <span>franck_dev@myyahoo.com</span>
                    </div>
                    <span class="mb-5 lang" data-lang="en"> FOLLOW ME </span>
                    <span class="mb-5 hidden lang" data-lang="it"> SEGUIMI </span>
                    <div class="flex gap-6">
                      <a target="_blank" href="https://www.linkedin.com/in/franck-emmanuel-neghueko-djoumessi-8aa5352a7/"><img
                        class="size-6 cursor-pointer transition-transform ease-out duration-[0.5s] hover:scale-[1.4] lg:size-7"
                        src="images/icons8-linkedin-100.png"
                        alt="icon linkedin" 
                      /> </a>
                      <a target="_blank" href="https://github.com/FranckEmmanuel89"><img
                        class="size-6 cursor-pointer transition-transform ease-out duration-[0.5s] hover:scale-[1.4] lg:size-7"
                        src="images/icons8-github-100 (1).png"
                        alt="icon github"
                      /></a>
                    </div>
                  </div>
                </div>
              </div>

            </section>
        </main>

        <footer>
            <section class="flex text-slate-200 items-center justify-center flex-col mt-10 py-5">
                <div>Franck Emmanuel</div>
                <div>Neghueko Djoumessi</div>
                <div>Copyright © 2024. All Rights Reserved.</div>
            </section>
        </footer>
   

<script src="script.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
  </script>
</body>
</html>