function getResultByPath(path, obj) {
  const flat = flattenObj(obj);
  return flat[path]; 
}

function flattenObj(obj, prefix = '', out = {}) {
  for (let [key, value] of Object.entries(obj)) {
    let prop = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      flattenObj(value, prop, out);
    } else {
      out[prop] = value;
    }
  }
  return out;
}

const path = "data.results.error";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "my error",
    }
  },
};

console.log(getResultByPath(path, obj)); // Output: "completed"