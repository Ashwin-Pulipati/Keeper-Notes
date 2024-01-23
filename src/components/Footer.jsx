import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div class="footer-container">
        <div class="social-icons">
          <a href="mailto:ashwinpulipati@gmail.com">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a href="mailto:ashwinpulipati@gmail.com">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:ashwinpulipati@gmail.com">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a
            href="https://github.com/Ashwin-Pulipati/Keeper-Notes"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="mailto:ashwinpulipati@gmail.com">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ashwin-pulipati-7792841b2/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div class="copyright">
          <p>
            Copyright &copy;
            {new Date().getFullYear()}. All Rights Reserved by{" "}
            <a href="./HTML/contact.html" target="_blank">
              Ashwin Pulipati
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
