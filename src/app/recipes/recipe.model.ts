export class Recipe {
  private name: string;
  private description: string;
  private imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
  public getName(): string {
    return this.name;
  }
  public getDescription(): string {
    return this.description;
  }
  public getImagePath(): string {
    return this.imagePath;
  }
}
