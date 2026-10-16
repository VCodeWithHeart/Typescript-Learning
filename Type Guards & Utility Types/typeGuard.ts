// Type Guards

// function add(a: string, b: number | string) {
//     if(typeof a === typeof b){
//         return a + b
//     }
//     else{
//         return `${b} is a number type`
//     }
// }

// so this check is type narrowing (Type Guards)

// add("2",2)

// typeof and instanceof

class TvRemote {
  switchTvOff() {
    console.log("Switching off tv");
  }
}

class CarRemote {
  switchCarOff() {
    console.log("Switching off tv");
  }
}

function switchOffKaro(device: TvRemote | CarRemote) {
  if (device instanceof TvRemote) {
    device.switchTvOff();
  } else {
    device.switchCarOff();
  }
}
