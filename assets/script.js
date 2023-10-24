// let body=document.querySelector('body')

// // console.log(body);
// // setTimeout(()=>{
// //     body.style.backgroundColor = 'yellow'
// // },5000)
// let button = document.getElementById('submit')
// console.log(button[0]);

// button.onclick=()=>{
//     body.style.backgroundColor='black'
// }

// let body = document.querySelector("body");
// let div = document.createElement("div");
// let btn = document.createElement("button");
// let btn2 = document.createElement("button");
// btn.textContent = "submit";
// btn2.textContent = "submit";
// div.style.width = "200px";
// div.style.marginLeft = '200px'
// div.style.marginTop = '200px'
// div.style.position = "relative";
// div.style.height = "200px";
// btn.style.position = "absolute";
// btn2.style.position = "absolute";
// btn2.style.bottom = '0'
// btn.style.top = '0'
// div.style.backgroundColor = "red";

// body.append(div);
// div.append(btn);
// div.append(btn2);
// btn.onclick = () => {
//   div.style.width = "400px";
//   div.style.height = "400px";
//   div.style.backgroundColor = "yellow";
//   div.style.transform = 'rotate(90deg)'
//   div.style.transition = '1s'
// };
// btn2.onclick = () => {
//     div.style.width = "200px";
//     div.style.height = "200px";
//     div.style.backgroundColor = "red";
//     div.style.transform = 'rotate(0)'
//     div.style.transition = '1s'
//   };

// 1
// let h1 = document.getElementById("ilkin");
// h1.onclick = () => {
// //   alert('salam ilkin')
//   h1.style.color='red'

//   h1.classList.add("ehmedov");
// //   console.log(h1);
// //   h1.classList.toggle('ucar')
// //   console.log(h1);
// // alert(h1.textContent)

// };
// let a = document.querySelectorAll("a");
// console.log(a);
// a.forEach(
//   (x) =>
//     (x.onclick = () => {
//       alert(x.textContent);
//     })
// );

let body = document.querySelector("body");
// let div = document.createElement("div");
// div.style.width = "200px";
// div.style.height = "200px";
// div.style.backgroundColor = "yellow";
// body.append(div);
let btn = document.createElement("button");
btn.textContent="submit"
body.append(btn)
btn.onclick = () => {
  let text = prompt("enter the name of element");
  let div2 = document.createElement(text);
  div2.style.width = "200px";
  div2.style.height = "200px";
  div2.style.backgroundColor = "orange";
  div2.innerText = 'salam'
  div2.style.display = 'flex'
  div2.style.justifyContent = 'center'
  div2.style.alignItems = 'center'
  body.append(div2);
  div2.onclick=()=>{
    div2.classList.toggle('line')
  }
};
