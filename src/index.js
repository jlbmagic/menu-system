window.loadMenu = (json) => {
  const obj = JSON.parse(json);
  console.log(obj);
  const { data: menuItems, orientation = "horizontal" } = obj; // Extract menu items and orientation
  const menu = document.getElementById("menu");

  // Clear previous menu items if any
  menu.innerHTML = "";

  // Add orientation class to menu container
  if (orientation === "horizontal") {
    menu.classList.add("menu-horizontal");
    menu.classList.remove("menu-vertical");
  } else {
    menu.classList.add("menu-vertical");
    menu.classList.remove("menu-horizontal");
  }

  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.innerHTML = item;
    menuItem.classList.add("menu-item");

    menuItem.onmouseover = () => {
      menuItem.classList.add("hovered");
    };

    menuItem.onmouseout = () => {
      menuItem.classList.remove("hovered");
    };

    menuItem.onclick = () => {
      alert(`You clicked on ${item}`);
    };

    menu.appendChild(menuItem);
  });
};
