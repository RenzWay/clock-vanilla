export default class HomePage {
  render() {
    return `
        <section>
            <h1>Dashboard</h1>
            <a href="#/clock">clock</a>
            <a href="#/newclock">new</a>
        </section>
        `;
  }

  afterRender() {
    const pi = Math.PI;
    console.log(pi * 2);
  }
}
