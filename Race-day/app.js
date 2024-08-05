let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
const registeredEarly = true;

let age = 22;


if (registeredEarly && age > 18) {
  console.log((raceNumber += 1000));
}

if (registeredEarly && age > 18) {
  console.log(
    `Attention athlete number ${raceNumber}, your race will start at exactly 9:30 am`
  );
} else if (!registeredEarly && age > 18) {
  console.log(
    `Attention athlete number ${raceNumber}, your race will start at exactly 11:00 am`
  );
} else if (age < 18) {
  console.log(
    `Attention athlete number ${raceNumber}, your race will start at exactly 12:30 pm`
  );
} else {
  console.log(
    `Please see the registration desk for you race number and race time`
  );
}
