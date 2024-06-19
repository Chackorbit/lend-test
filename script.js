function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
  document.addEventListener("keydown", escClosePopup);
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
  document.removeEventListener("keydown", escClosePopup);
}

function showEmailPopup() {
  closePopup("popup1");
  showPopup("popup2");
}

function sendEmail() {
  var email = document.getElementById("emailInput").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailPattern.test(email)) {
    alert(
      "Дякую за емейл. Очікуйте інформацію про доступ на Вашу пошту: " + email
    );
    closePopup("popup2");
  } else {
    alert("Будь ласка, введіть дійсну адресу e-mail.");
  }
}

function escClosePopup(event) {
  if (event.key === "Escape") {
    closePopup("popup1");
    closePopup("popup2");
  }
}

function closeOnOutsideClick(event) {
  if (event.target.classList.contains("popup")) {
    closePopup("popup1");
    closePopup("popup2");
  }
}

document.addEventListener("click", closeOnOutsideClick);
