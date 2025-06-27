import App from "./app/app.js";

document.addEventListener("DOMContentLoaded", async function () {
  const content = document.getElementById("content");
  const app = new App({ content });

  await app.renderPage();

  window.addEventListener("hashchange", async function () {
    await app.renderPage();
  });
});
