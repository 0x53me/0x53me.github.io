const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click" , () =>{
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation="";
        }else{
        link.style.animation = `navLinksFade 0.5s ease ${index/7 + 0.3}s forwards`;
        }
    });
    burger.classList.toggle("toggle");
});




// 目次を自動生成するスクリプト
document.addEventListener("DOMContentLoaded", function() {
    const tocList = document.getElementById("toc-list");
    const headers = document.querySelectorAll("h2"); // h2タグを取得

    headers.forEach((header, index) => {
        const id = "section" + (index + 1);
        header.id = id; // idを追加

        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + id;
        a.textContent = header.textContent;
        li.appendChild(a);
        tocList.appendChild(li);
    });
});
