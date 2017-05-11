const Action = require('../../action/action');

class GetAxe extends Action {
  constructor() {
    super();

    this.cost = 2;
    this.in_range = false;

    this.add_precondition('axe exists', true);
    this.add_precondition('has axe',    false);

    this.add_effect('has axe', true);
  }

  is_in_range() {
    return this.in_range;
  }
}

module.exports = GetAxe;
