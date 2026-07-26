fetch("apps.json", {
  cache: "no-store"
})
.then(res => res.json())
.then(apps => {
  const list = document.getElementById("app-list");

  apps.forEach(app => {
    const isExternal = app.file.startsWith("http");

    list.innerHTML += `
      <div class="app">
        <div class="name">${app.name}</div>
        <a href="${app.file}" class="btn"
           ${isExternal ? 'target="_blank" rel="noopener"' : 'download'}>
          Tải xuống
        </a>
      </div>
    `;
  });
});
