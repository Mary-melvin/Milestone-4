const resumeForm=document.getElementById('resume-form')as HTMLInputElement|null;
const resumeOutput=document.getElementById('resume-display')as HTMLInputElement|null;
function generateResume(date:{
    name: string,
    email: string,
    education: string,
    experience: string,
    skills: string,
    description: string,
}){
    return`
    <h2>Generate Resume</h2>
    <p><string>Name:</string> ${date.name}</p>
    <p><string>Email:</string> ${date.email}</p>
    <p><string>Education:</string> ${date.education}</p>
    <p><string>Experience:</string> ${date.experience}</p>
    <p><string>Skills:</string> ${date.skills}</p>
    <p><string>Description:</string> ${date.description}</p>
    `
    ;
 }
 if (resumeForm && resumeOutput){
    resumeForm.addEventListener (`submit`, (event) => {
    event.preventDefault();


    const name=(document.getElementById(`name`)as HTMLInputElement).value;
    const email=(document.getElementById(`email`)as HTMLInputElement).value;
    const education=(document.getElementById(`education`)as HTMLInputElement).value;
    const experience=(document.getElementById(`experience`)as HTMLInputElement).value;
    const skills=(document.getElementById(`skills`)as HTMLInputElement).value;
    const description=(document.getElementById(`description`)as HTMLInputElement).value;

resumeOutput.innerHTML = generateResume ({name, email, education, experience, skills, description});

const editButton = document.getElementById (`editButton`)as HTMLButtonElement;
if (editButton) {
    editButton.addEventListener (`click`, () => {

        (document.getElementById(`name`) as HTMLInputElement).value = name;
        (document.getElementById(`email`) as HTMLInputElement).value = email;
        (document.getElementById(`education`) as HTMLInputElement).value = education;
        (document.getElementById(`experience`) as HTMLInputElement).value = experience;
        (document.getElementById(`skills`) as HTMLInputElement).value = skills;
        (document.getElementById(`description`) as HTMLInputElement).value = description;
       
        window.scrollTo ({top: 0, behavior: `smooth`});
    });
}
});
} else {
    console.error("Form or Output div not found in the DOM");
 };
