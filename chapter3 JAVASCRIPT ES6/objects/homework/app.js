const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV: Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
function rateProduct(productId, userId, rating) {
  let product = products.find((product) => product._id === productId);
  product.ratings.push({ userId, rate: rating });
  return products.push(product);
}
function averageRating(productId) {
  let product = products.find((product) => product._id === productId);
  if (product.ratings.length === 0) {
    return 0;
  }
  const sum = product.ratings.reduce((total, rating) => total + rating.rate, 0);
  return sum / product.ratings.length;
}
function likeProduct(productId, userId) {
  let product = products.find((product) => product._id === productId);
  if (product) {
    let userIndex = product.likes.indexOf(userId);
    if (userIndex === -1) {
      product.likes.push(userId);
      return products.push(product);
    } else {
      product.likes.splice(userIndex, 1);
      return products.push(product);
    }
  }
}
rateProduct("eedfcf", "Rdsgflms", 4.0);
console.log(products);
console.log(averageRating(eedfcf));
