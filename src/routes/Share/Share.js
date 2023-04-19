import React from 'react'
import "./style.css";
function Share() {
  return (
    <div>
    <div class="container">
        <button class="share-btn">
            <i class="fas fa-share-alt"></i>
        </button>
        <div class="share-options">
            <p class="title">share</p>
            <div class="social-media">
                <button class="social-media-btn"><i class="far fa-folder-open"></i></button>
                <button class="social-media-btn"><i class="fab fa-whatsapp"></i></button>
                <button class="social-media-btn"><i class="fab fa-instagram"></i></button>
                <button class="social-media-btn"><i class="fab fa-twitter"></i></button>
                <button class="social-media-btn"><i class="fab fa-facebook-f"></i></button>
                <button class="social-media-btn"><i class="fab fa-linkedin-in"></i></button>
            </div>
            <div class="link-container">
                <p class="link">https://example.com/share</p>
                <button class="copy-btn">copy</button>
            </div>
        </div>
    </div>

    <script src="app.js"></script>
    </div>
  )
}

export default Share