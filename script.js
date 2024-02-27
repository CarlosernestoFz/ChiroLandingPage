document.getElementById("emailButton").addEventListener("click", function() {
    var subject = "Appointment Request with Eric Miller Under Dr. Walters";
    var body = "I would like to request an appointment on (Date) at (Time) with Eric Miller under Dr. Walters. Thanks!";
  
    var mailtoLink = "mailto:askparkerclinics@parker.edu" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);
  
    window.location.href = mailtoLink;
  });
