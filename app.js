const tripData = {
  imageOverrides: {},
  overview: {
    title: '16天 15晚欧洲夏日行程',
    summary: '7月18日至8月2日，巴黎5晚、苏黎世2晚、威尼斯1晚、佛罗伦萨2晚、罗马2晚、尼斯2晚、蒙彼利埃1晚。交通、住宿与主要景点均已提前规划。',
    route: '北京 → 巴黎 → 苏黎世 → 威尼斯 → 佛罗伦萨 → 罗马 → 尼斯 → 蒙彼利埃 → 巴黎 → 上海',
  },
  transports: [
    {
      date: '7月18日',
      title: '北京 → 巴黎',
      detail: '航班 CA933 PEK-CDG，巴黎到达后使用 RER + 步行前往酒店。',
      tag: '国际航班',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80',
      imageKey: 'transport-cdg',
    },
    {
      date: '7月23日',
      title: '巴黎 → 苏黎世',
      detail: '火车 LYRIA9203，从巴塞尔经苏黎世。',
      tag: '火车',
      image: 'https://images.unsplash.com/photo-1673086636059-0f4abc8b853b?auto=format&fit=crop&w=900&q=80',
      imageKey: 'transport-zrh',
    },
    {
      date: '7月25日',
      title: '苏黎世 → 威尼斯',
      detail: 'EC301 直达威尼斯，经基亚索。',
      tag: '火车',
      image: 'https://images.unsplash.com/photo-1586752488885-6ce47fdfd874?auto=format&fit=crop&w=900&q=80',
      imageKey: 'transport-venice',
    },
    {
      date: '7月26日',
      title: '威尼斯 → 佛罗伦萨',
      detail: 'Frecciarossa 9421，13:38 发车，15:39 抵达。',
      tag: '高速列车',
      image: 'https://images.unsplash.com/photo-1750268987200-af745f8aaefb?auto=format&fit=crop&w=900&q=80',
      imageKey: 'transport-firenze',
    },
    {
      date: '7月27日',
      title: '佛罗伦萨 → 比萨 → 佛罗伦萨',
      detail: 'Regionale 18373/18403 往返比萨，安排比萨斜塔游览。',
      tag: '城际火车',
      image: 'https://images.unsplash.com/photo-1767725161977-adbc12b0984c?auto=format&fit=crop&w=900&q=80',
      imageKey: 'transport-pisa',
    },
    {
      date: '7月28日',
      title: '佛罗伦萨 → 罗马',
      detail: 'Frecciarossa 89123，11:14 发车，15:00 抵达罗马。',
      tag: '高速列车',
      image: 'https://images.unsplash.com/photo-1708753662011-7db4eed9d054?auto=format&fit=crop&w=900&q=80',
      imageKey: 'transport-rome',
    },
    {
      date: '7月30日',
      title: '罗马 → 尼斯',
      detail: '航班 AZ344 FCO-NCE，预计 14:30 抵达。',
      tag: '国际航班',
      image: 'https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?auto=format&fit=crop&w=900&q=80',
      imageKey: 'transport-nce',
    },
    {
      date: '8月1日',
      title: '尼斯 → 蒙彼利埃',
      detail: 'ZOU! 17482 & 876562，13:25 发车，18:28 抵达。',
      tag: '城际大巴',
      image: 'https://images.unsplash.com/photo-1516865031314-1b35bb770c7f?auto=format&fit=crop&w=900&q=80',
      imageKey: 'transport-mpl',
    },
    {
      date: '8月2日',
      title: '蒙彼利埃 → 巴黎 → 上海',
      detail: '18:40 AF7467 + AF116 MPL-CDG，转机回上海。',
      tag: '回程',
      image: 'https://images.unsplash.com/photo-1606768666853-403c90a981ad?auto=format&fit=crop&w=900&q=80',
      imageKey: 'transport-home',
    },
  ],
  hotels: [
    {
      city: '巴黎',
      name: '巴黎意大利大道宜必思酒店',
      stay: '7/18-7/23',
      address: '15 Bis Av. d\'Italie, Paris, 75013, France',
      phone: '+33-1-53796000',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'hotel-paris',
    },
    {
      city: '苏黎世',
      name: 'Central Zurich 3 床公寓',
      stay: '7/23-7/25',
      address: 'Langstrasse 652, 8004 Zurich',
      phone: '+41 78 240 48 91',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'hotel-zurich',
    },
    {
      city: '威尼斯',
      name: 'Casa di Serena',
      stay: '7/25-7/26',
      address: '10 Via Nervesa, 30171 Mestre, Venice',
      phone: '+39 389 259 1943',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'hotel-venice',
    },
    {
      city: '佛罗伦萨',
      name: 'Duccio Flat（Santa Maria Novella）',
      stay: '7/26-7/28',
      address: '122 Via Palazzuolo, 50123 Florence',
      phone: '+39 366 155 5296',
      image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'hotel-florence',
    },
    {
      city: '罗马',
      name: 'Aura San Lorenzo',
      stay: '7/28-7/30',
      address: 'Via dei Liguri, 15, 00185 Rome',
      phone: '+39 375 134 2412',
      image: 'https://images.unsplash.com/photo-1711059985570-4c32ed12a12c?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'hotel-rome',
    },
    {
      city: '尼斯',
      name: '尼斯翻新公寓',
      stay: '7/30-8/1',
      address: '136 Boulevard Gambetta, Nice, France',
      phone: '+33 6 98 42 30 00',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'hotel-nice',
    },
    {
      city: '蒙彼利埃',
      name: 'Citadines Antigone Montpellier',
      stay: '8/1-8/2',
      address: '588 Bd d\'Antigone, Montpellier, 34000, France',
      phone: '+33 4 99 52 37 50',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'hotel-montpellier',
    },
  ],
  daily: [
    {
      date: '2026年7月18日（星期六）',
      city: '北京 → 巴黎',
      highlight: '抵达巴黎，入住宜必思酒店',
      items: [
        '航班 CA933 PEK-CDG',
        '巴黎意大利大道宜必思酒店入住',
        'RER + 步行抵达酒店',
      ],
      image: 'https://images.unsplash.com/photo-1459455356093-6495cff2a2c4?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-1',
    },
    {
      date: '2026年7月19日（星期日）',
      city: '巴黎',
      highlight: '巴黎经典景点一日游',
      items: [
        '9:30 圣礼拜堂',
        '圣母院',
        '万神殿',
        '14:30 奥赛博物馆',
        '荣军院',
        '埃菲尔铁塔',
      ],
      image: 'https://images.unsplash.com/photo-1661681241250-ffd062ad125f?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-2',
    },
    {
      date: '2026年7月20日（星期一）',
      city: '巴黎',
      highlight: '卢浮宫 + 橙园美术馆',
      items: [
        '9:30 卢浮宫',
        '13:30 Marine 酒店',
        '15:00 橙园美术馆',
        '购物',
      ],
      image: 'https://images.unsplash.com/photo-1541264161754-445bbdd7de52?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-3',
    },
    {
      date: '2026年7月21日（星期二）',
      city: '巴黎',
      highlight: '凡尔赛 + 蒙马特 + 凯旋门',
      items: [
        '10:00 凡尔赛宫与花园',
        '蒙马特',
        '晚上凯旋门',
        '香榭丽舍大街',
      ],
      image: 'https://images.unsplash.com/photo-1591828353335-197466da2a4e?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-4',
    },
    {
      date: '2026年7月22日（星期三）',
      city: '巴黎',
      highlight: '迪士尼乐园',
      items: ['巴黎迪士尼一整天'],
      image: 'https://images.unsplash.com/photo-1605443790760-18c6121939d3?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-5',
    },
    {
      date: '2026年7月23日（星期四）',
      city: '巴黎 → 苏黎世',
      highlight: 'LYRIA 高铁前往瑞士',
      items: ['7:20 LYRIA9203 巴塞尔-苏黎世', '入住 Central Zurich 3 床公寓', '14:00 瑞吉山'],
      image: 'https://images.unsplash.com/photo-1599082323832-2676eca28e86?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-6',
    },
    {
      date: '2026年7月24日（星期五）',
      city: '苏黎世',
      highlight: 'First 山 + 少女峰',
      items: ['9:00 First 山', '14:00 少女峰'],
      image: 'https://images.unsplash.com/photo-1664954628844-a83af173ce74?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-7',
    },
    {
      date: '2026年7月25日（星期六）',
      city: '威尼斯',
      highlight: 'EC301 前往威尼斯，圣马可广场漫步',
      items: ['EC301 苏黎世-基亚索-威尼斯', '入住 Casa di Serena', '陆地游览圣马可广场'],
      image: 'https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-8',
    },
    {
      date: '2026年7月26日（星期日）',
      city: '威尼斯 / 佛罗伦萨',
      highlight: '贡多拉 + 红箭列车前往佛罗伦萨',
      items: ['贡多拉游览与购物', '13:38-15:39 Frecciarossa 9421', '17:00 米开朗基罗广场'],
      image: 'https://images.unsplash.com/photo-1511135570219-bbad9a02f103?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-9',
    },
    {
      date: '2026年7月27日（星期一）',
      city: '佛罗伦萨',
      highlight: '老桥 + 圣母百花大教堂 + 比萨一日游',
      items: ['8:30 老桥', '10:30 圣母百花大教堂', '13:53-15:11 Regionale 18373 佛罗伦萨-比萨', '比萨游览', '18:46-20:08 Regionale 18403 比萨-佛罗伦萨'],
      image: 'https://images.unsplash.com/photo-1626252043332-23d2cf5d0aa9?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-10',
    },
    {
      date: '2026年7月28日（星期二）',
      city: '佛罗伦萨 / 罗马',
      highlight: '乌菲兹 + 红箭列车前往罗马',
      items: ['8:15 乌菲兹美术馆', '9:45 佛罗伦萨学院画廊', '11:14-15:00 Frecciarossa 89123', '入住 Aura San Lorenzo', '16:00 罗马斗兽场'],
      image: 'https://images.unsplash.com/photo-1696706731507-657a7678ae79?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-11',
    },
    {
      date: '2026年7月29日（星期三）',
      city: '罗马 / 梵蒂冈',
      highlight: '圣彼得大教堂 + 梵蒂冈博物馆 + 特雷维喷泉',
      items: ['8:30 圣彼得大教堂', '12:30 梵蒂冈博物馆', '16:30 特雷维喷泉与万神殿'],
      image: 'https://images.unsplash.com/photo-1621710290073-c0bbf4292896?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-12',
    },
    {
      date: '2026年7月30日（星期四）',
      city: '罗马 / 尼斯',
      highlight: 'AZ344 飞机前往尼斯，天使湾漫步',
      items: ['13:15-14:30 AZ344 FCO-NCE', '入住尼斯翻新公寓', '16:00 天使湾'],
      image: 'https://images.unsplash.com/photo-1551799142-93484f2d0284?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-13',
    },
    {
      date: '2026年7月31日（星期五）',
      city: '尼斯',
      highlight: '安提比 + 尼斯漫步',
      items: ['9:00 安提比城市漫步', '16:00 尼斯城市漫步'],
      image: 'https://images.unsplash.com/photo-1503485668041-4e13e857dd1c?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-14',
    },
    {
      date: '2026年8月1日（星期六）',
      city: '尼斯 / 蒙彼利埃',
      highlight: '尼斯购物 + ZOU! 大巴前往蒙彼利埃',
      items: ['尼斯城市漫步与购物', '13:25-18:28 ZOU! 17482 & 876562', '入住 Citadines Antigone Montpellier'],
      image: 'https://images.unsplash.com/photo-1613283850334-9219c5fb7143?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-15',
    },
    {
      date: '2026年8月2日（星期日）',
      city: '蒙彼利埃 → 巴黎 → 上海',
      highlight: '蒙彼利埃购物 + 回程航班',
      items: ['蒙彼利埃休息与购物', '18:40 AF7467 & AF116 MPL-CDG', 'Uber 前往机场'],
      image: 'https://images.unsplash.com/photo-1612263160749-6f79adb37969?fm=jpg&q=80&w=900&auto=format&fit=crop',
      imageKey: 'day-16',
    },
  ],
  todos: [
    { id: 1, text: '准备护照、签证和旅行证件', done: false },
    { id: 2, text: '打印机票/火车票凭证与酒店预订单', done: false },
    { id: 3, text: '巴黎交通卡与瑞士火车票确认', done: false },
    { id: 4, text: '7/18 CA933 航班起飞时间待确认', done: false },
    { id: 5, text: '7/23 LYRIA9203 07:20 发车', done: false },
    { id: 6, text: '7/25 EC301 直达威尼斯出发时间待确认', done: false },
    { id: 7, text: '7/26 Frecciarossa 9421 13:38 发车', done: false },
    { id: 8, text: '7/27 Regionale 18373 13:53 / 18403 18:46 发车', done: false },
    { id: 9, text: '7/28 Frecciarossa 89123 11:14 发车', done: false },
    { id: 10, text: '7/30 AZ344 13:15 FCO-NCE 发车', done: false },
    { id: 11, text: '8/1 ZOU! 17482 & 876562 13:25 发车', done: false },
    { id: 12, text: '8/2 AF7467 18:40 MPL-CDG 起飞', done: false },
  ],
};

