function openForm() {
  document.getElementById("formPopup").classList.add("active");
}

function closeForm() {
  document.getElementById("formPopup").classList.remove("active");
}


// Optional: handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-container form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for signing up! We’ll reach out to you soon.");
    form.reset();
    closeForm();
  });
});
