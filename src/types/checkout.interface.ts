export interface Address {
  name: string;
  phone: string;
  city: string;
  postalCode: string;
  address: string;
}

export interface OrderRequest {
  address: Address;
  shippingMethod: string;
  selectedItemIds: number[];
}