const selectors = {
  themeToggle: document.getElementById('themeToggle'),
  tabs: document.querySelectorAll('.tab-button'),
  panels: document.querySelectorAll('.tab-panel'),
  overviewList: document.getElementById('overviewList'),
  overviewCard: document.getElementById('overviewCard'),
  transportList: document.getElementById('transportList'),
  hotelList: document.getElementById('hotelList'),
  dailyList: document.getElementById('dailyList'),
  todoForm: document.getElementById('todoForm'),
  todoInput: document.getElementById('todoInput'),
  todoList: document.getElementById('todoList'),
};

function switchTab(tabKey) {
  selectors.tabs.forEach(button => button.classList.toggle('active', button.dataset.tab === tabKey));
  selectors.panels.forEach(panel => panel.classList.toggle('active', panel.id === tabKey));
}

selectors.tabs.forEach(button => button.addEventListener('click', () => switchTab(button.dataset.tab)));

function getCardImage(item) {
  if (item.imageKey && tripData.imageOverrides[item.imageKey]) {
    return tripData.imageOverrides[item.imageKey];
  }
  return item.image;
}

function saveImageOverrides() {
  localStorage.setItem('tripImageOverrides', JSON.stringify(tripData.imageOverrides));
}

function loadImageOverrides() {
  const stored = localStorage.getItem('tripImageOverrides');
  if (stored) {
    try {
      tripData.imageOverrides = JSON.parse(stored);
    } catch (err) {
      console.warn('无法读取图片覆盖', err);
    }
  }
}

