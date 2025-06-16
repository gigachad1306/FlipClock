$(document).ready(function () {
  var clock = $('#flipclock').FlipClock({
    clockFace: 'TwentyFourHourClock',
    showSeconds: true,
    autoStart: true
  });

  function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    $('#date').text(now.toLocaleDateString(undefined, options));
  }

  updateDate();
  setInterval(updateDate, 60000);
});