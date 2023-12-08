function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

async function msg() {
  const msg = await helloWorld();
  console.log(`${msg} from msg function`);
}

function msg1() {
  console.log(" msg1 function");
}

msg();
msg1();