function openImageEditor(item) {
  if (!item.imageKey) return;
  const currentUrl = getCardImage(item) || '';
  const newUrl = window.prompt('请输入新的图片 URL，留空可删除自定义图片', currentUrl);
  if (newUrl === null) return;
  const trimmed = newUrl.trim();
  if (trimmed) {
    tripData.imageOverrides[item.imageKey] = trimmed;
  } else {
    delete tripData.imageOverrides[item.imageKey];
  }
  saveImageOverrides();
  renderAll();
}

function createCard(item) {
  const card = document.createElement('article');
  card.className = 'card';

  const imageUrl = getCardImage(item);
  if (imageUrl) {
    const img = document.createElement('div');
    img.className = 'card-image';
    img.style.backgroundImage = `url(${imageUrl})`;
    card.appendChild(img);
  }

  const content = document.createElement('div');
  content.className = 'card-content';

  const title = document.createElement('h3');
  title.textContent = item.title;
  content.appendChild(title);

  if (item.subtitle) {
    const subtitle = document.createElement('p');
    subtitle.className = 'card-subtitle';
    subtitle.textContent = item.subtitle;
    content.appendChild(subtitle);
  }

  if (item.detail) {
    const detail = document.createElement('p');
    detail.className = 'card-text';
    detail.textContent = item.detail;
    content.appendChild(detail);
  }

  if (item.route) {
    const route = document.createElement('p');
    route.className = 'card-text muted';
    route.textContent = item.route;
    content.appendChild(route);
  }

  if (item.tag) {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = item.tag;
    content.appendChild(tag);
  }

  if (item.items) {
    const list = document.createElement('ul');
    list.className = 'item-list';
    item.items.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      list.appendChild(li);
    });
    content.appendChild(list);
  }

  if (item.imageKey) {
    const actionRow = document.createElement('div');
    actionRow.className = 'card-actions';
    const imageButton = document.createElement('button');
    imageButton.type = 'button';
    imageButton.className = 'image-edit-button secondary';
    imageButton.textContent = '替换图片';
    imageButton.addEventListener('click', () => openImageEditor(item));
    actionRow.appendChild(imageButton);
    content.appendChild(actionRow);
  }

  card.appendChild(content);
  return card;
}

