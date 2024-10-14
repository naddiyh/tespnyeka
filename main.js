import $ from "jquery";
import "./style.css";
import LocomotiveScroll from "locomotive-scroll";

$("#app").html(` 
<header class="navbar-container">
    <h2 class="logo">Portofolio</h2>
    <nav>
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#my-hobbies">My Hobbies</a></li>
        <li><a href="#my-skills">My Skills</a></li>
      </ul>
    </nav>
  </header>
  <main data-scroll-container>
    <section class="landing-page">
      <h1 data-scroll data-scroll-speed ="1">
        Hello, Everyone! <br> I'm <span class="name">Eka Putri Difayanti</span>👋
      </h1>
      <p data-scroll data-scroll-speed ="2">
        An Informatics Engineering student at <a href="https://www.unhas.ac.id/">Hasanuddin University</a>
      </p>
    </section>
    <section class="about-me">
      <h2 id="about-me" data-scroll data-scroll-speed ="1">About Me</h2>
      <p data-scroll data-scroll-speed ="2">
        I'm a student who is currently studying at Hasanuddin University. I'm interested in <span>Web Development</span> and I'm currently learning about it. I'm also interested in learning about new things and I'm always open to new opportunities 🤩
      </p>
    </section>
    <section class="my-hobbies" id="my-hobbies">
      <h2 id="my-hobbies-title" data-scroll data-scroll-speed ="1">My Hobbies</h2>
      <section id ="my-hobbies-card">
        <section class="card" id="reading" data-scroll data-scroll-speed="1.5">
          <h3>Reading</h3>
          <p>Usually reading something that interested me, like manhwa, webtoon, and many more</p>
        </section>
        <section class="card" id="music" data-scroll data-scroll-speed="1.5">
          <h3>Listening to music</h3>
          <p>Any genre from Pop to jedag jedug, it's random so my spotify playlist is called randomcore</p>
        </section>
        <section class="card" id="movie" data-scroll data-scroll-speed="1.5">
          <h3>Watching movies</h3>
          <p>I actually not really into drama and horror, but my family like it so i just get along with it</p>
        </section>
        <section class="card" id="game" data-scroll data-scroll-speed="1.5">
          <h3>Playing games</h3>
          <p>Life is roblox, roblox is life, i also like simulator and chill games because i want something to cool me down (and not stressed me out because of my assignment)</p>
        </section>
      </section>
    </section>
    <section class="my-skills">
      <h2 id="my-skills" data-scroll data-scroll-speed="1">My Skills</h2>
      <ul>
        <li data-scroll data-scroll-speed="1.5">
          <img src="./image/gojo_pixel.png" alt="HTML">
          <p>HTML</p>
        </li>
        <li data-scroll data-scroll-speed="1.5">
          <img src="./image/css.svg" alt="CSS">
          <p>CSS</p>
        </li>
        <li data-scroll data-scroll-speed="1.5">
          <img src="./image/javascript.svg" alt="JavaScript">
          <p>JavaScript <span>(not really)</span></p>
        </li>
      </ul>
    </section>
  </main>
`);


$(function() {
  $(".card").on("click", "h3", function() {
    $(this).next("p").slideToggle();
  });
});

$(function(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });
})