function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
  
    // Randomize position across the width of the screen
    heart.style.left = `${Math.random() * window.innerWidth}px`;
  
    // Randomize size between 40px and 70px
    const size = Math.random() * 30 + 40;
    heart.style.height = `${size}px`;
  
    // Random pastel shades of red, pink, and soft rose
    const colors = [
      "hsl(0, 60%, 80%)",  // Pastel red
      "hsl(0, 100%, 90%)", // Light pink
      "hsl(360, 50%, 95%)", // White-pink
      "hsl(350, 70%, 80%)", // Deep pink
      "hsl(340, 90%, 85%)"  // Rose pink
    ];
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Randomize side-to-side movement (horizontal drifting)
    const sideMovement = Math.random() * 60 - 30; // Moves left or right by up to 30px
    heart.style.setProperty('--side-movement', `${sideMovement}px`);
  
    // Random animation delay for smoother variation
    const delay = Math.random() * 3;
    heart.style.setProperty('--i', delay);
  
    document.body.appendChild(heart);
  
    // Remove heart after animation ends
    setTimeout(() => {
      heart.remove();
    }, 7000); // Duration matches the float animation
  }
  
  // Create hearts at intervals
  setInterval(createHeart, 500); // Increase rate of hearts
  
  // Show message when the page loads
  window.addEventListener("load", () => {
    const message = document.querySelector(".message");
    message.style.display = "block";
    
    // Show the button with a delay
    const button = document.querySelector(".next-page-button");
    button.style.display = "block";
  });
  
  // Redirect to the next page on button click
  document.querySelector(".next-page-button").addEventListener("click", () => {
    window.location.href = "hehe.html"; // Redirect to the second page
  });
  