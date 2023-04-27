export function toDeg(rad) {
    return rad / Math.PI * 180
}

export function toRad(deg) {
    return deg / 180 * Math.PI
}

export function rangesOverlap(arrays, range) {
    console.log("rangesOverlap()")
    console.log(arrays)
    console.log(range)
    for (let i = 0; i < arrays.length; i++) {
        let [lower1, upper1] = arrays[i]
        let [lower2, upper2] = range

        // check if the ranges overlap without wrapping around
        if (lower1 <= upper2 && lower2 <= upper1) {
            return true
        }

        // check if the ranges overlap while wrapping around
        if (lower1 > upper1 && (lower2 <= upper1 || lower1 <= upper2)) {
            return true
        }
        if (lower2 > upper2 && (lower1 <= upper2 || lower2 <= upper1)) {
            return true
        }
    }
    return false
}

export function rangesOverlap2(arrays, range) {
    console.log("rangesOverlap()")
    console.log(arrays)
    console.log(range)
    for (let i = 0; i < arrays.length; i++) {
        let [lower1, upper1] = arrays[i];
        let [lower2, upper2] = range;
    
        // check if the ranges overlap without wrapping around
        if (lower1 <= upper2 && lower2 <= upper1) {
          return true;
        }
    
        // check if the ranges overlap while wrapping around
        let wrap1 = upper1 < lower1 ? 2 * Math.PI : 0;
        let wrap2 = upper2 < lower2 ? 2 * Math.PI : 0;
    
        let wrappedLower1 = lower1 + wrap1;
        let wrappedUpper1 = upper1 + wrap1;
        let wrappedLower2 = lower2 + wrap2;
        let wrappedUpper2 = upper2 + wrap2;
    
        if (wrappedUpper1 >= wrappedLower2 && wrappedLower1 <= wrappedUpper2) {
          return true;
        }
      }
      return false;
    }

export function rangeOverlap(range1, range2) {
    let [lower1, upper1] = range1
    let [lower2, upper2] = range2

    // check if the ranges overlap without wrapping around
    if (lower1 <= upper2 && lower2 <= upper1) {
        return true
    }

    // check if the ranges overlap while wrapping around
    if (lower1 > upper1 && (lower2 <= upper1 || lower1 <= upper2)) {
        return true
    }
    if (lower2 > upper2 && (lower1 <= upper2 || lower2 <= upper1)) {
        return true
    }
    return false
}