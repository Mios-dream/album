


document.querySelectorAll('.album-item').forEach(item => {
    const imgContainer = item.querySelector('.ima');
    imgContainer.addEventListener('click', function() {
        const modal = document.querySelector('.modal');
        const modalImg = document.getElementById('expandedImg');
        modal.style.display = "block";
        // 获取计算样式
        const computedStyle = window.getComputedStyle(this);
        const backgroundImage = computedStyle.backgroundImage;
        // 提取图片URL
        if (backgroundImage && backgroundImage !== 'none') {
            modalImg.src = backgroundImage.slice(4, -1).replace(/"/g, "");
        }
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = "none";
});


// 修改main.js中的tab点击处理
document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', function() {
        const targetPage = this.querySelector('.tab-text').textContent === '收藏' ? 'collection' : 'main';

        // 切换页面内容
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.toggle('active', page.dataset.page === targetPage);
        });

        // 当页面为收藏页时将收藏页中的所有heart-label的checkbox设为选中
        if (targetPage === 'collection') {
            document.querySelectorAll('.heart-label').forEach(label => {
                label.querySelector('.heart-checkbox').checked = true;
            });
        }else {
            document.querySelectorAll('.heart-label').forEach(label => {
                label.querySelector('.heart-checkbox').checked = false;
            });
        }



        // 更新tab状态
        document.querySelectorAll('.tab-item').forEach(t => {
            t.style.transform = t === this ? 'translateX(0)' : 'translateX(-25%)';
        });
    });
});