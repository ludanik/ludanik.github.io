import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "ian's life";
  }, []);

  return (
    <div>
      <img src="/images/me.jpg" alt="it's me!" width="200" height="auto" />
      <hr class="dashed" />
      <p>
        hey! i'm passionate about developing useful software
        to solve real problems. currently trying to learn more
        about low-level systems.
        <br />
        <br />
      </p>
      <p> </p>
      <p>
        <b>currently</b>
      </p>
      <p>
        i'm a junior at{" "}
        <a href="https://www.yorku.ca/" target="_blank" class="clickable">
          York University
        </a>
        <br />
        <br />
      </p>
      <p> </p>
      <p>
        <b>previously</b>
      </p>
      <p>did an internship:</p>
      <ul>
        <li>
          developed performance testing tools at Microsoft
        </li>
      </ul>
      <p></p>
    </div>
  );
}

export default About;
