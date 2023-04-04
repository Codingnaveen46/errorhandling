function filterProductsByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  const products = [
    { id: 1, name: 'Product 1', category: 'Category A' },
    { id: 2, name: 'Product 2', category: 'Category B' },
    { id: 3, name: 'Product 3', category: 'Category A' },
    { id: 4, name: 'Product 4', category: 'Category C' },
  ];
  
  const filterByCategory = filterProductsByCategory(products);
  
  const categoryAProducts = filterByCategory('Category A');
  console.log(categoryAProducts);
  // Output: [{ id: 1, name: 'Product 1', category: 'Category A' }, { id: 3, name: 'Product 3', category: 'Category A' }]
  
  const categoryBProducts = filterByCategory('Category B');
  console.log(categoryBProducts);
  // Output: [{ id: 2, name: 'Product 2', category: 'Category B' }]
    