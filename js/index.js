var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));//[].slice.call这种方式可以将伪数组变为数组，才能使用forEach遍历
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));


// 页面加载两秒后移除s--inactive，使页面中的模块有一个个从下往上的动画效果，
//.el:nth-child(1) .el__inner {transition-delay: 0s;}来设置每个模块不一样的移除时间
setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;//如果已经点击放大了模块那么就return，不再执行下面代码
    $cont.classList.add('s--el-active');//给.cont类元素添加s--el-active类
    this.classList.add('s--active');//给点击的.el类添加s--active
  });
});

//点击关闭按钮时触发的事件
$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();//防止事件冒泡
    $cont.classList.remove('s--el-active');//关闭放大模块时给.cont类元素移除s--el-active类
    document.querySelector('.el.s--active').classList.remove('s--active');//找到.el类中包含s--active类的元素，并把s--active移除
  });
});