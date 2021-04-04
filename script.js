//const btn = document.getElementById('search-btn');
//const colorIt = document.getElementById('colorit');
const target = document.getElementById("target");
const canvas = document.getElementById("try");
const bigCon = document.getElementById("big-container");
const forColor = document.getElementById('forColor');
const mapContainer = document.getElementById('container');
//const testAdd = document.getElementById("testjson");


var context = canvas.getContext('2d');
var map = new BMap.Map("container");
map.centerAndZoom("北京", 11);
map.enableScrollWheelZoom();
//map.enableContinuousZoom();

//json数据
const rawdata = [
  {
    "address": "北京市朝阳区北苑路172号欧陆经典小区",
    "quantity": 5
  },
  {
    "address": "北京市丰台区东铁匠营街道蒲安里",
    "quantity": 6
  },
  {
    "address": "北京市西城区复兴门内大街1号",
    "quantity": 3
  },
  {
    "address": "北京市东城区当代MOMA",
    "quantity": 19
  },
  {
    "address": "北京市朝阳区惠新西街18号罗马花园",
    "quantity": 7
  },
  {
    "address": "北京市大兴区熙悦春天",
    "quantity": 16
  },
  {
    "address": "北京市大兴区亦庄经济技术开发区文化园西路8号院林肯公园",
    "quantity": 12
  },
  {
    "address": "北京市海淀区恩济西园7号楼八里庄城管队",
    "quantity": 2
  },
  {
    "address": "北京市海淀区小南庄39号楼",
    "quantity": 106
  },
  {
    "address": "北京市朝阳区西大望路1号温特莱中心",
    "quantity": 1
  },
  {
    "address": "北京市海淀区世纪城远大园一区",
    "quantity": 10
  },
  {
    "address": "北京市通州区万方家园怡园",
    "quantity": 40
  },
  {
    "address": "北京市朝阳区北京市朝阳区五里桥一街首开畅心园小区",
    "quantity": 14
  },
  {
    "address": "北京市海淀区学院路15号北京语言大学",
    "quantity": 5
  },
  {
    "address": "北京市昌平区南邵镇张各庄村",
    "quantity": 20
  },
  {
    "address": "北京市海淀区稻香园南社区",
    "quantity": 12
  },
  {
    "address": "北京市西城区菜市口大街中信沁园",
    "quantity": 20
  },
  {
    "address": "北京市朝阳区五里桥二街北京像素南区",
    "quantity": 4
  },
  {
    "address": "北京市朝阳区五里桥二街北京像素南区",
    "quantity": 4
  },
  {
    "address": "北京市朝阳区五里桥二街北京像素南区",
    "quantity": 3
  },
  {
    "address": "北京市东城区东直门外大街38号楼",
    "quantity": 4
  },
  {
    "address": "北京市海淀区中海枫涟山庄",
    "quantity": 14
  },
  {
    "address": "北京市丰台区慧时欣园",
    "quantity": 8
  },
  {
    "address": "北京市海淀区友谊路102号院东区",
    "quantity": 5
  },
  {
    "address": "北京市东城区东花市大街118号质城花市枣苑",
    "quantity": 17
  },
  {
    "address": "北京市东城区东直门外大街",
    "quantity": 42
  },
  {
    "address": "北京市海淀区华澳中心公寓一号楼",
    "quantity": 8
  },
  {
    "address": "北京市海淀区华澳中心公寓一号楼",
    "quantity": 7
  },
  {
    "address": "北京市海淀区中关村南大街五号院北京理工大学",
    "quantity": 9
  },
  {
    "address": "北京市顺义区后沙峪双裕花园西区东门",
    "quantity": 1
  },
  {
    "address": "北京市丰台区六圈路中海御鑫阁",
    "quantity": 9
  },
  {
    "address": "北京市朝阳区望京广顺北大街18号院华彩国际公寓",
    "quantity": 13
  },
  {
    "address": "北京市朝阳区旭辉奥都",
    "quantity": 22
  },
  {
    "address": "北京市海淀区安宁庄西路安宁华庭",
    "quantity": 10
  },
  {
    "address": "北京市海淀区交大东路舒至嘉园",
    "quantity": 9
  },
  {
    "address": "北京市海淀区翠微路17号院",
    "quantity": 2
  },
  {
    "address": "北京市朝阳区远洋一方一号院",
    "quantity": 10
  },
  {
    "address": "北京市东城区东四北大街",
    "quantity": 24
  },
  {
    "address": "北京市朝阳区拂林路拂林园小区",
    "quantity": 14
  },
  {
    "address": "北京市门头沟区龙泉花园",
    "quantity": 34
  },
  {
    "address": "北京市海淀区世纪城翠叠园",
    "quantity": 23
  },
  {
    "address": "北京市海淀区北蜂窝路",
    "quantity": 1
  },
  {
    "address": "北京市朝阳区农展南里",
    "quantity": 2
  },
  {
    "address": "北京市西城区宣武门西大街",
    "quantity": 22
  },
  {
    "address": "北京市丰台区云岗北区西里",
    "quantity": 20
  },
  {
    "address": "北京市朝阳区建国路88号soho现代城",
    "quantity": 15
  },
  {
    "address": "北京市朝阳区望京北路39号澳洲康都",
    "quantity": 8
  },
  {
    "address": "北京市海淀区苏州街大恒科技大厦",
    "quantity": 11
  },
  {
    "address": "北京市大兴区黄村滨河西里北区",
    "quantity": 6
  },
  {
    "address": "北京市通州区通瑞嘉苑小区",
    "quantity": 1
  },
  {
    "address": "北京市海淀区永旺家园二区",
    "quantity": 6
  },
  {
    "address": "北京市海淀区长远天地",
    "quantity": 6
  },
  {
    "address": "北京市西城区玉桃园三区",
    "quantity": 4
  },
  {
    "address": "北京市大兴区开泰西里金色漫香林2期",
    "quantity": 6
  },
  {
    "address": "北京市海淀区北洼西里52号院气象西苑",
    "quantity": 3
  },
  {
    "address": "北京市朝阳区望京西路49号",
    "quantity": 6
  },
  {
    "address": "北京市顺义区后沙峪高丽营丽喜南苑15号楼",
    "quantity": 8
  },
  {
    "address": "北京市丰台区冬季星空14号楼",
    "quantity": 7
  },
  {
    "address": "北京市西城区宣武门西大街32号",
    "quantity": 29
  },
  {
    "address": "北京市西城区掌扇胡同甲2号",
    "quantity": 4
  },
  {
    "address": "北京市朝阳区广渠路33号",
    "quantity": 6
  },
  {
    "address": "北京市朝阳区远洋天地",
    "quantity": 3
  },
  {
    "address": "北京市海淀区学院南路",
    "quantity": 28
  },
  {
    "address": "北京市东城区五道营胡同63号",
    "quantity": 11
  },
  {
    "address": "北京市朝阳区富盛大厦",
    "quantity": 6
  },
  {
    "address": "北京市昌平区天通苑北一区",
    "quantity": 6
  },
  {
    "address": "北京市朝阳区八里庄南里社区",
    "quantity": 9
  },
  {
    "address": "北京市海淀区复兴路十四号院",
    "quantity": 2
  },
  {
    "address": "北京市朝阳区太阳宫南街6号海油大厦",
    "quantity": 8
  },
  {
    "address": "北京市海淀区北下关街道交大东路56号院",
    "quantity": 2
  },
  {
    "address": "北京市朝阳区建国门外大街甲12号新华保险大厦",
    "quantity": 1
  },
  {
    "address": "北京市西城区德胜国际",
    "quantity": 31
  },
  {
    "address": "北京市朝阳区褡裢坡266号安家公寓",
    "quantity": 6
  },
  {
    "address": "北京市丰台区金家村288号院",
    "quantity": 9
  },
  {
    "address": "北京市顺义区空港街道美林香槟小镇",
    "quantity": 48
  },
  {
    "address": "北京市朝阳区延静西里",
    "quantity": 5
  },
  {
    "address": "北京市朝阳区三间房西里",
    "quantity": 5
  },
  {
    "address": "北京市朝阳区三间房西里",
    "quantity": 4
  },
  {
    "address": "北京市大兴区亦庄开发区大雄郁金香舍",
    "quantity": 20
  },
  {
    "address": "北京市昌平区天通苑东一区",
    "quantity": 21
  },
  {
    "address": "北京市朝阳区华贸城7号院",
    "quantity": 30
  },
  {
    "address": "北京市朝阳区大望路电影产业园",
    "quantity": 66
  },
  {
    "address": "北京市朝阳区大望路电影产业园",
    "quantity": 35
  }
]

