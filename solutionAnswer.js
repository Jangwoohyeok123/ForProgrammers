function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = [];
  let bridge_weight = 0;

  for (let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }

  const truck = truck_weights.shift();

  bridge.push(truck);
  bridge.shift();
  bridge_weight += truck;
  time++;

  while (bridge_weight !== 0) {
    const next_truck = truck_weights.shift();
    bridge_weight -= bridge.shift();
    if (next_truck + bridge_weight <= weight) {
      bridge.push(next_truck);
      bridge_weight += next_truck;
    } else {
      bridge.push(0);
      truck_weights.unshift(next_truck);
    }
    time++;
  }
  //경과한 시간
  return time;
}
