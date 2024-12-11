import { useState, useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "ian's resume";
  }, []);

  return (
    <div>
      <p>here's my resume（˶′◡‵˶）</p>
      <hr class="dashed" />

      <iframe
        src="https://drive.google.com/file/d/1orQk33C-94Ya3FRrSJcI4VEd8NmRYVOn/preview"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>

      <a
        href="/Resume_Ian_Ludanik.pdf"
        download="Resume_Ian_Ludanik.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;
