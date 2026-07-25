const list = document.getElementById("app-list");

apps.forEach(app => {
  list.innerHTML += `
    <div class="app">
        <img src="${app.icon}" class="icon">
        <div class="info">
            <h3>${app.name}</h3>
            <p>Phiên bản: ${app.version}</p>
            <p>Dung lượng: ${app.size}</p>
        </div>
        <a href="${app.file}" class="btn" download>Tải</a>
    </div>
  `;
});