/*
//没有调通的合并共同address
function checkData() {
  let tempArr = [];
  var map = {};
  for (let i = 0; i < rawdata.length; i++) {
    var temp = rawdata[i];
    if (!map[temp.address]) {
      tempArr.push({
        address: temp.address,
        quantity: temp.quantity
      });
      map[temp.address] = temp;
    } else {
      for (var j = 0; j < tempArr.length; j++) {
        var dj = tempArr[j];
        if (dj.address == temp.address) {
          //console.log(dj.address);
          dj.quantity = (parseInt(dj.quantity) + parseInt(temp.quantity)).toString();
          break;
        }
      }
    }
  }
}*/


let xyData = [];
var localSearch = new BMap.LocalSearch(map);

window.onload = function() {
  rawdata.forEach(item => { searchByName(item.address, item.quantity); });
};


const zoomSteps = {
  13: 24,
  12: 24,
  11: 20,
  10: 12,
  9: 8,
  8: 6
};

function searchByName(address, quantity) {
  //var keyword = target.innerText;
  localSearch.setSearchCompleteCallback(function(searchResult) {
    var poi = searchResult.getPoi(0);

    // 投影实例
    const projection = map.getMapType().getProjection()
 
    // 地图div宽高
    const box = map.getSize()
    const zoom = window.Math.pow(2, 18 - map.getZoom())
 
    // 中心坐标 转 平面坐标
    const center = projection.lngLatToPoint(map.getCenter())
 
    // 测试坐标 转 平面坐标
    const point = projection.lngLatToPoint({ lng: poi.point.lng, lat: poi.point.lat })
 
    // 像素坐标
    const x = Math.round((point.x - center.x) / zoom + box.width / 2)
    const y = Math.round((center.y - point.y) / zoom + box.height / 2)

    const newData = {
      axisX: `${x}`, 
      axisY: `${y}`,
      weight: `${quantity}`
    };

    //var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地方对应的经纬度
    //map.addOverlay(marker);

    xyData.push(newData);

    var tmp = map.getZoom();

    if (tmp >= 13) {
      tmp = 12;
    }
    if (tmp <= 8) {
      tmp = 8;
    }

    const radius = zoomSteps[tmp];
    
    
    let radialGradient = context.createRadialGradient(x, y, 0, x, y, radius);
    radialGradient.addColorStop(0.0, "rgba(0,0,0,1)");
    radialGradient.addColorStop(1.0, "rgba(0,0,0,0)");
    context.fillStyle = radialGradient;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();

    // min取1原因：所有quantity都大于1
    // max不取100以上原因：根据数据分布可得，大部分的数位于50及其以下。
    let globalAlpha = (quantity - 1) / (40 - 1);
    context.globalAlpha = Math.max(Math.min(globalAlpha, 1), 0);

    // 填充颜色
    context.fill();

    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;
    let palette = new Palette();
    for (var i = 3; i < data.length; i+=4) {
      let alpha = data[i];
      let color = palette.colorPicker(alpha);
      data[i - 3] = color[0];
      data[i - 2] = color[1];
      data[i - 1] = color[2];
    }
    context.putImageData(imageData, 0, 0);
    
  });
  localSearch.search(address);
}

