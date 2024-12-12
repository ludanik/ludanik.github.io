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
      Reflecting on my academic and professional journey, I’ve gained a significantly enriched perspective on the intersection of technology, problem-solving, and human-centered design. My experiences, both in the classroom and the field, have cultivated a deeper understanding of complex challenges in software development and broadened my view on how technology can drive meaningful change.


During my tenure at Microsoft as a Software Engineer Intern, I worked on enhancing automated replay systems, a task that required balancing technical precision with the needs of a large-scale team. This experience sharpened my ability to dissect intricate problems, such as performance bottlenecks, and address them through innovative solutions that improved testing efficiency. The integration of local A/B testing functionality exemplified how technology, when thoughtfully applied, can significantly improve workflows. This exposure to a dynamic and collaborative engineering environment gave me a profound appreciation for the complexity of coordinating software systems with user requirements.


Outside of traditional coursework, my leadership role in developing a Python-based course enrollment tool for York University students offered valuable insights into user-centric software design. This project underscored the importance of understanding and addressing user pain points—such as the frustration of manual enrollment delays—through intuitive and accessible technological solutions. The successful adoption of the tool by over 130 students affirmed my belief in the transformative power of well-crafted software.


Projects like Pomoduino, where I integrated hardware and software to promote productivity, further expanded my understanding of how cross-disciplinary knowledge can solve multifaceted problems. Synchronizing a physical device with a web application required not only technical expertise but also an ability to foresee and adapt to user interactions in real-world settings. Such endeavors have redefined my perspective on the importance of bridging theoretical knowledge with practical application.


These experiences have collectively shifted my perspective on computer science from being solely about building functional systems to appreciating the broader implications of technology in enhancing lives and addressing real-world challenges. This growth, fueled by both academic learning and professional practice, continues to inspire me to seek innovative solutions at the intersection of technical rigor and human-centered design.
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
