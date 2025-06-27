import { router } from "../router/router.js";
import getActivePathname from "../router/url-parser.js";

export default class App {
  constructor({ content }) {
    this.content = content;
  }

  async renderPage() {
    const getRouter = getActivePathname();
    const url = router[getRouter];

    const content = this.content;
    const page = new url();

    content.innerHTML = await page.render();
    if (typeof page.afterRender === "function") {
      await page.afterRender();
    }
  }
}
