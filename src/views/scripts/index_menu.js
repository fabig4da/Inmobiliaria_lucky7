window.onload = function () {
    let sidebar = document.querySelector(".sidebar");
    console.log(sidebar);
    let btn = document.querySelector("#btn");
    console.log(btn);
    btn.onclick = function () {
        sidebar.classList.toggle("active");
    };
};


