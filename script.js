fetch("apps.json", {
  cache: "no-store"
})
.then(res => res.json())
.then(apps => {
  const list = document.getElementById("app-list");

  apps.forEach(app => {
    list.innerHTML += `
      <div class="app">
        <div class="name">${app.name}</div>
        <a href="${app.file}" class="btn" download>Tải xuống</a>
      </div>
    `;
  });
});
