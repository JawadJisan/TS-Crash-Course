type Coordinate = readonly [latitude: number, longitude: number];
const dhaka: Coordinate = [23.8103, 90.4125];
const cities: readonly string[] = ['Dhaka', 'Sylhet'];
console.log(dhaka, cities);
export {};
