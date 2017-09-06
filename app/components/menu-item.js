import Ember from 'ember';

export default Ember.Component.extend({
    orderManager: Ember.inject.service('order-manager'),
    tagName: 'li',
    classNames: ['menu-item'],

    actions: {
        chooseItem(menuItemName, mealCategory) {
            this.get('orderManager').chooseMenuOption(
                mealCategory,
                menuItemName
            );
        }
    }
});
