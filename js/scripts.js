
function goToPage(pageNumber){
	let prevPage = pageNumber - 1;
	if(prevPage === 0){
		prevPage = document.querySelector(".nano-time").length;
	}
	document.querySelector(".nano-time.page-"+prevPage).classList.add("hidden");
	document.querySelector(".nano-time.page-"+pageNumber).classList.remove("hidden");
}