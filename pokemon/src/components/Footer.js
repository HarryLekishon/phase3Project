import React from 'react'
import '../App.css';

const Footer = () => {
  return (
    <div>
          <footer class="footer bg-dark py-5">
        <div class="container grid grid-3">

        <div>
            <h1>Review Games</h1>
            <p>Copyright &copy; 2022</p>
        </div>

        <div>
            <nav>
                <ul>
                    <li><a href="index.html"></a>Home</li>
                    <li><a href="features.html"></a>Features</li>
                    <li><a href="docs.html"></a>Docs</li>
                </ul>
            </nav>
        </div>

        <div class="social">
            <a href="#"><i class="fab fa-github fa-2x"></i></a>
            <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
        </div>

    </div>
    </footer>
    </div>
  )
}

export default Footer
