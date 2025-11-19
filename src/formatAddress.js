/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function(addressInput) {
    const result = [
      addressInput.street,
      addressInput.house,
      addressInput.apartment,
      addressInput.city,
      addressInput.postalCode,
      addressInput.country
    ];
    
    return result.join(', ');
  };
};
