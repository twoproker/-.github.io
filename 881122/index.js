// 扩展的食物数据 - 使用表情符号代替图片
const defaultFoods = [
    // 南方家常菜
    { name: "红烧肉", type: "南方家常菜", desc: "色泽红亮，肥而不腻，入口即化", icon: "🍖" },
    { name: "清蒸鲈鱼", type: "南方家常菜", desc: "鲜嫩爽滑，清淡可口", icon: "🐟" },
    { name: "糖醋排骨", type: "南方家常菜", desc: "酸甜适中，外酥里嫩", icon: "🍖" },
    { name: "麻婆豆腐", type: "南方家常菜", desc: "麻辣鲜香，口感滑嫩", icon: "🧈" },
    { name: "宫保鸡丁", type: "南方家常菜", desc: "麻辣酸甜，鲜香爽口", icon: "🍗" },
    { name: "鱼香肉丝", type: "南方家常菜", desc: "鱼香味浓，酸甜微辣", icon: "🍖" },
    { name: "东坡肉", type: "南方家常菜", desc: "肥而不腻，酥而不碎", icon: "🍖" },
    { name: "白切鸡", type: "南方家常菜", desc: "皮爽肉滑，清淡鲜美", icon: "🍗" },
    { name: "梅菜扣肉", type: "南方家常菜", desc: "肉质软烂，肥而不腻", icon: "🍖" },
    { name: "蚝油生菜", type: "南方家常菜", desc: "清淡爽口，蚝油鲜香", icon: "🥬" },
    
    // 北方家常菜
    { name: "京酱肉丝", type: "北方家常菜", desc: "酱香浓郁，咸甜适中", icon: "🍖" },
    { name: "锅包肉", type: "北方家常菜", desc: "色泽金黄，外酥里嫩", icon: "🍖" },
    { name: "地三鲜", type: "北方家常菜", desc: "鲜爽适口，营养丰富", icon: "🍆" },
    { name: "猪肉炖粉条", type: "北方家常菜", desc: "肉烂粉滑，汤汁浓郁", icon: "🍖" },
    { name: "小鸡炖蘑菇", type: "北方家常菜", desc: "鸡肉鲜嫩，蘑菇香浓", icon: "🍄" },
    { name: "酸菜鱼", type: "北方家常菜", desc: "酸辣开胃，鱼肉鲜嫩", icon: "🐟" },
    { name: "木须肉", type: "北方家常菜", desc: "色泽鲜艳，口感丰富", icon: "🍖" },
    { name: "醋溜白菜", type: "北方家常菜", desc: "酸辣可口，开胃下饭", icon: "🥬" },
    { name: "葱爆羊肉", type: "北方家常菜", desc: "羊肉鲜嫩，葱香浓郁", icon: "🍖" },
    { name: "酱骨架", type: "北方家常菜", desc: "酱香浓郁，肉质酥烂", icon: "🍖" },
    
    // 川菜
    { name: "水煮鱼", type: "川菜", desc: "麻辣鲜香，鱼肉嫩滑", icon: "🐟" },
    { name: "回锅肉", type: "川菜", desc: "肥而不腻，入口浓香", icon: "🍖" },
    { name: "夫妻肺片", type: "川菜", desc: "麻辣浓香，质地软嫩", icon: "🥩" },
    { name: "辣子鸡", type: "川菜", desc: "麻辣干香，酥脆爽口", icon: "🍗" },
    { name: "毛血旺", type: "川菜", desc: "麻辣鲜香，内容丰富", icon: "🥘" },
    { name: "口水鸡", type: "川菜", desc: "麻辣鲜香，嫩滑多汁", icon: "🍗" },
    
    // 湘菜
    { name: "剁椒鱼头", type: "湘菜", desc: "鲜辣适口，风味独特", icon: "🐟" },
    { name: "农家小炒肉", type: "湘菜", desc: "香辣可口，非常下饭", icon: "🍖" },
    { name: "湘西土匪鸭", type: "湘菜", desc: "香辣浓郁，鸭肉鲜嫩", icon: "🦆" },
    { name: "腊味合蒸", type: "湘菜", desc: "腊香浓重，咸甜适口", icon: "🍖" },
    
    // 粤菜
    { name: "白切鸡", type: "粤菜", desc: "皮爽肉滑，清淡鲜美", icon: "🍗" },
    { name: "叉烧", type: "粤菜", desc: "色泽红亮，甜咸适中", icon: "🍖" },
    { name: "豉汁蒸排骨", type: "粤菜", desc: "豉香浓郁，排骨鲜嫩", icon: "🍖" },
    { name: "蚝皇凤爪", type: "粤菜", desc: "软糯入味，胶质丰富", icon: "🐔" },
    { name: "清蒸石斑鱼", type: "粤菜", desc: "鱼肉鲜嫩，原汁原味", icon: "🐟" },
    
    // 江浙菜
    { name: "西湖醋鱼", type: "江浙菜", desc: "酸甜适中，鱼肉鲜嫩", icon: "🐟" },
    { name: "龙井虾仁", type: "江浙菜", desc: "茶香清幽，虾仁鲜嫩", icon: "🍤" },
    { name: "叫花鸡", type: "江浙菜", desc: "肉质鲜嫩，荷香四溢", icon: "🍗" },
    { name: "东坡肉", type: "江浙菜", desc: "肥而不腻，酥而不碎", icon: "🍖" },
    { name: "腌笃鲜", type: "江浙菜", desc: "汤白汁浓，肉质酥肥", icon: "🍲" },
    
    // 南北方小吃名吃
    { name: "北京烤鸭", type: "北方名吃", desc: "外皮酥脆，肉质鲜嫩", icon: "🦆" },
    { name: "狗不理包子", type: "北方名吃", desc: "皮薄馅大，鲜香不腻", icon: "🥟" },
    { name: "羊肉泡馍", type: "北方名吃", desc: "汤浓肉烂，馍筋爽口", icon: "🍲" },
    { name: "煎饼果子", type: "北方名吃", desc: "外软内脆，酱香浓郁", icon: "🌯" },
    { name: "小笼包", type: "南方名吃", desc: "皮薄馅多，汤汁鲜美", icon: "🥟" },
    { name: "生煎包", type: "南方名吃", desc: "底部酥脆，馅心鲜嫩", icon: "🥟" },
    { name: "肠粉", type: "南方名吃", desc: "晶莹剔透，嫩滑爽口", icon: "🍜" },
    { name: "桂林米粉", type: "南方名吃", desc: "米粉爽滑，汤鲜味美", icon: "🍜" },
    { name: "热干面", type: "南方名吃", desc: "面条筋道，酱香浓郁", icon: "🍜" },
    { name: "担担面", type: "南方名吃", desc: "麻辣鲜香，面条筋道", icon: "🍜" },
    { name: "螺蛳粉", type: "南方名吃", desc: "酸辣鲜香，风味独特", icon: "🍜" },
    { name: "肉夹馍", type: "北方名吃", desc: "馍香肉酥，肥而不腻", icon: "🥙" },
    { name: "刀削面", type: "北方名吃", desc: "面条筋道，汤汁浓郁", icon: "🍜" },
    { name: "油泼面", type: "北方名吃", desc: "香辣过瘾，面条筋道", icon: "🍜" },
    { name: "炸酱面", type: "北方名吃", desc: "酱香浓郁，面条爽滑", icon: "🍜" },
    { name: "驴肉火烧", type: "北方名吃", desc: "外酥里嫩，香味浓郁", icon: "🥙" },
    { name: "兰州拉面", type: "北方名吃", desc: "汤清味美，面条筋道", icon: "🍜" },
    { name: "重庆小面", type: "南方名吃", desc: "麻辣鲜香，面条劲道", icon: "🍜" },
    { name: "过桥米线", type: "南方名吃", desc: "汤鲜味美，米线爽滑", icon: "🍜" },
    { name: "豆皮", type: "南方名吃", desc: "外脆内软，馅料丰富", icon: "🫓" },
    
    // 国际美食
    { name: "披萨", type: "西餐", desc: "饼底酥脆，配料丰富", icon: "🍕" },
    { name: "汉堡", type: "西餐", desc: "面包松软，肉饼多汁", icon: "🍔" },
    { name: "寿司", type: "日料", desc: "米饭软糯，鱼生鲜美", icon: "🍣" },
    { name: "拉面", type: "日料", desc: "汤底浓郁，面条筋道", icon: "🍜" },
    { name: "炸鸡", type: "韩餐", desc: "外酥里嫩，香辣可口", icon: "🍗" },
    { name: "烤肉", type: "韩餐", desc: "肉质鲜嫩，香气四溢", icon: "🥩" },
    { name: "冬阴功汤", type: "泰餐", desc: "酸辣开胃，香茅味浓", icon: "🍲" },
    { name: "越南河粉", type: "越餐", desc: "汤清味美，河粉爽滑", icon: "🍜" },
    { name: "咖喱鸡", type: "印餐", desc: "咖喱浓郁，鸡肉鲜嫩", icon: "🍛" },
    { name: "意大利面", type: "西餐", desc: "面条劲道，酱汁浓郁", icon: "🍝" }
];

