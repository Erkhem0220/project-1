// Нэг л products массив дээр ажиллана
let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];

// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getDiscountedProducts(products) {
  let discount = products.filter((product) => {
    if (product.discountPercent > 0) {
      return product;
    }
  });
  return discount;
}
result = getDiscountedProducts(data);
console.log("bodlogo1", result);

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getOutOfStockProducts(products) {
  let stock = products.filter((product) => {
    if (product.stock > 0) {
      return product;
    }
  });
  return stock;
}
result1 = getOutOfStockProducts(data);
console.log("bodlogo2", result1);

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getExpensiveProducts(products) {
  let expensive = products.filter((product) => {
    if (product.price < 1000000) {
      return product;
    }
  });
  return expensive;
}
result2 = getExpensiveProducts(data);
console.log("bodlogo3", result2);

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getComputers(products) {
  let computer = products.filter((product) => {
    if (product.category < "Computers") {
      return product;
    }
  });
  return computer;
}
result3 = getComputers(data);
console.log("bodlogo4", result3);

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
function filterByBrand(products, brand) {
  let bybrand = products.filter((product) => {
    if (product.brand === brand) {
      return product;
    }
  });
  return bybrand;
}
result4 = filterByBrand(data, "Dell");
console.log("bodlogo5", result4);

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
function addIsHeavyFlag(products) {
  products.map((product) => {
    if (product.weight > 1) {
      product.isHeavy = true;
    } else {
      product.isHeavy = false;
    }
  });
  return products;
}
const result6 = addIsHeavyFlag(data);
console.log("bodlogo6", result6);

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
function increasePriceByTenPercent(products, target) {
  let increasePrice = products.map((product) => {});
}

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
function addFinalPrice(products) {
  // ...
}

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
function getTopRatedProduct(products) {
  // ...
}

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
function getCheapestProduct(products) {}

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
function getTotalStock(products) {
  // ...
}

// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
function getTotalPrice(products) {
  // ...
}

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
function filterBySupplier(products, supplierName) {
  // ...
}

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
function getProductNames(products) {
  let productName = products.map((products) => {
    return { name: product.name };
  });
  return productName;
}
result14 = getProductNames(data);
console.log("Bodlogo14", result14);

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(products) {
  // ...
}

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getLowStockProducts(products) {
  let lowStock = products.map((product) => {
    if (product.stock <= 5) {
      return { name: product.name };
    }
  });
  return lowStock;
}
result16 = getLowStockProducts(data);
console.log("Bodlogo16", result16);

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  let arrSuppliers = products.map((product) => {
    return product.supplier;
  });
  let uniqueSuppliers = [];
  arrSuppliers.forEach((supplier) => {
    if (uniqueSuppliers.includes(supplier)) {
    } else {
      uniqueSuppliers.push(supplier);
    }
  });
  return uniqueSuppliers;
}
const resultUniqueSuppliers = getUniqueSuppliers(data);
console.log("Bodlogo17", resultUniqueSuppliers);

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
function getNameAndPriceList(products) {
  let nameAndprice = products.map((product) => {
    return { name: product.name, price: product.price };
  });
  return nameAndprice;
}
result18 = getNameAndPriceList(data);
console.log("Bodlog18", result18);

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getHighlyRatedProducts(products) {
  let highRated = products.filter((product) => {
    if (product.rating > 4.5) {
      return product;
    }
  });
  return highRated;
}
result19 = getHighlyRatedProducts(data);
console.log("Bodlogo19", result19);

// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
function addIdToProducts(products) {
  let addid;
}
