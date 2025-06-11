let downloadClicked = false;

const allSkills = [
    {
    skillId: 1,
    skillList: "Java, Spring Boot, JDBC"
    },
    {
    skillId: 2,
    skillList: "OOP, Full-stack development"
    },
    {
    skillId: 3,
    skillList: "HTML, CSS, JavaScript, Vue.js"
    },
    {
    skillId: 4,
    skillList: "PostgreSQL, IntelliJ, Git, Agile"
    },
    {
    skillId: 5,
    skillList: "Unit Testing, E/R Diagrams, Integration Testing, Table Design"
    },
    {
    skillId: 6,
    skillList: "AWS Cloud fundamentals, AWS Core Services, AWS Security and compliance"
    },
    {
    skillId: 7,
    skillList: "AWS Networking, AWS Management tools"
    }, 
    {
    skillId: 8,
    skillList: "PC building, Sales & Marketing"
    }
];

function displaySkills() {
    let allLists = document.querySelectorAll('li.skill_list');
    let i = 0;
    allLists.forEach(list => {
        list.textContent = allSkills[i].skillList;
        i++;
    });
}

function clickDownload() {
    downloadClicked = true;
}

function download() {
    const resumeRef = document.createElement('a');
    resumeRef.href = "Addison_Doseck_Resume_FS2.pdf";
    resumeRef.download = "Addison_Doseck_Resume_FS2.pdf";
    document.body.appendChild(resumeRef);
    if(downloadClicked) {
        resumeRef.click();
        downloadClicked = false;
    }
    document.body.removeChild(resumeRef);
}

function displayMaps() {
    let googleMaps = "https://www.google.es/maps/place/Columbus,+OH/@39.9825546,-83.3204514,10z/data=!3m1!4b1!4m6!3m5!1s0x883889c1b990de71:0xe43266f8cfb1b533!8m2!3d39.9625112!4d-83.0032218!16zL20vMDFzbW0?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D";
    window.open(googleMaps);
}

function displayGmail() {
    let gmailWindow = "https://mail.google.com";
    window.open(gmailWindow);
}


// add event listener for when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    //adds skills to the html file/replaces its content
    displaySkills();

    //click event listener to download resume
    document.querySelector('.downloadBtn').addEventListener('click', () => {
        clickDownload();
        download();
    });

    //dblclick event listener to navigate to google maps in another window
    const myLocation = document.querySelector('.location');
    myLocation.addEventListener('dblclick',() => {
        displayMaps();
    });

    //copy event listener that opens gmail for them when someone tries to copy the gmail text
    const gmail = document.querySelector('.email');
    gmail.addEventListener('copy',() => {
        displayGmail();
    });
});
  