// 获取页面元素
const foodImageContainer = document.querySelector('.food-image-container');
const foodName = document.getElementById('foodName');
const foodType = document.getElementById('foodType');
const foodDesc = document.getElementById('foodDesc');
const randomBtn = document.getElementById('randomBtn');
const customBtn = document.getElementById('customBtn');
const loading = document.getElementById('loading');

// 模态框相关元素
const customModal = document.getElementById('customModal');
const closeModal = document.getElementById('closeModal');
const newFoodInput = document.getElementById('newFoodInput');
const addFoodBtn = document.getElementById('addFoodBtn');
const foodList = document.getElementById('foodList');
const resetBtn = document.getElementById('resetBtn');
const saveBtn = document.getElementById('saveBtn');

// 存储用户自定义食物
let customFoods = [];

// 从本地存储加载自定义食物
function loadCustomFoods() {
    const savedFoods = localStorage.getItem('customFoods');
    if (savedFoods) {
        customFoods = JSON.parse(savedFoods);
    }
}

// 保存自定义食物到本地存储
function saveCustomFoods() {
    localStorage.setItem('customFoods', JSON.stringify(customFoods));
}

// 随机选择食物函数
function getRandomFood() {
    // 显示加载状态
    loading.style.display = 'block';
    randomBtn.disabled = true;
    
    // 合并默认食物和自定义食物
    const allFoods = [...defaultFoods, ...customFoods];
    
    // 模拟网络请求延迟
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * allFoods.length);
        const selectedFood = allFoods[randomIndex];
        
        // 更新食物信息
        foodImageContainer.innerHTML = `<div class="food-icon">${selectedFood.icon}</div>`;
        foodName.textContent = selectedFood.name;
        foodType.textContent = selectedFood.type;
        foodDesc.textContent = selectedFood.desc;
        
        // 隐藏加载状态
        loading.style.display = 'none';
        randomBtn.disabled = false;
    }, 800);
}

