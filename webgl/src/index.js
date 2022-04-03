function main() {
  // Select the canvas dom element
  const canvas = document.querySelector("#glCanvas");
  // Initialize the gl instance
  let gl = canvas.getContext("webgl");

  // Check to see if gl is available/compatible
  if (gl == null) {
    alert("WebGL is not compatible with your current browser.");
  } else {
    // Sets a clear color
    gl.clearColor(0, 0, 0, 1);
    // Clears the color buffer
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
}

main()