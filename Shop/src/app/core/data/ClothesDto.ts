export class ClothesDto {

    _id?: string;
    name?: string;
    image?: string;
    price?: number;
    description?: string;
  
    constructor(init?: Partial<ClothesDto>) {
      if (init) Object.assign(this, init)
    }
  }
  