function d1() {
    f1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore praesentium quidem aliquid, repellat vel totam inventore at labore cupiditate, illo unde tempore sint voluptatibus obcaecati magni voluptates et quas?";
}
function d2() {
    f2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore praesentium quidem aliquid, repellat vel totam inventore at labore cupiditate, illo unde tempore sint voluptatibus obcaecati magni voluptates et quas?";
}
function d3() {
    f3.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore praesentium quidem aliquid, repellat vel totam inventore at labore cupiditate, illo unde tempore sint voluptatibus obcaecati magni voluptates et quas?";

}
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");

b1.addEventListener("click", d1);
b2.addEventListener("click", d2);
b3.addEventListener("click", d3);
