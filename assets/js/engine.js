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

    const body = document.createElement("p")
    body.appendChild(document.createTextNode(project[0].desc))
    sectionForData.appendChild(body)

}