function compare(property) {
  return function(a,b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  }
}

function drawMono() {
  //从左到右绘制
  var arr = xyData.sort(compare('axisX'));
  arr.forEach(item => {
    let radialGradient = context.createRadialGradient(item.axisX, item.axisY, 0, item.axisX, item.axisY, 20);
    radialGradient.addColorStop(0.0, "rgba(0,0,0,1)");
    radialGradient.addColorStop(1.0, "rgba(0,0,0,0)");
    context.fillStyle = radialGradient;
    context.beginPath();
    context.arc(item.axisX, item.axisY, 20, 0, 2 * Math.PI);
    context.closePath();

    // min取1原因：所有quantity都大于1
    // max不取100以上原因：根据数据分布可得，大部分的数位于50及其以下。
    let globalAlpha = (item.weight - 1) / (40 - 1);
    context.globalAlpha = Math.max(Math.min(globalAlpha, 1), 0);

    // 填充颜色
    context.fill();

    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;
    let palette = new Palette();
    for (var i = 3; i < data.length; i+=4) {
      let alpha = data[i];
      let color = palette.colorPicker(alpha);
      data[i - 3] = color[0];
      data[i - 2] = color[1];
      data[i - 1] = color[2];
    }
    context.putImageData(imageData, 0, 0);
  })
}

