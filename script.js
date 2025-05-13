// Event Handling

// Button Click
document.getElementById('clickButton').addEventListener('click', () => {
    alert('Button was clicked!');
  });
  
  // Keypress Detection
  document.getElementById('keypressInput').addEventListener('keyup', (event) => {
    console.log(`Key pressed: ${event.key}`);
  });
  
  // Hover Effects
  const hoverText = document.getElementById('hoverText');
  hoverText.addEventListener('mouseover', () => {
    hoverText.style.backgroundColor = '#ddd';
  });
  hoverText.addEventListener('mouseout', () => {
    hoverText.style.backgroundColor = '#e7e7e7';
  });
  
  // Interactive Elements
  
  // Change Button Color
  document.getElementById('colorButton').addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('colorButton').style.backgroundColor = randomColor;
  });
  
  // Image Gallery Hover Effect
  const images = document.querySelectorAll('#imageGallery img');
  images.forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
  
  // Tabs Functionality
  const tabButtons = document.querySelectorAll('.tabButton');
  const tabContents = document.querySelectorAll('.tabContent');
  
  tabButtons.forEach
  ::contentReference[oaicite:0]{index=0}
   
  
