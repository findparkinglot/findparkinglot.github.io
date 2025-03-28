<script setup>
import { onMounted, ref, watch } from 'vue'
import MapBox from './components/MapBox.vue'

import xml from '@/assets/MapData/My Maps/PackingMarkerList/doc.xml'
// console.log(xml);

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const isApple = /iPhone|iPad|iPod/i.test(navigator.userAgent)

const MapDataList = ref([])

const findIcon = (iconMapId) => {
  let icon = '';

  let num = 0;

  for (const key in xml.kml.Document[0].StyleMap) {
    let id = xml.kml.Document[0].StyleMap[key].$.id;
    if(id == iconMapId.replace('#','')){
      icon = xml.kml.Document[0].StyleMap[key].Pair[0].styleUrl[0];
      break;
    }
    num++;
  }

  if(xml.kml.Document[0].StyleMap.length == num){
    icon = iconMapId;
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

const getPriceAndType = (place) => {
  // console.log(place);
  let priceType = place.split('(')[1].split(')')[0].replace(/ /g,'');
  // let priceType = '';
  let priceArray =  priceType.split('|');

  if(priceArray.length>0){
    priceArray[0].match(/---|--/)? priceArray = [] : priceArray = priceArray;
  }
  if(priceArray.length>0){
    priceArray[0].match(/-/)? priceArray =  priceArray[0].split('-') : priceArray = priceArray;
  }

  let _data = {
    priceType: priceType,
    priceValue: priceArray,
  }
  return _data
}

const MapDataInit = () =>{

  let _cateData = xml.kml.Document[0].Folder.map((folder)=>{
    return {
      name: folder.name[0],
      features: folder.Placemark.map((place)=>{
        var parts = place.Point[0].coordinates[0].trim().split(',');
        let priceInfo = getPriceAndType(place.name[0]);
      
        return {
          properties:{
            name: place.name[0],
            description: place.description?place.description[0]:'',
            iconId: place.styleUrl[0],
            icon: findIcon(place.styleUrl[0]),
            priceInfo: priceInfo.priceType,
            priceArray: priceInfo.priceValue,
          },
          geometry: {
            coordinates: [parts[0],parts[1]]
          }
        }
      }),
    }
  })

  MapDataList.value = _cateData;
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
const themeType = ref(0)
const mapOptions = ref({
  getLngLat: false,
  mapStylesSelected: "mapbox://styles/jamestim9215/ckvkdj5cd1q4115nzwxa9rny3",
})

if(localStorage.getItem('mapStyles') == '亮色模式'){
  mapOptions.value.mapStylesSelected = mapStyle[1].value;
  themeType.value = 1;
  document.body.classList.add('light-theme');
}else{
  mapOptions.value.mapStylesSelected = mapStyle[0].value;
  themeType.value = 0;
  document.body.classList.remove('light-theme');
}

const windowMessageOpen = ref(true)

// if(localStorage.getItem('isReadFirstMessage') && localStorage.getItem('isReadFirstMessage') == 'true'){
//   windowMessageOpen.value = false;
// }

const closeMesBox = () => {
  windowMessageOpen.value = false;
  localStorage.setItem('isReadFirstMessage', 'true');
}

const windowMobileFAQOpen = ref(false)
const windowFAQOpen = ref(false)
const windowHowToUseOpen = ref(false)
const windowShareOpen = ref(false)
const menuActive = ref(false)
const infoActive = ref(false)
const stepsOpen = ref(false)
const stepShow = ref(true)

const ParkingInfo = ref({
  parkingName: '',
  parkingNameDes: '',
  parkingType: '',
  parkingIcon: '',
  geometry: [null,null],
  address: '',
})

const onSetParkingInfo = (data) => {
  console.log(data);
  ParkingInfo.value.parkingName = data.properties.name;
  ParkingInfo.value.parkingNameDes = data.properties.description;
  ParkingInfo.value.parkingType = data.name;
  ParkingInfo.value.parkingIcon = getIconImgUrl(data.properties.icon);
  ParkingInfo.value.geometry = data.geometry;
  ParkingInfo.value.address = data.address;
  infoActive.value = true;
}

const parkingType = ref("")
const parkingTypeList = ref([
  {
    name: "全部",
    value: "",
    key: [
      "icon-1.png",
      "icon-2.png",
      "icon-3.png",
      "icon-4.png",
      "icon-5.png",
      "icon-6.png",
      "icon-7.png",
      "icon-8.png",
      "icon-9.png",
      "icon-10.png",
      "icon-11.png",
      "icon-12.png",
      "icon-13.png",
      "icon-14.png",
      "icon-15.png",
      "icon-16.png",
      "icon-17.png",
      "icon-18.png",
      "icon-19.png",
    ]
  },
  {
    name: "汽車：汽車格(含未確認是否有重機格)",
    value: "car",
    key: [
      "icon-1.png",
      "icon-3.png",
      "icon-5.png",
      "icon-6.png"
    ]
  },
  {
    name: "重機：有設重機專用格",
    value: "motorcycle",
    key: [
      "icon-2.png",
      "icon-4.png",
      "icon-7.png",
      "icon-8.png"
    ]
  },
  {
    name: "機車：機車格",
    value: "scooter",
    key: [
      "icon-9.png",
      "icon-10.png",
      "icon-13.png",
    ]
  },
  {
    name: "綠P:重機專用路邊停車格",
    value: "greenP",
    key: [
      "icon-15.png",
    ]
  },
  {
    name: "黃P:重機與汽車共享路邊停車格",
    value: "yellowP",
    key: [
      "icon-16.png",
    ]
  },
  {
    name: "紫P:時段性汽機車共用停車格，注意使用時間喔!",
    value: "purpleP",
    key: [
      "icon-17.png",
    ]
  },
  {
    name: "紅X:停都不給停",
    value: "redX",
    key: [
      "icon-12.png",
    ]
  },
  {
    name: "施工中",
    value: "fix",
    key: [
      "icon-14.png",
    ]
  },

])

const degreeOfFriendliness = ref("")
const degreeOfFriendlinessList = ref([
  {
    name: "全部",
    value: "",
    key: [
      "icon-1.png",
      "icon-2.png",
      "icon-3.png",
      "icon-4.png",
      "icon-5.png",
      "icon-6.png",
      "icon-7.png",
      "icon-8.png",
      "icon-9.png",
      "icon-10.png",
      "icon-11.png",
      "icon-12.png",
      "icon-13.png",
      "icon-14.png",
      "icon-15.png",
      "icon-16.png",
      "icon-17.png",
      "icon-18.png",
      "icon-19.png",
    ]
  },
  {
    name: "最友善：有後牌辨析",
    value: "friendly",
    key: [
      "icon-2.png",
      "icon-3.png",
      "icon-9.png",
      "icon-15.png",
    ]
  },
  {
    name: "最傳統：悠遊卡、按鈕取票",
    value: "normal",
    key: [
      "icon-5.png",
      "icon-8.png",
      "icon-11.png",
      "icon-13.png",
    ]
  },
  {
    name: "最靠北：按鈕請管理員協助、前牌辨析",
    value: "unfriendly",
    key: [
      "icon-1.png",
      "icon-7.png",
      "icon-10.png",
      "icon-12.png",
    ]
  },
  {
    name: "未確定",
    value: "unknown",
    key: [
      "icon-4.png",
      "icon-6.png",
    ]
  },
])

const parkingPriceType = ref("") //  h:hour d:day m:month
const priceRangeMin = ref(0)
const priceRangeMax = ref(100)

const goToParkingPlaceData = ref(null);
const routeData = ref(null)

const goToParkingPlace = (geometry) => {
  goToParkingPlaceData.value = geometry;
  infoActive.value = false;
  routeData.value = null;
}

const openInMap = (type,geometry) => {
  let url = '';
  if(type == 'apple'){
    url = `http://maps.apple.com/?daddr=${geometry[1]},${geometry[0]}&dirflg=d&t=m`
  }else if(type == 'google'){
    url = `https://www.google.com/maps/dir/?api=1&destination=${geometry[1]},${geometry[0]}&travelmode=driving`
  }
  window.open(url, '_blank');
}

const loadAd = (id) => {
  let str = '.ad-id-'+id;
  let adContainers = document.querySelectorAll(str);
  console.log(adContainers);
  for(let i=0; i<adContainers.length; i++){
    let ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', 'ca-pub-6596839701234097');
    ins.setAttribute('data-ad-slot', id);
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');
    adContainers[i].appendChild(ins);
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
}

onMounted(() => {
  MapDataInit();
  loadAd('5885589098');
})

const shareLinkHandler = (type) => {
  let url = 'https://findparkinglot.github.io/';
  let text = '重機能停哪?';
  let shareUrl = '';

  if(type == 'facebook'){
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;t=`;
  }else if(type == 'line'){
    shareUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;
  }else if(type == 'twitter'){
    shareUrl = `https://twitter.com/share?url=${url}&amp;via=`;
  }

  if(type == 'link'){
    navigator.clipboard.writeText(url).then(function() {
      alert('已複製連結');
    }, function(err) {
      alert('複製失敗');
    });
  }else{
    window.open(shareUrl, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  }
}



watch(() => routeData.value , (val) => {
  if(val!=null){
    stepsOpen.value = true;
  }else{
    stepsOpen.value = false;
  }
})

watch(() => mapOptions.value.mapStylesSelected , (val) => {
  console.log(val);

  mapStyle.map((item)=>{
    if(item.value == val){
      localStorage.setItem('mapStyles', item.name);
      if(item.name == '亮色模式'){
        themeType.value = 1;
        document.body.classList.add('light-theme');
      }else{
        themeType.value = 0;
        document.body.classList.remove('light-theme');
      }
    }
  })

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
    v-show="!stepsOpen"
  >
    <span class="material-icons-outlined">help_outline</span> [教學]加到手機桌面
  </button>
  <button
    class="btn btnFAQ"
    @click="windowFAQOpen ? (windowFAQOpen = false) : (windowFAQOpen = true)"
    v-show="!stepsOpen"
  >
    <span class="material-icons-outlined">help_outline</span> [教學]地圖怎麼看
  </button>

  <button
    class="btn btnHowToUse"
    @click="windowHowToUseOpen ? (windowHowToUseOpen = false) : (windowHowToUseOpen = true)"
    v-show="!stepsOpen"
  >
    <span class="material-icons-outlined">help_outline</span> [教學]怎麼用
  </button>

  <button
    class="btn btnShare btnFocus"
    @click="windowShareOpen ? (windowShareOpen = false) : (windowShareOpen = true)"
    v-show="!stepsOpen"
  >
    <span class="material-icons-outlined">share</span> 分享
  </button>

  

  <pre id="coordinates" class="coordinates"></pre>

  <MapBox 
    :parkingTypeKeyArray="parkingTypeList.filter((item)=>item.value == parkingType)[0].key"
    :degreeOfFriendlinessKeyArray="degreeOfFriendlinessList.filter((item)=>item.value == degreeOfFriendliness)[0].key"
    :mapDataList="MapDataList"
    :getLngLat="mapOptions.getLngLat"
    :mapStylesSelected="mapOptions.mapStylesSelected"
    :parkingPriceType="parkingPriceType"
    :priceRangeMin="priceRangeMin"
    :priceRangeMax="priceRangeMax"
    v-model:goToParkingPlaceData="goToParkingPlaceData"
    v-model:routeData="routeData"
    @parkingInfo="onSetParkingInfo"
  />

  <!-- 路線 -->
  <div class="mainInfoBox mainInfoBox2" :class="stepsOpen ? 'active' : ''" style="z-index:1000">
    <!-- <div
      class="menuBtn"
      @click="stepsOpen ? (stepsOpen = false) : (stepsOpen = true)"
      :class="stepsOpen ? 'active' : ''"
      v-show="stepsOpen"
    >
      <div></div>
      <div></div>
      <div></div>
    </div> -->
    <h3 style="padding: 0 25px 0 0">路線</h3>
    
    <div style="display: flex;justify-content: space-between; margin-top: 10px">
      <h5>步驟</h5>
      <span class="material-icons-outlined" @click="stepShow=false" v-if="stepShow">
      expand_more
      </span>
      <span class="material-icons-outlined" @click="stepShow=true" v-else>
      expand_less
      </span>
    </div>
    <ol style="margin-top:0;background-color:#111;padding: 5px 0;padding-inline-start: 25px;max-height: 150px;overflow: hide;overflow-y:auto" v-if="routeData" :style="stepShow?'max-height: 35px;':''">
      <li v-for="(step, index) in routeData.legs[0].steps" :key="index" style="color:#ccc;font-size: 14px; padding: 4px 0" >
        {{ step.maneuver.instruction}}
      </li>
    </ol>
      <button class="btn clearLineRoute" @click="goToParkingPlaceData=null;stepsOpen=false">取消路線規劃</button>
  </div>

  <!-- 教學 -->
  <div class="window-box-cover" :class="windowFAQOpen?'active':''">
    <div class="window-box" :class="windowFAQOpen?'active':''">
      <h3 style="text-align: left">地圖怎麼看?</h3>
      <h4 style="text-align: left">
        圖案代表甚麼格位
      </h4>
      <h5 style="text-align: left">
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-1.png" alt="">
          汽車：汽車格(含未確認是否有重機格)
        </div>
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-3.png" alt="">
          重機(有人)：有設重機專用格
        </div>
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-10.png" alt="">
          機車(沒人)：機車格
        </div>
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-16.png" alt="">
          綠P：重機專用路邊停車格
        </div>
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-17.png" alt="">
          黃P：重機與汽車共享路邊停車格(黃P共享格不再更新，四輪爺不在乎，形同虛設)
        </div>
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-18.png" alt="">
          紫P：時段性汽機車共用停車格，注意使用時間喔!
        </div>
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-19.png" alt="">
          紅X：停都不給停
        </div>
      </h5>
      <br />
      <h4 style="text-align: left">
        顏色代表入場方式
      </h4>
      <h5 style="text-align: left">
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-1.png" alt="">
          <img src="@/assets/images/icon/icon-3.png" alt="">
          <img src="@/assets/images/icon/icon-10.png" alt="">
          綠色最友善：有後牌辨析
        </div>
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-6.png" alt="">
          <img src="@/assets/images/icon/icon-9.png" alt="">
          <img src="@/assets/images/icon/icon-13.png" alt="">
          藍色最傳統：悠遊卡 或 按鈕取票
        </div>
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-2.png" alt="">
          <img src="@/assets/images/icon/icon-5.png" alt="">
          <img src="@/assets/images/icon/icon-11.png" alt="">
          紅色最靠北：按鈕請管理員協助 或 倒退嚕前牌辨析
        </div>
        <div class="faq-content">
          <img src="@/assets/images/icon/icon-7.png" alt="">
          <img src="@/assets/images/icon/icon-4.png" alt="">
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
          <img src="@/assets/images/icon/icon-3.png" alt="">
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

  <!-- 分享 -->
  <div class="window-box-cover" :class="windowShareOpen?'active':''">
    <div class="window-box" :class="windowShareOpen?'active':''">

      <div class="share-div">
        <div class="share-btn" @click="shareLinkHandler('facebook')">
          <img src="@/assets/images/icon/001-facebook.png" alt="">
        </div>
        <div class="share-btn" @click="shareLinkHandler('line')">
          <img src="@/assets/images/icon/002-line.png" alt="">
        </div>
        <div class="share-btn" @click="shareLinkHandler('twitter')">
          <img src="@/assets/images/icon/003-twitter.png" alt="">
        </div>
        <div class="share-btn" @click="shareLinkHandler('link')">
          <img src="@/assets/images/icon/004-link.png" alt="">
        </div>

      </div>

      <button class="btn" @click="windowShareOpen = false">關閉</button>
    </div>
  </div>

  <!-- 教學 -->
  <div class="window-box-cover" :class="windowHowToUseOpen?'active':''">
    <div class="window-box" :class="windowHowToUseOpen?'active':''">
      <h3 style="text-align: left">地圖怎麼用?</h3>
      <h4 style="text-align: left">
        1. 介面說明
        <img width="100%" src="@/assets/images/FAQ1.jpg" alt="">
        <br />
        <br />
        2. 操作說明
        <img width="100%" src="@/assets/images/FAQ2.jpg" alt="">
        <br />
        <br />
        3. 選單
        <img width="100%" src="@/assets/images/FAQ3.jpg" alt="">
        <br />
      </h4>
      <button class="btn" @click="windowHowToUseOpen = false">確定</button>
    </div>
  </div>
  
  <!-- 加入手機桌面 類APP -->
  <div class="window-box-cover" :class="windowMobileFAQOpen?'active':''">
    <div class="window-box" :class="windowMobileFAQOpen?'active':''">
      <h3 style="margin-bottom: 15px; text-align: left">如何加入手機桌面?</h3>
      <br />
      <h4 style="text-align: left">
        p.s.以下以IOS為範例<br /><br />

        1. 使用 Safari 開啟網站 並點擊下方分享按鈕
        <img width="100%" src="@/assets/images/ios_01.jpg" alt="" />
        <br />
        <br />
        2. 加入主畫面
        <img width="100%" src="@/assets/images/ios_02.jpg" alt="" />
        <br />
        <br />
        3. 儲存
        <img width="100%" src="@/assets/images/ios_03.jpg" alt="" />
        <br />
        <br />
        4. 即可在桌面開啟 並無網頁狀態列
        <img width="100%" src="@/assets/images/ios_04.jpg" alt="" />
      </h4>
      <br />
      <button class="btn" @click="windowMobileFAQOpen = false">確定</button>
    </div>
  </div>

  <div class="window-box-cover" :class="windowMessageOpen?'active':''">
    <div class="window-box" :class="windowMessageOpen?'active':''">
      <h3>
        嗨!歡迎使用 重機能停哪?
      </h3>
      <h4 style="margin: 5px 0; text-align: justify;text-indent: 2em;">
        這是一個提供重機停車資訊的地圖，
        你可以依據分類"友善程度"、"停車格類型"、"收費範圍"，尋找合適的停車場，並指引您開啟GOOGLE或APPLE MAP導航前往。
      </h4>
      <h4 style="margin: 5px 0; text-align: justify;text-indent: 2em;">
        資料取源於<b><a href="https://linktr.ee/hueythegentry" style="color: #2ee7d6" target="_blank">大重停車記事</a></b>，
        如有停車場相關問題，請至 "<b><a href="https://linktr.ee/hueythegentry" style="color: #2ee7d6" target="_blank">大重停車記事</a></b>" 填寫回報表單。
      </h4>
      <h4 style="margin: 5px 0; text-align: justify;text-indent: 2em;">
        此地圖免費提供車友使用, 資訊僅供參考，請以實際狀況為主。資料不定期更新，如發生無法使用情況，麻煩至"<b><a href="https://forms.gle/iJCyfqVtpL35WtZM7" style="color: #2ee7d6" target="_blank">錯誤資訊回報</a></b>"，也歡迎<a href="https://buymeacoffee.com/jamestim923" style="color: #2ee7d6" target="_blank">請我喝杯咖啡 ☕️</a>，讓我有動力繼續更新。
      </h4>
      <h4 style="margin: 5px 0; text-align: justify;text-indent: 2em;">
        讓我們一起打造更好的停車環境!<br />感謝您的使用，祝您停車愉快！
      </h4>
      <h4 style="margin: 15px 0; text-align: right">
        by 爽爽
      </h4>
      <button class="btn" @click="closeMesBox()">確定</button>
    </div>
  </div>

  <!-- 設定 -->
  <div class="mainInfoBox" :class="menuActive ? 'active' : ''">
    <div
      class="menuBtn"
      @click="menuActive ? (menuActive = false) : (menuActive = true)"
      :class="menuActive ? 'active' : ''"
      v-show="!stepsOpen"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h3 style="padding: 0 25px 0 0">設定</h3>
    <div class="box">
      <h5>甚麼格位</h5>
      <select
        style="width: 100%; margin-bottom: 10px"
        v-model="parkingType"
      >
        <option
          :value="key.value"
          v-for="(key, index) in parkingTypeList"
          :key="index"
        >
          {{ key.name }}
        </option>
      </select>

      <h5>友善程度</h5>
      <select
        style="width: 100%; margin-bottom: 10px"
        v-model="degreeOfFriendliness"
      >
        <option
          :value="key.value"
          v-for="(key, index) in degreeOfFriendlinessList"
          :key="index"
        >
          {{ key.name }}
        </option>
      </select>

      <h5>收費範圍</h5>
      <div class="flex">
        <select 
          v-model="priceRangeMin"
          style="width: 100%;margin:0;text-align: center"
          v-if="parkingPriceType.match(/d|h/)"
        >
          <option :value="(key-1)*10" v-for="key in (priceRangeMax/10+1)">{{ (key-1)*10 }}</option>
        </select>
        <div style="margin:0 10px" v-if="parkingPriceType.match(/d|h/)">~</div>
        <select 
          v-model="priceRangeMax" 
          style="width: 100%;margin:0;text-align: center"
          v-if="parkingPriceType.match(/d|h/)"
        >
          <option :value="(key-1)*10+priceRangeMin" v-for="key in (31 - (priceRangeMin/10))">{{ (key-1)*10+priceRangeMin }}</option>
        </select>
        <div style="margin:0 10px" v-if="parkingPriceType.match(/d|h/)">/</div>
        <select v-model="parkingPriceType" style="width: 100%;margin: 0;">
          <option value="">全部</option>
          <option value="free">免費</option>
          <option value="h">小時</option>
          <option value="d">每日</option>
          <!-- <option value="m">每月</option> -->
        </select>
      </div>


      <h5>主題顏色</h5>
      <select
        style="width: 100%; margin-bottom: 10px"
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

      <h5 style="padding: 0">停車場資料來源</h5>
      <a href="https://linktr.ee/hueythegentry" target="_blank">
        <button class="btn" style="
          font-size: 12px;
          padding: 6px 8px;
          margin: 0 5px 5px 0">
          大重停車記事[更新至241231]
        </button>
      </a>
      <a href="https://docs.google.com/document/d/16mq-fcaaaLaFSMcwFLrrbliBCsVjtYZZds90rWy7CVk/edit" target="_blank">
        <button class="btn" style="
          font-size: 12px;
          padding: 6px 8px;
          margin: 0 5px 5px 0">
          大重停車記事公告[240607]
        </button>
      </a>

      <h5 style="padding: 10px 0 0 0">問題回報</h5>

      <p style="color: #ccc;font-size: 12px;">1. 停車場資訊相關，如發現有新的停車場或是錯誤的收費資訊等相關問題，可點此回報：</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdnEyoJJlxGxKhf1UmZ_6pfMrjOiidD2SkvV5ZKFDFrQ6AvdA/viewform" target="_blank">
        <button class="btn" style="
          font-size: 12px;
          padding: 6px 8px;
          margin: 0 5px 5px 0">
          大重停車記事 回報表單
        </button>
      </a>

      <!-- <h5 style="margin-top: 10px; margin-bottom: 10px">回報</h5> -->
      <!-- <a href="https://forms.gle/siWoYMo9PtxAk38w9" target="_blank"
        ><button class="btn" style="font-size: 10px; margin: 0 5px 5px 0">
          提供停車場資訊
        </button></a
      > -->
      <p style="color: #ccc;font-size: 12px;">2. 網頁BUG、畫面跑板問題，可點此回報：</p>
      <a href="https://forms.gle/iJCyfqVtpL35WtZM7" target="_blank">
        <button class="btn" style="font-size: 12px;padding: 6px 8px;margin: 0 5px 5px 0">
          重機能停哪? 回報表單
        </button>
      </a>
      <a href="https://buymeacoffee.com/jamestim923" target="_blank">
        <button class="btn" style="font-size: 12px;padding: 6px 8px;margin: 0 5px 5px 0">
          請我喝杯咖啡 ☕️，讓我有動力繼續更新
        </button>
      </a>

      <h5 style="padding: 10px 0 0 0">資訊</h5>
      <p style="color: #ccc;font-size: 12px;">版本資訊：v1.0.5</p>
      <p style="color: #ccc;font-size: 12px;">地圖資料更新日期：250322</p>
      <p style="color: #ccc;font-size: 12px;">Web製作：爽爽</p>
      <p style="color: #ccc;font-size: 12px;">資料參考：大重停車記事 Google My Map資料</p>
      <p style="color: #ccc;font-size: 12px;">地圖API：Mapbox GL JS API</p>
      <p style="color: #ccc;font-size: 12px;">版權宣告：© 2025 爽爽 版權所有。本網頁未經准許，禁止任何商業行為</p>
    </div>

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
        <img :src="ParkingInfo.parkingIcon" alt="">
        {{ ParkingInfo.parkingName }}
      </div>
    </h3>
    <div v-if="ParkingInfo.parkingNameDes" style="margin-top: 5px;">
      <!-- 內容: -->
      <div v-html="ParkingInfo.parkingNameDes"></div>
    </div>

    <div style="font-size: 12px;margin-top: 5px;color: #999;">
      {{ ParkingInfo.address }}
    </div>

    <div class="gotoBtn-div" style="color: #666;font-size: 12px;">
      <span>{{ ParkingInfo.parkingType }}</span>
      <span>[{{ ParkingInfo.geometry[0] }},{{ ParkingInfo.geometry[1] }}]</span>
    </div>
    <div class="gotoBtn-div">
      <button class="btn" @click="openInMap('google',ParkingInfo.geometry)">在Google Map開啟</button>
      <button class="btn" @click="openInMap('apple',ParkingInfo.geometry)" v-if="isMobile && isApple">在Apple Map開啟</button>
      <button class="btn" @click="goToParkingPlace(ParkingInfo.geometry)" v-if="goToParkingPlaceData==null">路線規劃</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>


.googleAdClass{
  position: relative;
  width: 100%;
  height: auto;
}

.gotoBtn-div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0 ;
  color: #666;
}
.gotoBtn-div>button{
  font-size: 12px;
  padding: 4px 6px;
  margin: 0;
}


.clearLineRoute{
  position: relative;
  float: right;
  font-size: 12px;
  padding: 4px 6px;
  margin: 0;
}

</style>
