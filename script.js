const list = document.getElementById("app-list");

apps.forEach(app => {
    list.innerHTML += `
    <div class="app">
        <span class="name">${app.name}</span>
        <a href="${app.file}" class="btn" download>Tải xuống</a>
    </div>
    `;
});
