const list = document.getElementById("app-list");

apps.forEach(app => {
    list.innerHTML += `
    <div class="app">
        <div class="name">${app.name}</div>
        <a href="${app.file}" class="btn" download>Tải xuống</a>
    </div>
    `;
});
