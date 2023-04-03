const data = `{
  "data": [
    {
      "id": 1,
      "name": "Anders Andersson",
      "address": "Andersgatan 1",
      "zip": "12345",
      "city": "Anderstorp",
      "country": "Sweden",
      "status": "Ny",
      "status_id": 100,
      "order_items": [
        {
          "product_id": 1,
          "amount": 2,
          "article_number": "1214-RNT",
          "name": "Skruv M14",
          "description": "Skruv M14, värmförsinkad",
          "specifiers": "{'length' : '60mm', 'width' : '14mm'}",
          "stock": 12,
          "location": "A1B4",
          "price": 10
        },
        {
          "product_id": 2,
          "amount": 3,
          "article_number": "1212-RNT",
          "name": "Skruv M12",
          "description": "Skruv M12, värmförsinkad",
          "specifiers": "{'length' : '60mm', 'width' : '12mm'}",
          "stock": 14,
          "location": "A1B5",
          "price": 10
        }
      ]
    },
    {
      "id": 2,
      "name": "Bengt Bengtsson",
      "address": "Bengtsgatan 2",
      "zip": "23457",
      "city": "Bengtfors",
      "country": "Sweden",
      "status": "Ny",
      "status_id": 100,
      "order_items": [
        {
          "product_id": 3,
          "amount": 4,
          "article_number": "1210-RNT",
          "name": "Skruv M10",
          "description": "Skruv M10, värmförsinkad",
          "specifiers": "{'length' : '60mm', 'width' : '10mm'}",
          "stock": 20,
          "location": "A1B6",
          "price": 10
        }
      ]
    },
    {
      "id": 3,
      "name": "Nora Norrby",
      "address": "Norasgatan 3",
      "zip": "34567",
      "city": "Nora",
      "country": "Sweden",
      "status": "Ny",
      "status_id": 100,
      "order_items": [
        {
          "product_id": 6,
          "amount": 5,
          "article_number": "1214-TNT",
          "name": "Mutter M14",
          "description": "Mutter M14, värmförsinkad, passar 1214-RNT",
          "specifiers": "{'diameter' : '14mm'}",
          "stock": 13,
          "location": "A1C4",
          "price": 10
        }
      ]
    },
    {
      "id": 4,
      "name": "Ulla Ullman Davidsson",
      "address": "Ullasallén 4",
      "zip": "45678",
      "city": "Ullared",
      "country": "Sweden",
      "status": "Ny",
      "status_id": 100,
      "order_items": [
        {
          "product_id": 8,
          "amount": 6,
          "article_number": "1210-TNT",
          "name": "Mutter M10",
          "description": "Mutter M10, värmförsinkad, passar 1210-RNT",
          "specifiers": "{'diameter' : '10mm'}",
          "stock": 12,
          "location": "A1C4",
          "price": 10
        }
      ]
    }
  ]
}`;


(function IIFE() {
    console.log("ready");

    const parsedData = JSON.parse(data);

    const filteredArray = parsedData.data.filter((order) => {
        return order.id <= 2;
    });

    console.log(filteredArray);

    const mappedArray = parsedData.data.map((order) => order.name);

    console.log(mappedArray);

    const totalSum = parsedData.data[0].order_items.reduce(
        (sum, oi) => sum + (oi.amount * oi.price),
        0
    );

    console.log(totalSum);
})();
