let data = [
  { name: "Bat", age: 15, grade: 11, balance: 130, gender: "male" },
  { name: "Tsetseg", age: 24, grade: 12, balance: 300, gender: "female" },
  { name: "Anu", age: 18, grade: 8, balance: 210, gender: "female" },
  { name: "Bold", age: 21, grade: 9, balance: 420, gender: "male" },
  { name: "Munhu", age: 29, grade: 10, balance: 410, gender: "male" },
  { name: "Ganaa", age: 4, grade: 11, balance: 132, gender: "female" },
];
function findAdultStudents(students) {
  let filtered = students.filter((student) => {
    return student.age > 18;
  });
  return filtered;
}
let result = findAdultStudents(data);
console.log("bodlogo1 = ", result);

///////////// Bodlogo2
function findgender(students, find) {
  let filtered = students.filter((student) => {
    return student.gender === find;
  });
  return filtered;
}

let result1 = findgender(data, "female");
console.log("bodlogo2 = ", result1);

///////////// Bodlogo3

function sortByage(students) {
  let sorted = students.sort((a, b) => {
    return b.age - a.age;
  });
  return sorted;
}
let result2 = sortByage(data);
console.log("bodlogo3 = ", result2);

///////////// Bodlogo4

function findbalance(students, balance) {
  let filtered = students.filter((student) => {
    return student.balance > balance;
  });
  return filtered;
}

let result3 = findbalance(data, "400");
console.log("bodlogo4 = ", result3);

///////////// Bodlogo5

///////////// Bodlogo6

// Нэг л products массив дээр ажиллана
let data1 = [
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
  let discount = products.filter((products) => {
    if (products.discountPercent > 0) {
      return products;
    }
  });
  return discount;
}
result110 = getDiscountedProducts(data1);
console.log("==========================", result110);

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getOutOfStockProducts(products) {
  // ...
}

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getExpensiveProducts(products) {
  // ...
}

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getComputers(products) {
  // ...
}

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
function filterByBrand(products, brandName) {
  // ...
}

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
const result6 = addIsHeavyFlag(data1);
console.log(result6);

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
function increasePriceByTenPercent(products) {
  // ...
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
function getCheapestProduct(products) {
  // ...
}

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
  // ...
}

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(products) {
  // ...
}

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getLowStockProducts(products) {
  // ...
}

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  // ...
}

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
function getNameAndPriceList(products) {
  // ...
}

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getHighlyRatedProducts(products) {
  // ...
}

// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
function addIdToProducts(products) {
  // ...
}
