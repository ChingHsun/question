/** HTML
<div class="container">
  <div class="header"> 5/8 外出確認表</div> 
  <div class="content">
    <ol class="shop-list">
      <li class="item">麵包</li>
      <li class="item">短袖衣服</li>
      <li class="item">飲用水</li> 
      <li class="item">帳篷</li>
    </ol>
    <ul class="shop-list">
      <li class="item">暈車藥</li> 
      <li class="item">感冒藥</li> 
      <li class="item">丹木斯</li> 
      <li class="item">咳嗽糖漿</li>
    </ul> 
  </div>
  <div class="footer">以上僅共參考</div> 
</div>

CSS
.container {
  font-size: 14px;
}
.container .header {
  font-size: 18px;
}
.container .shop-list {
   list-style: none;
   margin-left: -15px;
}
.container .shop-list li.item { 
  color: green;
}
.container .shop-list ol.item {
  >> Explain why does this color not works, and how to fix make it work on 1st list
  color: blue;
}
**/

/**  
The CSS selector of green color have higer specificity than the blue one
because it includes `li` to make the selector more spefifice 
 
if I want to make blue item in the 1st list:

.container ul.shop-list li.item { 
  color: green;
}
.container ol.shop-list li.item {
  color: blue;
}
**/

/* Write styling make every other line give background color to next one:

.container .shop-list li:nth-child(even) {
    background-color: gray; 
}

*/
