import m from 'mithril';
import { bakery } from "../models/bakery";

let buy = {
    oninit: bakery.loadOrders,
    view: function() {
        return m("div.container", [
            m("h2", "Kom och köp!"),
            m("div.orders", bakery.currentOrders.map(function(order) {
                return m("div", [
                    m("span", order.name + ": " + order.order_items.reduce(function(string, oi) {
                        return string + " " +
                            oi.name + " " +
                            oi.amount + " st á " +
                            oi.price + " kr";
                    }, "")),
                    m("a", {
                        onclick: function() {
                            bakery.buy(order);
                        }
                    }, " -> Köp!")
                ]);
            }))
        ]);
    }
};

export { buy };