function createCityCard(city) {
  const card = document.createElement('div');
  card.className = 'city-card';

  const imageUrl = getCardImage(city);
  const imageEl = document.createElement('div');
  imageEl.className = 'city-image';
  imageEl.style.backgroundImage = `url(${imageUrl})`;
  card.appendChild(imageEl);

  const info = document.createElement('div');
  info.className = 'city-info';
  const title = document.createElement('h3');
  title.textContent = city.title;
  const subtitle = document.createElement('p');
  subtitle.textContent = city.subtitle;
  info.append(title, subtitle);
  card.appendChild(info);

  if (city.imageKey) {
    const actionRow = document.createElement('div');
    actionRow.className = 'card-actions';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'image-edit-button secondary';
    button.textContent = '替换图片';
    button.addEventListener('click', () => openImageEditor(city));
    actionRow.appendChild(button);
    card.appendChild(actionRow);
  }

  return card;
}

function renderOverview() {
  selectors.overviewCard.innerHTML = '';
  const card = document.createElement('div');
  card.className = 'overview-summary';
  const title = document.createElement('h2');
  title.textContent = tripData.overview.title;
  const summary = document.createElement('p');
  summary.textContent = tripData.overview.summary;
  const route = document.createElement('p');
  route.className = 'route-text';
  route.textContent = tripData.overview.route;
  card.append(title, summary, route);
  selectors.overviewCard.appendChild(card);

  selectors.overviewList.innerHTML = '';
  const cities = [
    { title: '巴黎', subtitle: '7/18 – 7/23', image: 'https://images.unsplash.com/photo-1459455356093-6495cff2a2c4?fm=jpg&q=80&w=900&auto=format&fit=crop', imageKey: 'city-paris' },
    { title: '苏黎世', subtitle: '7/23 – 7/25', image: 'https://images.unsplash.com/photo-1599082323832-2676eca28e86?fm=jpg&q=80&w=900&auto=format&fit=crop', imageKey: 'city-zurich' },
    { title: '威尼斯', subtitle: '7/25 – 7/26', image: 'https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?fm=jpg&q=80&w=900&auto=format&fit=crop', imageKey: 'city-venice' },
    { title: '佛罗伦萨', subtitle: '7/26 – 7/28', image: 'https://images.unsplash.com/photo-1696706731507-657a7678ae79?fm=jpg&q=80&w=900&auto=format&fit=crop', imageKey: 'city-florence' },
    { title: '罗马', subtitle: '7/28 – 7/30', image: 'https://images.unsplash.com/photo-1699012462295-bace478f27bc?fm=jpg&q=80&w=900&auto=format&fit=crop', imageKey: 'city-rome' },
    { title: '尼斯', subtitle: '7/30 – 8/1', image: 'https://images.unsplash.com/photo-1551799142-93484f2d0284?fm=jpg&q=80&w=900&auto=format&fit=crop', imageKey: 'city-nice' },
    { title: '蒙彼利埃', subtitle: '8/1 – 8/2', image: 'https://images.unsplash.com/photo-1613283850334-9219c5fb7143?fm=jpg&q=80&w=900&auto=format&fit=crop', imageKey: 'city-montpellier' },
  ];
  cities.forEach(city => {
    selectors.overviewList.appendChild(createCityCard(city));
  });
}

