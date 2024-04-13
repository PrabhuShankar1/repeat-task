function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function setAlarm() {
  var alarmTime = document.getElementById("alarmTime").value;
  var currentTime = new Date();
  var alarmDateTime = new Date(alarmTime);

  if (alarmDateTime < currentTime) {
    alert("Please enter a future time.");
    return;
  }

  var timeToAlarm = alarmDateTime - currentTime;
  var alarmListItem = document.createElement("li");
  alarmListItem.textContent = "Alarm set for: " + alarmDateTime.toLocaleString();
  document.getElementById("alarmsList").appendChild(alarmListItem);

  setTimeout(function() {
    alert("Alarm!");
    alarmListItem.remove();
  }, timeToAlarm);
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
