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
