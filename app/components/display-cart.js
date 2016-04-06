import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),

  cartTotal: function() {
   var total = 0;
   this.get('shoppingCart.items').forEach(function(item)
   {
    console.log(item.get('price'));
    total += parseFloat(item.get('price'));
  });
  return total;
  }.property('shoppingCart.items@each.price'),
});
