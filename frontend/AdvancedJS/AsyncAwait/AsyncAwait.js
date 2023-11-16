function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 5000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log("Message:", msg);
}
msg();
