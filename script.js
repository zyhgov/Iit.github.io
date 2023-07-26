// JavaScript代码
let slideIndex = 0;

// 自动切换图片的函数
function autoSlide() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // 隐藏所有幻灯片
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 移除所有圆点的白色样式
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // 切换到下一张幻灯片
  slideIndex++;

  // 如果当前索引大于幻灯片数量，则回到第一张幻灯片
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // 显示当前幻灯片和对应的导航圆点
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");

  // 设置定时器，每隔1.5秒自动切换图片
  setTimeout(autoSlide, 1500);
}

// 用户点击导航圆点时切换到相应的幻灯片
function showSlide(index) {
  slideIndex = index;
  autoSlide(); // 调用自动切换函数显示当前幻灯片
}

// 页面加载时开始自动切换图片
window.onload = function () {
  autoSlide();
};


