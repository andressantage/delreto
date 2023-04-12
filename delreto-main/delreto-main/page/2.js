function d1() {
    f.innerHTML = "AAAAALorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore praesentium quidem aliquid, repellat vel totam inventore at labore cupiditate, illo unde tempore sint voluptatibus obcaecati magni voluptates et quas?";
}
function d2() {
    f.innerHTML = "BBBBLorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore praesentium quidem aliquid, repellat vel totam inventore at labore cupiditate, illo unde tempore sint voluptatibus obcaecati magni voluptates et quas?";
}
function d3() {
    f.innerHTML = "CCCCLorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore praesentium quidem aliquid, repellat vel totam inventore at labore cupiditate, illo unde tempore sint voluptatibus obcaecati magni voluptates et quas?";

}
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var f = document.getElementById("f");


b1.addEventListener("click", d1);
b2.addEventListener("click", d2);
b3.addEventListener("click", d3);
