function change(event) {
    var parent=event.target.parentNode;
    var image=parent.querySelector("img");
    var heading=parent.querySelector(".info");
    console.log(heading.innerHTML);
    console.log(image.src);
    console.log(event.target.nodeName);
    console.log(parent.nodeName);
    var x=document.createElement("div");
    x.className="cart-element";
    x.innerHTML=`  <img src="${image.src}" alt="image">
    <p class="cart-element-description">${heading.innerHTML}</p>
    <p class="cart-element-price">$15</p>
    <button>X</button>`;
    var remote=document.getElementById("function-div");
    remote.appendChild(x);
    x.appendChild(y);
    var y=document.getElementsByClassName("hi");
}