function debounce(fn,delay){
  let timer = null; //借助闭包
  return function() {
      if(timer){
        canvas.style.zIndex = -1;
        mapContainer.style.opacity = 1;
        //console.log('也进来了啊');
        //console.log(delay);
        clearTimeout(timer); 
      }
      timer = setTimeout(fn,delay); 
  }
}

function showCanvas() {
  console.log('yes');
  console.log(map.getZoom());
  context.clearRect(0, 0, canvas.width, canvas.height);
  //dragFlag = false;
  canvas.style.zIndex = 100;
  mapContainer.style.opacity = 0.7;
  xyData = [];
  rawdata.forEach(item => { searchByName(item.address, item.quantity); });
}

bigCon.addEventListener('wheel', debounce(showCanvas, 1000));



//heatmap着色
const defaultColorStops = {
  0.1: "#0ff",
  0.2: "#0f0",
  0.5: "#ff0",
  1: "#f00",
};
const width = 20, height = 256;

function Palette(opts) {
  Object.assign(this, opts);
  this.init();
}

Palette.prototype.init = function() {
  let colorStops = this.colorStops || defaultColorStops;

  // 创建canvas
  let canvasTwo = document.createElement("canvas");
  canvasTwo.classList.add('colorbar');
  forColor.appendChild(canvasTwo);
  let textCtx = document.createElement("div");
  textCtx.classList.add('colorText');
  textCtx.innerHTML = `<span>0 本</span>`;
  forColor.appendChild(textCtx);
  
  let textCtx2 = document.createElement("div");
  textCtx2.classList.add('colorBText');
  textCtx2.innerHTML = `<span>40本<br />及以上</span>`;
  forColor.appendChild(textCtx2);
  
  canvasTwo.width = width;
  canvasTwo.height = height;
  let ctx = canvasTwo.getContext("2d");

  // 创建线性渐变色
  let linearGradient = ctx.createLinearGradient(0, 0, 0, height);
  for (const key in colorStops) {
      linearGradient.addColorStop(key, colorStops[key]);
  }

  // 绘制渐变色条
  ctx.fillStyle = linearGradient;
  ctx.fillRect(0, 0, width, height);

  // 读取像素数据
  this.imageData = ctx.getImageData(0, 0, 1, height).data;
  this.canvas = canvasTwo;
};

Palette.prototype.colorPicker = function(position) {
  return this.imageData.slice(position * 4, position * 4 + 3);
};