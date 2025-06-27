export default class NewClock {
  render() {
    return `
            <section id="newClockPage">
                <a href="/">home</a>
                <canvas width="300px" height="300px" id="canvas"></canvas>
            </section>
        `;
  }

  afterRender() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(150, 150, 90, 0 , 2 * Math.PI);
    ctx.stroke();
  }
}
