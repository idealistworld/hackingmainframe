function scrape() {
    alert(document.title)
    alert(document.querySelector(".paragraph-content").innerHTML);
    collectLog();
}


document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('start');
    // onClick's logic below:
    link.addEventListener('click', scrape);

});