import React from "react";
// const myNav = document.getElementById("myNav");
// const sticky = myNav.offsetTop;

// window.onscroll = function () {
//   stickyNav();
// };

// stickyNav = () => {
//   if (window.pageYOffset >= sticky) {
//     myNav.classList.add("sticky");
//   } else {
//     myNav.classList.remove("sticky");
//   }
// };

// const collapseNav = () => {
//   console.log(myNav.classList.contains("responsive"));
//   if (myNav.classList.contains("responsive")) {
//     myNav.classList.remove("responsive");
//   } else {
//     myNav.classList.add("responsive");
//   }
// };

const Navbar = () => {
      
  return (
    <div className="navbar" id="myNav">
    <div className="navRow">
      <a href="javascript:void(0);" className="icon ignore" onClick={collapseNav}>=</a>
      <a href="" className="ignore" id="logo">JB</a>
      <div className="ignore" id="spacer"></div>
    </div>
    <a href="#about">about</a>
    <a href="#projects">projects</a>
    <a href="./assets/pdf/JBResume.pdf">resume</a>
    <a href="#contact">contact</a>
    <a href="https://www.linkedin.com/in/j-brennan-dev"><i className="fab fa-linkedin"></i></a>
  </div>
  );
      
}

export default Navbar;