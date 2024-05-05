// Featured Projects Loading
function loadProjects() {
    // console.log("here");

    const featuredProjectsDiv = document.getElementById("featuredprojects");

    projects.forEach((project) => {
        // create html dom element
        const a = document.createElement("a");
        a.href = `project.html?tag=${project.tag}`;

        const img = document.createElement("img");
        img.src = `./assets/media/${project.img}`;
        img.alt = project.alt;

        // append
        a.appendChild(img);
        featuredProjectsDiv.appendChild(a);
    });
}

// Load Project Info Detail Page
function loadProjectDetail() {
    // get the tag in the url
    var url_string = window.location;
    var url = new URL(url_string);
    var tag = url.searchParams.get("tag");

    // get specific project data
    var project = projects.filter((obj) => {
        return obj.tag == tag;
    });

    // if there are no specific projects, send them back
    if (project.length < 1) {
        window.location.href = "home.html";
    }

    const sectionForData = document.getElementById("projectinfo");

    // create dom elements
    const img = document.createElement("img");
    img.src = `./assets/media/${project[0].img}`;
    img.alt = project[0].alt;
    sectionForData.appendChild(img)

    const title = document.createElement("h1")
    title.appendChild(document.createTextNode(project[0].name))
    sectionForData.appendChild(title)

    if (project[0].link != null) {
        const link = document.createElement("a")
        link.href = project[0].link
        link.appendChild(document.createTextNode(`Take a look at ${project[0].name}`))
        link.setAttribute('target', '_blank');
        sectionForData.appendChild(link)
    }
    if (project[0].github != null) {
        const github = document.createElement("a")
        github.href = project[0].github
        github.appendChild(document.createTextNode(`Take a look at the Github`))
        github.setAttribute('target', '_blank');
        sectionForData.appendChild(github)
    }
    if (project[0].githubIOS != null) {
        const github = document.createElement("a")
        github.href = project[0].githubIOS
        github.appendChild(document.createTextNode(`Take a look at the Github for IOS`))
        github.setAttribute('target', '_blank');
        sectionForData.appendChild(github)
    }
    if (project[0].githubAndroid != null) {
        const github = document.createElement("a")
        github.href = project[0].githubAndroid
        github.appendChild(document.createTextNode(`Take a look at the Github for Android`))
        github.setAttribute('target', '_blank');
        sectionForData.appendChild(github)
    }

    const body = document.createElement("p")
    body.appendChild(document.createTextNode(project[0].desc))
    sectionForData.appendChild(body)

}
