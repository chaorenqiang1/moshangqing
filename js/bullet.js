// 函数用于创建新的弹幕
function createDanmaku(text) {
    // Create a new danmaku element
    var danmaku = document.createElement("div");
    danmaku.classList.add("danmaku");
    danmaku.innerText = text;

    // 设置danmaku位置到容器的右边缘
    danmaku.style.right = "0";

    // 设置danmaku顶部位置为0到容器高度之间的随机值
    var container = document.querySelector(".danmaku-container");
    danmaku.style.top = Math.floor(Math.random() * container.offsetHeight) + "px";

    // 添加danmaku到容器
    container.appendChild(danmaku);

    // 将danmaku动画到容器的左边缘
    var animationDuration = 10000; // 10 秒
    var danmakuWidth = danmaku.offsetWidth;
    var containerWidth = container.offsetWidth;
    var distance = containerWidth + danmakuWidth;
    var duration = (distance / containerWidth) * animationDuration;
    danmaku.style.transition = "transform " + duration + "ms linear";
    danmaku.style.transform = "translateX(-" + distance + "px)";

    // 动画完成后从容器中移除弹幕
    setTimeout(function() {
        danmaku.remove();
    }, duration);
}

// 函数生成随机弹幕文本
function generateDanmakuText() {
    var texts = ["莫觞清故居，百年豪宅，历史沉淀浓厚", "武康路2号，领略民国风情，感受建筑魅力", "花园洋房，优雅别致，拍照打卡好去处", "优秀古迹遗址，值得一游", "2400平米占地面积，奢华空间，令人赞叹", "历史与现代交融，品味上海独特韵味", "花园绿意盎然，生态环境极佳","朱漆大门，古典气息浓郁，让人肃然起敬","了解民国历史，增长知识的好地方","对称三开间，弧形阳台，美观大方","故居游览，受益匪浅","假三层设计，砖混结构，建筑工艺精湛"," 古宅新颜，魅力依旧"," 体验老上海的生活","老洋房，新视野"," 莫氏家族传奇，感受中国丝绸业发展历程"];
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}

// 每2秒生成一个新的弹幕
setInterval(function() {
    var text = generateDanmakuText();
    createDanmaku(text);
}, 1000);