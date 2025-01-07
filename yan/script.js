// 選取所有需要檢測的區塊
const sections = document.querySelectorAll('.content-section');

// 建立 IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 當區塊進入視窗，添加 `visible` 類
        entry.target.classList.add('visible');
      } else {
        // 當區塊離開視窗，移除 `visible` 類
        entry.target.classList.remove('visible');
      }
    });
  },
  {
    threshold: 0.2, // 區塊至少進入視窗 20% 時觸發
  }
);

// 監測每個區塊
sections.forEach((section) => observer.observe(section));
