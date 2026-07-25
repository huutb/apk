const list = document.getElementById("app-list");

apps.forEach(app => {
    list.innerHTML += `
    <div class="app">
        <div class="info">
            <h3>${app.name}</h3>
            <p>Phiên bản: ${app.version}</p>
            <p>Dung lượng: ${app.size}</p>
        </div>
        <a class="btn" href="${app.file}" download>Tải xuống</a>
    </div>
    `;
});
