var resumeForm = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-display');
function generateResume(date) {
    return "\n    <h2>Generate Resume</h2>\n    <p><string>Name:</string> ".concat(date.name, "</p>\n    <p><string>Email:</string> ").concat(date.email, "</p>\n    <p><string>Education:</string> ").concat(date.education, "</p>\n    <p><string>Experience:</string> ").concat(date.experience, "</p>\n    <p><string>Skills:</string> ").concat(date.skills, "</p>\n    <p><string>Description:</string> ").concat(date.description, "</p>\n    ");
}
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        var description = document.getElementById("description").value;
        resumeOutput.innerHTML = generateResume({ name: name, email: email, education: education, experience: experience, skills: skills, description: description });
        var editButton = document.getElementById("editButton");
        if (editButton) {
            editButton.addEventListener("click", function () {
                document.getElementById("name").value = name;
                document.getElementById("email").value = email;
                document.getElementById("education").value = education;
                document.getElementById("experience").value = experience;
                document.getElementById("skills").value = skills;
                document.getElementById("description").value = description;
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    });
}
else {
    console.error("Form or Output div not found in the DOM");
}
;