// 打开自定义菜单模态框
function openCustomModal() {
    customModal.style.display = 'flex';
    renderCustomFoods();
}

// 关闭自定义菜单模态框
function closeCustomModal() {
    customModal.style.display = 'none';
}

// 渲染自定义食物列表
function renderCustomFoods() {
    foodList.innerHTML = '';
    
    if (customFoods.length === 0) {
        foodList.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 20px;">暂无自定义食物</p>';
        return;
    }
    
    customFoods.forEach((food, index) => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        
        foodItem.innerHTML = `
            <span class="food-item-name">${food.name}</span>
            <button class="delete-btn" data-index="${index}">删除</button>
        `;
        
        foodList.appendChild(foodItem);
    });
    
    // 添加删除按钮事件
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            customFoods.splice(index, 1);
            saveCustomFoods();
            renderCustomFoods();
        });
    });
}

// 添加自定义食物
function addCustomFood() {
    const foodName = newFoodInput.value.trim();
    
    if (!foodName) {
        alert('请输入食物名称');
        return;
    }
    
    // 创建新的食物对象
    const newFood = {
        name: foodName,
        type: '自定义',
        desc: '您自定义的美食',
        icon: '🍽️'
    };
    
    // 添加到自定义食物列表
    customFoods.push(newFood);
    saveCustomFoods();
    
    // 清空输入框
    newFoodInput.value = '';
    
    // 重新渲染列表
    renderCustomFoods();
}

// 重置自定义食物
function resetCustomFoods() {
    if (confirm('确定要重置所有自定义食物吗？')) {
        customFoods = [];
        saveCustomFoods();
        renderCustomFoods();
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 加载自定义食物
    loadCustomFoods();
    
    // 绑定按钮点击事件
    randomBtn.addEventListener('click', getRandomFood);
    customBtn.addEventListener('click', openCustomModal);
    
    // 模态框相关事件
    closeModal.addEventListener('click', closeCustomModal);
    addFoodBtn.addEventListener('click', addCustomFood);
    resetBtn.addEventListener('click', resetCustomFoods);
    saveBtn.addEventListener('click', closeCustomModal);
    
    // 点击模态框外部关闭
    customModal.addEventListener('click', function(e) {
        if (e.target === customModal) {
            closeCustomModal();
        }
    });
    
    // 按回车键添加食物
    newFoodInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addCustomFood();
        }
    });
    
    // 页面加载时随机显示一个食物
    getRandomFood();
});