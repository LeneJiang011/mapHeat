# 书籍本数热力图  
---

## 概览  
<img src="https://github.com/LeneJiang011/mapHeat/blob/master/overview.png" alt="热力图概览" width="50%" height="50%" center>

## 功能  
<video width="40%" height="400" controls>
    <source src="https://github.com/LeneJiang011/mapHeat/blob/master/operate.mp4" type="video/mp4">
</video>
1. 显示以书籍本数为热度的热力地图（下面简化描述为**热力地图**），  
2. 随鼠标滑轮滚动显示缩放的热力地图，  
3. 在一定操作时间支持在拖拽动作后显示相应热力地图。  
---

## 实现思路及参考文档  
1. 已知详细地址，将详细地址转为经纬度表示；
2. 将经纬度转为画布上的像素值，在画布上定位数据点；
3. 根据书籍本数绘制热力地图。

### 实现过程  
第一阶段：直接使用百度地图API获取经纬度、计算得像素值，再在百度地图上绘制热力图  
- 百度地图API的使用参考 [[1]](https://blog.csdn.net/qq_39034363/article/details/87934954)，  
- 经纬度和像素值转换参考 [[2]](https://blog.csdn.net/chixielv2759/article/details/100799392)，    
- 热力图绘制参考引用 [[3]](https://www.jianshu.com/p/f795cc2c14f5?utm_campaign=maleskine)，参考 [[4]](http://blog.itpub.net/31556026/viewspace-2218700/)；  
- 鼠标滑轮滚动行为引入防抖，参照 [[5]](https://segmentfault.com/a/1190000018428170)。

第二阶段：优化数据获取、数据处理以优化热力图绘制  
- <font color="ff4c4c">**[未实现]**</font> 直接从json文件获取数据。目前的为直接将数据复制粘贴进`script.js`；     
- <font color="ff4c4c">**[未实现]**</font> 合并地址重复项。目前考虑到由于热力图是线性叠加、且仅有3个地址有重复项，从而认为此处影响可忽略不计。因此目前没有解决此处的问题；
- 确定热力范围。下图的纵轴表示热力值。如图所示，可得绝大部分热力值位于40及其以下、位于0以上。以此确定colorbar的范围为[1, 40)，大于40的热力值按40计；  
<img src="https://github.com/LeneJiang011/mapHeat/blob/master/heatSta.png" alt="热力统计" width="50%" height="50%" center>
- <font color="ff4c4c">**[未实现]**</font> 浏览器性能优化。预计参照 [[3]](https://www.jianshu.com/p/f795cc2c14f5?utm_campaign=maleskine)进行优化。  

第三阶段：绘制地图，并在地图上绘制热力图  
- <font color="ff4c4c">**[未实现]**</font> 绘制地图。参考 [[6]](https://github.com/cangyan/TAV/blob/master/00019_D3_CHINA_MAP/index.html) 使用D3.js绘制中，目前的效果如下图所示：
<img src="https://github.com/LeneJiang011/mapHeat/blob/master/drawMap.png" alt="地图绘制" width="50%" height="50%" center>
如图所示各区中心由白点表示，预计先通过百度地图API获取的经纬度带入白点的计算表示，再在其上绘制热力图。  

第四阶段：交互及跨浏览器支持    
- <font color="ff4c4c">**[未实现]**</font> 增加缩放、拖拽、悬浮以显示信息等交互。目前由于使用了百度地图API及其附带的交互，可支持缩放热力图。在缩放激发响应的情况下支持短时间的拖拽交互，目前的实现没有涉及拖拽交互；  
- <font color="ff4c4c">**[未实现]**</font> 跨浏览器支持。  

### 参考文档目录  
[1] https://blog.csdn.net/qq_39034363/article/details/87934954;  
[2] https://blog.csdn.net/chixielv2759/article/details/100799392;  
[3] https://www.jianshu.com/p/f795cc2c14f5?utm_campaign=maleskine;  
[4] http://blog.itpub.net/31556026/viewspace-2218700/;  
[5] https://segmentfault.com/a/1190000018428170;  
[6] https://github.com/cangyan/TAV/blob/master/00019_D3_CHINA_MAP/index.html.