import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "ian's projects";
  }, []);

  return (
    <div>
      <p>
        some projects, find the rest on my{" "}
        <a href="https://github.com/ludanik" class="clickable" target="_blank">
          github
        </a>{" "}
        <nobr>(๑•̀ㅁ•́๑)✧</nobr>
      </p>
      <hr class="dashed" />
      <p>
        <NavLink to="/" class="clickable">
          <u>
            <b>personal website</b>
          </u>
        </NavLink>{" "}
        <br />
        what you're looking at right now :)
      </p>
      <p>
        <a
          href="https://github.com/ludanik/java-chess"
          class="clickable"
          target="_blank"
        >
          <b>chess game</b>
        </a>{" "}
        <br />chess, implemented in Java with LibGDX
      </p>
      <p>
        <i>(this page is a work in progress, pictures coming soon!)</i>
      </p>
    </div>
  );
}

export default Projects;
