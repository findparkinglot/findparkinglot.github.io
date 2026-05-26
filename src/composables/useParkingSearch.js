// 停車場名稱搜尋：在 MapDataList 與共筆停車點中模糊比對 name 與 description
export function searchParkings(mapDataList, query, limit = 20, communityParkings = []) {
  const q = (query || '').trim().toLowerCase()
  if (!q) return []

  const results = []

  // 1) 官方 KML 來源
  if (Array.isArray(mapDataList)) {
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
            isCommunity: false,
            // 簡易排名：name 命中優先；命中位置越前面越好
            score:
              (name.includes(q) ? 1000 : 0) - (name.indexOf(q) === -1 ? 0 : name.indexOf(q)),
          })
          if (results.length > 500) break
        }
      }
    }
  }

  // 2) 共筆停車點
  if (Array.isArray(communityParkings)) {
    for (const c of communityParkings) {
      const name = (c.name || '').toLowerCase()
      const desc = (c.description || '').toLowerCase()
      if (!name.includes(q) && !desc.includes(q)) continue
      const coords = Array.isArray(c.coordinates) ? c.coordinates : [null, null]
      if (coords[0] == null || coords[1] == null) continue
      results.push({
        groupName: '共筆停車點',
        name: c.name,
        description: c.description,
        icon: c.iconKey,
        geometry: coords,
        properties: {
          name: c.name,
          description: c.description,
          icon: c.iconKey,
        },
        isCommunity: true,
        community: c,
        // 共筆點權重略低於官方，避免覆蓋官方資料；同名時官方優先
        score:
          (name.includes(q) ? 900 : 0) - (name.indexOf(q) === -1 ? 0 : name.indexOf(q)),
      })
      if (results.length > 500) break
    }
  }

  results.sort((a, b) => b.score - a.score)
  return results.slice(0, limit)
}