function renderTransport() {
  selectors.transportList.innerHTML = '';
  tripData.transports.forEach(item => {
    const card = createCard(item);
    selectors.transportList.appendChild(card);
  });
}

function renderHotels() {
  selectors.hotelList.innerHTML = '';
  tripData.hotels.forEach(item => {
    const card = createCard({
      title: `${item.city} · ${item.name}`,
      subtitle: item.stay,
      detail: `地址：${item.address}\n电话：${item.phone}`,
      tag: '住宿',
      image: item.image,
      imageKey: item.imageKey,
    });
    selectors.hotelList.appendChild(card);
  });
}

function renderDaily() {
  selectors.dailyList.innerHTML = '';
  tripData.daily.forEach(item => {
    const card = createCard({
      title: `${item.date} · ${item.city}`,
      subtitle: item.highlight,
      detail: '',
      items: item.items,
      tag: '每日行程',
      image: item.image,
      imageKey: item.imageKey,
    });
    selectors.dailyList.appendChild(card);
  });
}

function renderAll() {
  renderOverview();
  renderTransport();
  renderHotels();
  renderDaily();
  renderTodo();
}

function loadTodos() {
  const stored = localStorage.getItem('tripTodos');
  if (stored) {
    try {
      tripData.todos = JSON.parse(stored);
    } catch (err) {
      console.warn('无法加载待办列表', err);
    }
  }
}

