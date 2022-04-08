
const container = document.querySelector(".container");

const limit = 10;
const dividend = 3

for (let i=1; i <= limit; i++){
  const boxEl = document.createElement("div");
  boxEl.className = "box";
  boxEl.append(i)
  // if(i % dividend === 0){
  //   console.log(i);
  // };
  if(!(i % dividend)) {
    boxEl.classList.add("box-yellow")
  }

  container.append(boxEl)

}