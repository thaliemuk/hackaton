function goToPage(pageNumber) {
    let prevPage = pageNumber - 1;
    if (prevPage === 0) {
        prevPage = document.getElementsByClassName("nano-time").length;
    }
    document.querySelector(".nano-time.page-" + prevPage).classList.add("hidden");
    document.querySelector(".nano-time.page-" + pageNumber).classList.remove("hidden");
}

function setSelected(e) {
    let selected = document.querySelector(".answer.selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    e.classList.add("selected");
}