export default {
  productsByCategory: state => (type, category) => state.products.filter(product => product.type === type && product.categories.includes(category)),
  productById: state => id => state.products.find(product => product.id === id),
  productsByType: state => type => state.products.filter(product => product.type === type),
}