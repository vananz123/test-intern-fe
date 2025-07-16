import type { Product } from "@/types/product";

export  const ChangeCurrence = (number: number | undefined) => {
    if (number) {
        const formattedNumber = number.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        return formattedNumber;
    }
    return 0;
};

export function filterByPrice(products: Product[], range: number): Product[] {
  switch (range) {
    case 2:
      return products.filter(p => p.price < 500000);
    case 3:
      return products.filter(p => p.price >= 500000 && p.price <= 1000000);
    case 4:
      return products.filter(p => p.price > 1000000);
    default:
      return products;
  }
}
export function filterByName(products:Product[], name:string):Product[]{
    const filtered = products.filter((i)=>
      i.title.toLowerCase().includes(name.toLowerCase())
    )
    return filtered
}