function saveTodos() {
  localStorage.setItem('tripTodos', JSON.stringify(tripData.todos));
}

function renderTodo() {
  selectors.todoList.innerHTML = '';
  tripData.todos.forEach(todo => {
    const label = document.createElement('label');
    label.className = 'todo-item';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.done;
    checkbox.dataset.id = todo.id;
    const circle = document.createElement('span');
    circle.className = 'checkbox-circle';
    const text = document.createElement('span');
    text.className = 'todo-text' + (todo.done ? ' done' : '');
    text.textContent = todo.text;

    checkbox.addEventListener('change', () => {
      todo.done = checkbox.checked;
      saveTodos();
      renderTodo();
    });

    label.appendChild(checkbox);
    label.appendChild(circle);
    label.appendChild(text);
    selectors.todoList.appendChild(label);
  });
}

selectors.todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = selectors.todoInput.value.trim();
  if (!text) return;
  const nextId = tripData.todos.length ? Math.max(...tripData.todos.map(item => item.id)) + 1 : 1;
  tripData.todos.push({ id: nextId, text, done: false });
  selectors.todoInput.value = '';
  saveTodos();
  renderTodo();
});

selectors.themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  selectors.themeToggle.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
});

function init() {
  loadImageOverrides();
  loadTodos();
  renderAll();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

init();
