function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(cname) {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function formatDate(date) {
  let str = Date(date).toString();

  // this should be safe since nothing else in the date string contains a opening paren
  let index = str.indexOf(" (");

  // if the index exists
  if (~index) {
    str = str.substr(0, index);
  }
  return str;
}
const formatTime = (time) => {
  let num = time;
  let hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  var varhours = rhours + "." + rminutes;
  console.log("Var Hours", varhours);
  return varhours;
};

export { setCookie, getCookie, deleteCookie, formatDate, formatTime };
