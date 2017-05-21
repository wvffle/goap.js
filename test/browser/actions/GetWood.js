class GetWood extends BasicAction {
  constructor() {
    super(storage);

    this.add_precondition('storage.wood', v => v >= 3);

    this.add_effect('storage.wood', v => v - 3);
    this.add_effect('blacksmith.wood', v => v + 3);
  }
}