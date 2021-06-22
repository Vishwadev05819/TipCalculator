handleChange = () => {
  let amount = +document.getElementById("amount").value;
  let tip = +document.getElementById("tip%").value;
  let people = +document.getElementById("people").value;
  console.log(amount, tip, people);
  if (amount  && people) {
    let tipPerPerson = ((amount /100)*tip);
    let totalPerPerson = (amount + tipPerPerson) / people;
    document.getElementById("tip").innerHTML = `$${tipPerPerson/ people}`;
    document.getElementById("total").innerHTML = `$${totalPerPerson}`;
  }
};
handleTipIncrement = (incr) => {
  let people = +document.getElementById("tip%").value;
  console.log(people, incr);
  if (incr === -1) {
    if (people === 0) {
      document.getElementById("tip%").value = 0;
    } else {
      document.getElementById("tip%").value = people + incr;
    }
  } else {
    document.getElementById("tip%").value = people + incr;
  }
  handleChange();
};
handlePeopleIncrement = (incr) => {
  let people = +document.getElementById("people").value;
  console.log(people, incr);
  if (incr === -1) {
    if (people === 0) {
      document.getElementById("people").value = 0;
    } else {
      document.getElementById("people").value = people + incr;
    }
  } else {
    document.getElementById("people").value = people + incr;
  }
  handleChange();
};
