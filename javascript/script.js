function constructorProject() {
    const $projects = document.querySelector('#projects ul');

    for (id in links) {
        $projects.innerHTML += `
            <li>
                <img src="${links[id].img}">
                <div>
                    <h3>${links[id].text[0]}</h3>
                    <p>
                        ${links[id].text[1]}
                    </p>
                    <a href="${links[id].web}" target="_blank">
                        Dar uma olhada
                    </a>
                </div>
            </li>
        `
    }
}

constructorProject();