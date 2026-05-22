// 停車場名稱搜尋：在 MapDataList 中模糊比對 name 與 description
export function searchParkings(mapDataList, query, limit = 20) {
  const q = (query || '').trim().toLowerCase()
  if (!q || !Array.isArray(mapDataList)) return []

  const results = []
  for (const group of mapDataList) {
    for (const f of group.features) {
      const name = (f.properties.name || '').toLowerCase()
      const desc = (f.properties.description || '').toLowerCase()
      if (name.includes(q) || desc.includes(q)) {
        results.push({
          groupName: group.name,
          name: f.properties.name,
          description: f.properties.description,
          icon: f.properties.icon,
          geometry: f.geometry.coordinates,
          properties: f.properties,
          // 簡易排名：name 命中優先；命中位置越前面越好
          score:
            (name.includes(q) ? 1000 : 0) - (name.indexOf(q) === -1 ? 0 : name.indexOf(q)),
        })
        if (results.length > 500) break
      }
    }
  }

  results.sort((a, b) => b.score - a.score)
  return results.slice(0, limit)
}
