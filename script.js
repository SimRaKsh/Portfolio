function updateDateTime() {
  const now = new Date();

  // Format date
  const day = now.getDate();
  const month = now.toLocaleString('en-GB', { month: 'long' });
  const year = now.getFullYear();
  const weekday = now.toLocaleString('en-GB', { weekday: 'short' });

  const dateString = `${day} ${month}, ${weekday}`;
  const timeString = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  document.getElementById('date').textContent = dateString;
  document.getElementById('time').textContent = timeString;

  // Show sun or moon based on hour
  const hour = now.getHours();
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');

}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call

// Show dialog only if screen width is less than 768px (mobile)
    window.onload = function () {
      if (window.innerWidth < 768) {
        document.getElementById("mobile-dialog").style.display = "flex";
      }
    };

    function closeDialog() {
      document.getElementById("mobile-dialog").style.display = "none";
    }

    function redirectToDesktop() {
      // Redirect or close tab
      window.location.href = "https://www.google.com"; // Change to desktop homepage or a warning page
    }
