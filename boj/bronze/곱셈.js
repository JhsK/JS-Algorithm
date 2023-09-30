// https://www.acmicpc.net/problem/2588

function multiplication(input) {
  const firstInput = input.split(" ")[0];
  const secondInput = input.split(" ")[1];

  for (let i = secondInput.length - 1; i >= 0; i--) {
    console.log(Number(firstInput * secondInput[i]));
  }
  console.log(Number(firstInput * secondInput));
}

multiplication("472 385");
