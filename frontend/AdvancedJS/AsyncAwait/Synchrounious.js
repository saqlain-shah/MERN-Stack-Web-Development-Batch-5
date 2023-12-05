function Greetings() {
  setTimeout(() => {
    console.log("Hello");
  }, 1000);
}

function func1() {
  const greet = Greetings();

  console.log(`${greet} from Function 1`);
}
function func2() {
  console.log("from Function 2");
}

func1();
func2();
