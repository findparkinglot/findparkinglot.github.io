<script setup>
import { onMounted, ref } from 'vue'
import MapBox from './components/MapBox.vue'

import xml from '@/assets/MapData/My Maps/PackingMarkerList/doc.xml'
console.log(xml);

const MapDataList = ref([])

const findIcon = (iconMapId) => {
  let icon = '';

  for (const key in xml.kml.Document[0].StyleMap) {
    let id = xml.kml.Document[0].StyleMap[key].$.id;
    if(id == iconMapId.replace('#','')){
      icon = xml.kml.Document[0].StyleMap[key].Pair[0].styleUrl[0];
      break;
    }
  }

  for (const key in xml.kml.Document[0].Style) {
    let id = xml.kml.Document[0].Style[key].$.id;
    if(id == icon.replace('#','')){
      icon = xml.kml.Document[0].Style[key].IconStyle[0].Icon[0].href[0].replace('images/','');
      break;
    }
  }

  return icon;
}

const MapDataInit = () =>{
  console.log(xml.kml.Document[0]);

  let _cateData = xml.kml.Document[0].Folder.map((folder)=>{
    return {
      name: folder.name[0],
      features: folder.Placemark.map((place)=>{
        var parts = place.Point[0].coordinates[0].trim().split(',');
        return {
          properties:{
            name: place.name[0],
            description: place.description?place.description[0]:'',
            icon: findIcon(place.styleUrl[0]),
          },
          geometry: {
            coordinates: [parts[0],parts[1]]
          }
        }
      }),
    }
  })

  MapDataList.value = _cateData;

  console.log(MapDataList.value);
}


const getIconImgUrl = (url) => {
  if(url.match('http')){
    return url;
  }else{
    return new URL(`/src/assets/MapData/My Maps/PackingMarkerList/images/${url}`, import.meta.url).href
  }
}

const mapStyle = [
  {
    name: "暗色模式",
    value: "mapbox://styles/jamestim9215/ckvkdj5cd1q4115nzwxa9rny3",
  }, //客製化
  {
    name: "亮色模式",
    value: "mapbox://styles/jamestim9215/ckvueghhu2woc14nrsgysx41v",
  }, //客製化

  // { name: "Streets", value: "mapbox://styles/mapbox/streets-v11"},                      //Streets
  // { name: "Outdoors", value: "mapbox://styles/mapbox/outdoors-v11"},                    //Outdoors
  // { name: "Light", value: "mapbox://styles/mapbox/light-v10"},                          //Light
  // { name: "Dark", value: "mapbox://styles/mapbox/dark-v10"},                            //Dark
  // { name: "Satellite", value: "mapbox://styles/mapbox/satellite-v9"},                   //Satellite
  // { name: "Satellite Streets", value: "mapbox://styles/mapbox/satellite-streets-v11"},  //Satellite Streets
  // { name: "Navigation Day", value: "mapbox://styles/mapbox/navigation-day-v1"},         //Navigation Day
  // { name: "Navigation Night", value: "mapbox://styles/mapbox/navigation-night-v1"}      //Navigation Night
]

const mapOptions = ref({
  getLngLat: false,
  mapStylesSelected: "mapbox://styles/jamestim9215/ckvkdj5cd1q4115nzwxa9rny3",
})
const windowMessageOpen = ref(true)
const windowMobileFAQOpen = ref(false)
const windowFAQOpen = ref(false)
const menuActive = ref(false)
const infoActive = ref(false)
const parkingName = ref("")
const parkingNameDes = ref("")
const parkingType = ref("")
const parkingIcon = ref("")

const onSetParkingInfo = (data) => {
  console.log(data);
  parkingName.value = data.properties.name;
  parkingNameDes.value = data.properties.description;
  parkingType.value = data.name;
  parkingIcon.value = getIconImgUrl(data.properties.icon);
  infoActive.value = true;
}

onMounted(() => {
  MapDataInit()
})


</script>

