let container = document.getElementById("searchResults");
let search = document.getElementById("searchInput");
let count = document.getElementById("selectDisplayCount");
let spinner = document.getElementById("spinner");
let msg = document.getElementById("msg");
msg.classList.add("mt-3");
let head = document.createElement("h1");
head.classList.add("col-12");
head.classList.add("text-left");
head.classList.add("heading");
let append = (data) => {
    for (let i of data) {
        let cont = document.createElement("div");
        cont.classList.add("col-6");
        let img = document.createElement("img");
        img.src = i.imageLink;
        let p = document.createElement("p");
        p.textContent = i.author;
        cont.appendChild(img);
        cont.appendChild(p);
        container.appendChild(cont);
    }
};
search.addEventListener("keydown", () => {
    if (event.key === "Enter") {
        msg.textContent = "";
        container.textContent = "";
        spinner.classList.toggle("d-none");
        let input = search.value;
        let size = count.value;
        let url = "https://apis.ccbp.in/book-store?title=" + input + "&maxResults=" + size;
        fetch(url).then(response => response.json())
            .then(jsonData => {
                let result = jsonData.search_results;
                if (result.length !== 0) {
                    msg.textContent = "Popular Books";
                    spinner.classList.toggle("d-none");
                    append(result);
                } else {
                    spinner.classList.toggle("d-none");
                    msg.textContent = "No Results Found";
                }
            });
    }
});
count.addEventListener("change", () => {
    msg.textContent = "";
    container.textContent = "";
    spinner.classList.toggle("d-none");
    let input = search.value;
    let size = count.value;
    let url = "https://apis.ccbp.in/book-store?title=" + input + "&maxResults=" + size;
    fetch(url).then(response => response.json())
        .then(jsonData => {
            let result = jsonData.search_results;
            if (result.length !== 0) {
                msg.textContent = "Popular Books";
                spinner.classList.toggle("d-none");
                append(result);
            } else {
                spinner.classList.toggle("d-none");
                msg.textContent = "No Results Found";
            }
        });
});