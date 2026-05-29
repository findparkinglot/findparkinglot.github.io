// Marker 顯示判斷邏輯：分類、友善程度、價格範圍

// typeKeys / friendlyKeys 為 null 或空陣列代表「全部」 (不過濾)。
export function shouldShowByIcon(icon, typeKeys, friendlyKeys) {
  if (!icon) return false
  const matchType = !typeKeys || typeKeys.length === 0 || typeKeys.indexOf(icon) !== -1
  const matchFri = !friendlyKeys || friendlyKeys.length === 0 || friendlyKeys.indexOf(icon) !== -1
  return matchType && matchFri
}

export function shouldShowByPrice(priceInfo, priceArray, priceType, min, max) {
  if (!priceType) return true
  if (priceType === 'free') return /Free/.test(priceInfo)

  // h: 計時 /h、d: 計次 /日 (/d)、t: 計次 / 不限時 (/次)
  const unitRegex =
    priceType === 'h' ? /\/h/ :
    priceType === 'd' ? /\/d/ :
    priceType === 't' ? /\/次/ :
    null
  if (!unitRegex || !unitRegex.test(priceInfo)) return false

  for (const item of priceArray) {
    if (unitRegex.test(item)) {
      const price = Number(item.replace(/[^0-9]/g, ''))
      if (price >= min && price <= max) return true
    }
  }
  return false
}

export function isCoordInBounds(bounds, coord) {
  if (!bounds) return false
  const sw = bounds.getSouthWest ? bounds.getSouthWest() : bounds._sw
  const ne = bounds.getNorthEast ? bounds.getNorthEast() : bounds._ne
  const lng = Number(coord[0])
  const lat = Number(coord[1])
  return sw.lng < lng && ne.lng > lng && sw.lat < lat && ne.lat > lat
}
