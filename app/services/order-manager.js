import Ember from 'ember';

export default Ember.Service.extend({
    selectedDay: 'Monday',
    menuSelection: {
        Monday: { isSelected: false },
        Tuesday: { isSelected: false },
        Wednesday: { isSelected: false },
        Thursday: { isSelected: false },
        Friday: { isSelected: false },
        Saturday: { isSelected: false },
        Sunday: { isSelected: false }
    },
    menuIsOpen: false,

    setSelectedDayTo(day) {
        this.set(`menuSelection.${this.get('selectedDay')}.isSelected`, false);
        this.set('selectedDay', day);
        this.set(`menuSelection.${this.get('selectedDay')}.isSelected`, true);
    },

    chooseMenuOption(mealCategory, menuItemName) {
        var meal = this.get(
            `menuSelection.${this.get('selectedDay')}.${mealCategory}`
        );

        if (typeof meal === 'undefined' || !meal) {
            meal = [];
        }

        if (meal.filter(item => item === menuItemName).length === 0) {
            meal.pushObject(menuItemName);
        }

        this.set(
            `menuSelection.${this.get('selectedDay')}.${mealCategory}`,
            meal
        );
    },

    toggleMenu(value) {
        if (typeof value === 'undefined' || !value) {
            const isOpen = this.get('menuIsOpen');
            if (isOpen) {
                Ember.$('html').removeClass('disable-scroll');
            } else {
                Ember.$('html').addClass('disable-scroll');
            }
            this.set('menuIsOpen', !isOpen);
        } else {
            switch (value) {
                case 'open':
                    this.set('menuIsOpen', true);
                    Ember.$('html').addClass('disable-scroll');
                    break;
                case 'close':
                    this.set('menuIsOpen', false);
                    Ember.$('html').removeClass('disable-scroll');
                    break;
                default:
                    break;
            }
        }
    },

    removeMenuOption(day, mealCategory, menuItemName) {
        var meal = this.get(
            `menuSelection.${this.get('selectedDay')}.${mealCategory}`
        );

        this.set(
            `menuSelection.${day}.${mealCategory}`,
            meal.filter(item => item !== menuItemName)
        );
    }
});
