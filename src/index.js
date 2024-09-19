window.loadMenu = (json) => {
  const obj = JSON.parse(json);
  console.log(obj);
  const menuItems = obj.data;
  const menu = document.getElementById("menu");

  // Clear previous menu items if any
  menu.innerHTML = "";

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
