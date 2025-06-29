$(document).ready(function () {
  // Initialize FlipClock
  var clock = $('#flipclock').FlipClock({
    clockFace: 'TwentyFourHourClock',
    showSeconds: true,
    autoStart: true
  });

  // Function to update the current date
  function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    $('#date').text(now.toLocaleDateString(undefined, options));
  }

  // Update date immediately and every 60 seconds
  updateDate();
  setInterval(updateDate, 60000);

  // Dynamically add the ClustrMaps script
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = 'clustrmaps';
  script.src = '//clustrmaps.com/map_v2.js?d=FCEx_R1QbsHAfae0MaYTzeNjyHpWR2agwxSu1MTipw4&cl=ffffff&w=a';

  // Append the script to the document body
  document.body.appendChild(script);
});
