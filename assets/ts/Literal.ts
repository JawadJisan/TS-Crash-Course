// enum Colors{
//     "Red" = "red",
//     "Green" = "green",
//     "Blue" = "blue"
// }

// we can simplyfy using literal

type Colors = "red" | "green" | "blue";

const c: Colors = "red";
const d: Colors = "yellow";

//

type Methods = "GET" | "POST" | "DELETE";

const apiCall: Methods = "DELETE";