<template>

  <div class="appTitle">
    <h1>重機能停哪?</h1>
  </div>
  <!-- <button
    class="btn btnGetLngLat"
    @click="
      mapOptions.getLngLat
        ? (mapOptions.getLngLat = false)
        : (mapOptions.getLngLat = true)
    "
    :class="mapOptions.getLngLat ? 'active' : ''"
  >
    {{ mapOptions.getLngLat ? "結束取得座標" : "手動取得座標" }}
  </button> -->
  <button
    class="btn btnMobileFAQ"
    @click="windowMobileFAQOpen ? (windowMobileFAQOpen = false) : (windowMobileFAQOpen = true)"
  >
    如何加入手機桌面?
  </button>
  <button
    class="btn btnFAQ"
    @click="windowFAQOpen ? (windowFAQOpen = false) : (windowFAQOpen = true)"
  >
    教學 地圖怎麼看?
  </button>

  

  <pre id="coordinates" class="coordinates"></pre>

  <MapBox 
    :mapDataList="MapDataList"
    :getLngLat="mapOptions.getLngLat"
    :mapStylesSelected="mapOptions.mapStylesSelected"
    @parkingInfo="onSetParkingInfo"
  />

  
  <div class="window-box-cover" v-if="windowFAQOpen">
    <div class="window-box">
      <h3 style="text-align: left">地圖怎麼看?</h3>
      <h4 style="text-align: left">
        圖案代表甚麼格位
      </h4>
      <h5 style="text-align: left">
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-1.png" alt="">
          汽車：汽車格(含未確認是否有重機格)
        </div>
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-3.png" alt="">
          機(有人)：有設重機專用格
        </div>
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-10.png" alt="">
          機車(沒人)：機車格
        </div>
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-16.png" alt="">
          綠P：重機專用路邊停車格
        </div>
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-17.png" alt="">
          黃P：重機與汽車共享路邊停車格(黃P共享格不再更新，四輪爺不在乎，形同虛設)
        </div>
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-18.png" alt="">
          紫P：時段性汽機車共用停車格，注意使用時間喔!
        </div>
      </h5>
      <br />
      <h4 style="text-align: left">
        顏色代表入場方式
      </h4>
      <h5 style="text-align: left">
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-1.png" alt="">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-3.png" alt="">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-10.png" alt="">
          綠色最友善：有後牌辨析
        </div>
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-6.png" alt="">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-9.png" alt="">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-13.png" alt="">
          藍色最傳統：悠遊卡 或 按鈕取票
        </div>
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-2.png" alt="">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-5.png" alt="">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-11.png" alt="">
          紅色最靠北：按鈕請管理員協助 或 倒退嚕前牌辨析
        </div>
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-7.png" alt="">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-4.png" alt="">
          <!-- <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-10.png" alt=""> -->
          灰色未確定：有可能是上述任何情況，有停到灰色的拜託表單回報
        </div>
      </h5>
      <br />
      <h4 style="text-align: left">
        名稱前有價錢
      </h4>
      <h5 style="text-align: left">
        <div class="faq-content">
          <img src="@/assets/MapData/My Maps/PackingMarkerList/images/icon-3.png" alt="">
          (30/h)三張里地下停車場
        </div>
        <div class="faq-content">
          - 數字：金額，時段費率複雜的場地，會以最高收費標示<br>
          - d/h：計費方式，d為計次，h為計時<br>
          - Free 代表免錢        
        </div>
      </h5>
      <br />
      <button class="btn" @click="windowFAQOpen = false">確定</button>
    </div>
  </div>
  
  <div class="window-box-cover" v-if="windowMobileFAQOpen">
    <div class="window-box">
      <h3 style="margin-bottom: 15px; text-align: left">如何加入手機桌面?</h3>
      <br />
      <h4 style="text-align: left">
        p.s.<br />以下以IOS為範例 安卓系統大同小異 <br /><br />

        Step 1. 使用 Safari 開啟網站 並點擊下方分享按鈕
        <img width="100%" src="@/assets/images/ios_01.jpg" alt="" />
        <br />
        Step 2. 加入主畫面
        <img width="100%" src="@/assets/images/ios_02.jpg" alt="" />
        <br />
        Step 3. 儲存
        <img width="100%" src="@/assets/images/ios_03.jpg" alt="" />
        <br />
        Step 4. 即可在桌面開啟 並無網頁狀態列
        <img width="100%" src="@/assets/images/ios_04.jpg" alt="" />
        <br />
      </h4>
      <br />
      <button class="btn" @click="windowMobileFAQOpen = false">確定</button>
    </div>
  </div>
  <div class="window-box-cover" v-if="windowMessageOpen">
    <div class="window-box">
      <h3 style="margin-bottom: 15px; text-align: left">
        嗨!歡迎使用 <b style="color: #2ee7d6">重機能停哪?</b> <br /><br />
        目前資料處於"<b style="color: #2ee7d6">測試階段</b>", 停車資訊僅供參考  <br /><br />
        <!-- 目前資料處於 "<b style="color: #2ee7d6">測試階段</b>" ，
        除了有圖片的地點， 其餘地點皆為"<b style="color: #2ee7d6">僅供參考</b
        >"， 歡迎車友們可以使用<b
          ><a
            href="https://forms.gle/iJCyfqVtpL35WtZM7"
            style="color: #2ee7d6"
            target="_blank"
            >錯誤資訊回報</a
          ></b
        >或是<b
          ><a
            href="https://forms.gle/siWoYMo9PtxAk38w9"
            style="color: #2ee7d6"
            target="_blank"
            >提供停車場資訊</a
          ></b
        >表單， 有了大家的幫忙! 以後就能方便車友們查詢到正確的地點停車~<br /><br /> -->

        <!-- p.s.<br />
        目前規劃 此系統免費提供給大家使用!!<br /> -->
        <!-- 如果覺得不錯，可以請我喝杯<a href="https://paypal.me/jamestim9215?country.x=TW&locale.x=zh_TW" style="color:#2ee7d6" target="_blank">咖啡</a>‧<br><br> -->
        <!-- 如果覺得不錯，可以請我喝杯<a href="https://payment.opay.tw/Broadcaster/Donate/C9169C214B7D9633A239CBB7D3CB9251" style="color:#2ee7d6" target="_blank">咖啡</a>‧<br><br> -->


        謝謝!
      </h3>

      <button class="btn" @click="windowMessageOpen = false">確定</button>
    </div>
  </div>

  <!-- 設定 -->
  <div class="mainInfoBox" :class="menuActive ? 'active' : ''">
    <div
      class="menuBtn"
      @click="menuActive ? (menuActive = false) : (menuActive = true)"
      :class="menuActive ? 'active' : ''"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h3 style="padding: 0 25px 0 0">設定</h3>

    <h5>地圖樣式</h5>
    <select
      style="width: 100%; margin-bottom: 0px"
      :value="mapOptions.mapStylesSelected"
      v-model="mapOptions.mapStylesSelected"
    >
      <option
        :value="key.value"
        v-for="(key, index) in mapStyle"
        :key="index"
      >
        {{ key.name }}
      </option>
    </select>

    <h5 style="padding: 10px 0 0 0">資料來源</h5>
    <a href="https://linktr.ee/hueythegentry" target="_blank">
      <button class="btn" style="font-size: 10px; margin: 0 5px 5px 0">
        大重停車記事
      </button>
    </a>

    <!-- <h5 style="margin-top: 10px; margin-bottom: 10px">回報</h5> -->
    <!-- <a href="https://forms.gle/siWoYMo9PtxAk38w9" target="_blank"
      ><button class="btn" style="font-size: 10px; margin: 0 5px 5px 0">
        提供停車場資訊
      </button></a
    > -->
    <!-- <a href="https://forms.gle/iJCyfqVtpL35WtZM7" target="_blank"
      ><button class="btn" style="font-size: 10px; margin: 0 5px 5px 0">
        錯誤資訊回報
      </button></a
    > -->

    <!-- <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-format="fluid"
      data-ad-layout-key="-fb+5w+4e-db+86"
      data-ad-client="ca-pub-6596839701234097"
      data-ad-slot="5429225032"
    ></ins> -->
  </div>

  

  <!-- 停車場資訊 -->
  <div
    class="mainInfoBox mainInfoBox2"
    id="mainInfoBox2"
    :class="infoActive ? 'active' : ''"
  >
    <div
      class="menuBtn"
      @click="infoActive = false"
      :style="infoActive ? '' : 'opacity: 0'"
      :class="infoActive ? 'active' : ''"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h3 id="parkingLotTitle" style="padding: 0 25px 0 0">
      
      <!-- 名稱: -->
      <div id="parkingName">
        <img :src="parkingIcon" alt="">
        {{ parkingName }}
      </div>
    </h3>
    <div v-if="parkingNameDes" style="margin-top: 5px;">
      <!-- 內容: -->
      <div v-html="parkingNameDes"></div>
    </div>
    <div style="margin-top: 5px;color: #666;font-size: 12px;">
      {{ parkingType }}
    </div>
  </div>
</template>

<style scoped>

</style>
