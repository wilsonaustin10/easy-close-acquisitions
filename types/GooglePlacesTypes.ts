export interface AddressData {
  formattedAddress: string;
  placeId: string;
  lat?: number;
  lng?: number;
  streetNumber?: string;
  streetName?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}