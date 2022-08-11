(function () {
  'use strict';

  let httpRequest = new XMLHttpRequest();

  httpRequest.open('get', './data/menu.json');

  httpRequest.send();

  httpRequest.onload = function () {

    if (this.readyState == 4 && this.status == 200) {
      const items = JSON.parse(this.responseText);
      let output = '';

      items.forEach((item, i) => {
        const categoryName = item.category;
        const menuItemsByCategory = item.items;
        let menuItems = '';

        menuItemsByCategory.forEach(menuItem => {
          menuItems += `
            <li>
              <div class="details">
                <h3>${menuItem.title}</h3>
                <p class="description">${menuItem.description}</p>
              </div>
              <strong class="price">${menuItem.price}</strong>
            </li>
          `;
        });

        output +=`
          <section>
            <h2>${categoryName}</h2>
            <ul>
              ${menuItems}
            </ul>
          </section>
        `;
      });

      document.querySelector('body').innerHTML += output;
    }
  }

})();