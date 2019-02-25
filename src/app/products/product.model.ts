export class Product {
  public description: string;
  public imgUrl: string;
  public name: string;
  public availableAmount: number;
  public price: number;

  constructor(desc: string, imgUrl: string, name: string, availableAmount: number, price: number) {
    this.description = desc;
    this.imgUrl = imgUrl;
    this.name = name;
    this.availableAmount = availableAmount;
    this.price = price;
  }
}