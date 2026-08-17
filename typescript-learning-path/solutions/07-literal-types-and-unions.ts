export type TrafficLight = 'red' | 'yellow' | 'green';
export function nextLight(light: TrafficLight): TrafficLight {
  if (light === 'red') return 'green';
  if (light === 'green') return 'yellow';
  return 'red';
}
