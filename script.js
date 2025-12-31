// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 检查当前页面是否为首页
    const form = document.getElementById('nameForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userName = document.getElementById('userName').value.trim();
            
            if (userName) {
                // 保存用户姓名到localStorage
                localStorage.setItem('userName', userName);
                
                // 页面跳转动画
                document.body.style.opacity = '0';
                setTimeout(function() {
                    window.location.href = 'greeting.html';
                }, 500);
            } else {
                alert('请输入您的姓名！');
            }
        });
    }
    
    // 祝福页面显示个性化内容
    const greetingText = document.getElementById('greetingText');
    if (greetingText) {
        const savedName = localStorage.getItem('userName') || '朋友';
        const greetings = [
            `亲爱的${savedName}，祝您新年快乐！`,
            `愿您在新的一年里身体健康，工作顺利！`,
            `祝您财源广进，万事如意！`,
            `愿您的生活像烟花一样绚烂多彩！`,
            `新年新气象，祝您心想事成！`
        ];
        
        // 组合祝福语
        greetingText.innerHTML = greetings.join('<br>');
        
        // 添加淡入动画
        document.body.style.opacity = '0';
        setTimeout(function() {
            document.body.style.transition = 'opacity 1s';
            document.body.style.opacity = '1';
        }, 100);
    }
});

// 返回首页函数
function goBack() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 500);
}

// 添加雪花效果
function createSnowflakes() {
    const container = document.querySelector('.new-year-bg');
    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.innerHTML = '❄';
        snowflake.style.position = 'absolute';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.top = '-20px';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.opacity = Math.random();
        snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        snowflake.style.zIndex = '5';
        
        // 添加动画样式
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fall {
                to {
                    transform: translate(20px, 100vh);
                }
            }
        `;
        document.head.appendChild(style);
        
        container.appendChild(snowflake);
    }
}

// 页面加载后创建雪花
document.addEventListener('DOMContentLoaded', createSnowflakes);