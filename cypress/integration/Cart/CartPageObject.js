export default class CartPageObject {
  cartConfig = require("../../fixtures/cartConfig.json");
  inventoryList = ".inventory_list";
  products = {
    backpack: {
      addToCart: "[data-test='add-to-cart-sauce-labs-backpack']",
      cartListPrice:
        ":nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price",
      cartListLabel: "#item_4_title_link > .inventory_item_name",
    },
    bikeLight: {
      addToCart: "[data-test='add-to-cart-sauce-labs-bike-light']",
      cartListPrice:
        ":nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price",
      cartListLabel: "#item_0_title_link > .inventory_item_name",
    },
  };
  productsCartList = ".cart_list";
  cart = ".shopping_cart_link";
  cartCount = ".shopping_cart_link span";
  checkout = "[data-test='checkout']";
  checkoutForm = {
    firstName: "[data-test='firstName']",
    lastName: "[data-test='lastName']",
    postCode: "[data-test='postalCode']",
  };
  continue = "[data-test='continue']";
  totalItem = ".summary_subtotal_label"
}
