export function describeTemperature(celsius: number, raining: boolean): string {
  return 'It is ' + celsius + '°C and ' + (raining ? 'rainy' : 'dry') + '.';
}
