
function goToPage(pageNumber){
	let prevPage = pageNumber - 1;
	document.querySelector(".nano-time.page-"+prevPage).classList.add("hidden");
	document.querySelector(".nano-time.page-"+pageNumber).classList.remove("hidden");
}