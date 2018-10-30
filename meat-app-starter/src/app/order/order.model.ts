class Order {
  constructor(
    public id: string,
    public address: string,
    public number: number,
    public optionAddress: string,
    public paymentOption: string,
    public orderItems: OrdemItem[] = []
  ) {
  }
}

class OrdemItem {
  constructor(public quantity: number, public menuId: string) {
  }
}

export {Order, OrdemItem}
