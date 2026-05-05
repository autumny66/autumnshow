(function () {
  var articles = [
    {
      id: 1,
      title: '新能源汽车出口量连续8个月全球第一，产业链加速出海',
      author: '陈晓明', date: '2026-04-22',
      citations: 23, suspectCount: 2, status: 'suspect',
      summary: '据海关总署最新数据，2026年一季度我国新能源汽车出口量达到58万辆，同比增长47%，连续8个月保持全球第一。比亚迪、蔚来、小鹏等品牌在欧洲和东南亚市场份额持续扩大。',
      references: [
        { site: '腾讯新闻', type: '正规引用' },
        { site: '新浪财经', type: '正规引用' },
        { site: '网易新闻', type: '正规引用' },
        { site: '搜狐汽车', type: '正规引用' }
      ],
      suspects: [
        { site: '某自媒体平台 - "车界前沿"', similarity: 87,
          originalText: '据海关总署最新数据，2026年一季度我国新能源汽车出口量达到58万辆，同比增长47%，连续8个月保持全球第一。比亚迪、蔚来、小鹏等品牌在欧洲和东南亚市场份额持续扩大。',
          suspectText: '根据海关总署发布的最新统计，今年第一季度中国新能源汽车出口总量约58万台，同比增幅达47%，已连续八个月位居全球榜首。包括比亚迪、蔚来、小鹏在内的多个品牌在欧州和东南亚地区的市场占有率不断提升。'
        },
        { site: '某资讯网站 - "每日车讯"', similarity: 72,
          originalText: '带动整个产业链加速国际化布局。动力电池企业宁德时代已在匈牙利建立第二座工厂，预计年产能将达到100GWh，成为欧洲最大的动力电池生产基地。',
          suspectText: '整个新能源车产业链正加速走向国际市场。据悉，宁德时代在匈牙利的第二座工厂正在建设中，规划年产能为100GWh，建成后将成欧洲最大的动力电池制造基地。'
        }
      ]
    },
    {
      id: 2,
      title: '北京发布人工智能教育应用试点方案，50所中小学率先试行',
      author: '刘芳', date: '2026-04-20',
      citations: 15, suspectCount: 0, status: 'cited',
      summary: '北京市教委联合科技局发布《人工智能赋能基础教育试点工作方案》，选定50所中小学开展AI教学助手、智能作业批改等场景试点。',
      references: [
        { site: '人民网', type: '正规引用' },
        { site: '光明日报', type: '正规引用' },
        { site: '中国青年报', type: '正规引用' }
      ],
      suspects: []
    },
    {
      id: 3,
      title: '全国首个量子计算产业园在合肥正式揭牌',
      author: '赵强', date: '2026-04-18',
      citations: 31, suspectCount: 3, status: 'suspect',
      summary: '全国首个量子计算产业园区在合肥高新区正式揭牌运营。园区总规划面积1200亩，已入驻本源量子、国仪量子等12家头部企业，预计3年内形成百亿级产业集群。',
      references: [
        { site: '新华网', type: '正规引用' },
        { site: '科技日报', type: '正规引用' },
        { site: '安徽日报', type: '正规引用' },
        { site: '澎湃新闻', type: '正规引用' }
      ],
      suspects: [
        { site: '某科技博客 - "量子视界"', similarity: 91,
          originalText: '全国首个量子计算产业园区在合肥高新区正式揭牌运营。园区总规划面积1200亩，已入驻本源量子、国仪量子等12家头部企业，预计3年内形成百亿级产业集群。',
          suspectText: '国内第一家量子计算产业园在合肥高新区揭牌。该园区占地面积1200亩，目前已吸引本源量子和国仪量子等12家龙头企业入驻，预计三年内将打造出百亿级的量子计算产业集群。'
        },
        { site: '某公众号 - "前沿科技观察"', similarity: 78,
          originalText: '园区将重点建设量子芯片制造中心、量子算法研发平台和量子云服务基地三大核心板块，同时配套建设人才公寓和国际交流中心。',
          suspectText: '产业园规划了量子芯片制造、量子算法研究和量子云服务三大功能板块，另外还建设有人才住宅和国际交流中心等配套设施。'
        },
        { site: '某论坛转载', similarity: 65,
          originalText: '合肥市市长在揭牌仪式上表示，合肥将依托中科大的科研优势和产业园的集聚效应，打造具有全球影响力的量子计算创新高地。',
          suspectText: '合肥市长在仪式上发言指出，合肥将利用中科大的学术资源和产业园的产业聚集效应，建设有世界影响力的量子计算创新中心。'
        }
      ]
    },
    {
      id: 4,
      title: '长三角一体化再提速：沪苏湖高铁正式通车运营',
      author: '王建国', date: '2026-04-15',
      citations: 8, suspectCount: 0, status: 'normal',
      summary: '连接上海、苏州、湖州的沪苏湖高铁于4月15日正式通车，设计时速350公里，上海至湖州最快仅需45分钟。',
      references: [
        { site: '解放日报', type: '正规引用' },
        { site: '浙江日报', type: '正规引用' }
      ],
      suspects: []
    },
    {
      id: 5,
      title: '全国碳排放权交易市场年度报告：碳价首次突破200元/吨',
      author: '张丽华', date: '2026-04-12',
      citations: 19, suspectCount: 1, status: 'suspect',
      summary: '全国碳排放权交易市场2025年度报告显示，碳配额均价达到186元/吨，年末最高价突破200元/吨大关。全年交易总额超过500亿元，同比增长210%。',
      references: [
        { site: '经济日报', type: '正规引用' },
        { site: '21世纪经济报道', type: '正规引用' },
        { site: '中国环境报', type: '正规引用' }
      ],
      suspects: [
        { site: '某财经公众号 - "绿色金融圈"', similarity: 83,
          originalText: '全国碳排放权交易市场2025年度报告显示，碳配额均价达到186元/吨，年末最高价突破200元/吨大关。全年交易总额超过500亿元，同比增长210%。',
          suspectText: '根据全国碳交易市场公布的2025年报数据，去年碳排放配额的平均价格为186元每吨，年底时最高价曾突破200元大关。全年交易总金额超过500亿人民币，同比增幅高达210%。'
        }
      ]
    },
    {
      id: 6,
      title: '数字人民币试点城市扩容至50个，跨境支付场景取得突破',
      author: '李文杰', date: '2026-04-10',
      citations: 12, suspectCount: 0, status: 'cited',
      summary: '中国人民银行宣布数字人民币试点城市正式扩容至50个，同时在跨境支付领域取得重大突破，已与香港、新加坡、阿联酋三地实现数字货币互通结算。',
      references: [
        { site: '金融时报', type: '正规引用' },
        { site: '上海证券报', type: '正规引用' }
      ],
      suspects: []
    }
  ];

  var tbody = document.getElementById('articleTableBody');
  var modalOverlay = document.getElementById('modalOverlay');
  var modalTitle = document.getElementById('modalTitle');
  var modalBody = document.getElementById('modalBody');
  var modalClose = document.getElementById('modalClose');

  function renderTable(filter) {
    var filtered = filter === 'all' ? articles : articles.filter(function (a) { return a.status === filter; });
    tbody.innerHTML = '';
    var statusLabel = { normal: '正常', cited: '已引用', suspect: '疑似盗用' };
    filtered.forEach(function (a) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' + a.title + '</td>' +
        '<td>' + a.author + '</td>' +
        '<td>' + a.date + '</td>' +
        '<td>' + a.citations + '</td>' +
        '<td>' + (a.suspectCount > 0 ? '<span style="color:var(--danger);font-weight:600">' + a.suspectCount + '</span>' : '0') + '</td>' +
        '<td><span class="status-tag ' + a.status + '">' + statusLabel[a.status] + '</span></td>' +
        '<td><button class="detail-btn" data-id="' + a.id + '">查看详情</button></td>';
      tbody.appendChild(tr);
    });
  }

  function escapeHtml(t) {
    var d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function buildRadiationSvg(article) {
    // Collect all nodes: references + suspects
    var nodes = [];
    article.references.forEach(function (r) {
      nodes.push({ name: r.site, type: 'cite', label: r.type });
    });
    article.suspects.forEach(function (s) {
      nodes.push({ name: s.site, type: 'suspect', label: '疑似盗用' });
    });

    var total = nodes.length;
    if (total === 0) return '';

    // SVG dimensions
    var W = 700, H = 440;
    var cx = W / 2, cy = H / 2;
    var R = 160; // radius for outer nodes

    var svg = '<div class="radiation-wrapper">';
    svg += '<svg class="radiation-svg" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">';

    // Defs for glow filter
    svg += '<defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>';

    // Draw lines first (behind nodes)
    nodes.forEach(function (n, i) {
      var angle = (2 * Math.PI * i / total) - Math.PI / 2;
      var nx = cx + R * Math.cos(angle);
      var ny = cy + R * Math.sin(angle);
      var lineClass = n.type === 'cite' ? 'cite-line' : 'suspect-line';
      var delay = (i * 0.1).toFixed(1);
      svg += '<line class="rad-line ' + lineClass + '" x1="' + cx + '" y1="' + cy + '" x2="' + nx.toFixed(1) + '" y2="' + ny.toFixed(1) + '" style="animation-delay:' + delay + 's"/>';
    });

    // Center node
    svg += '<circle class="center-pulse" cx="' + cx + '" cy="' + cy + '" r="36"/>';
    svg += '<circle class="center-node" cx="' + cx + '" cy="' + cy + '" r="36" filter="url(#glow)"/>';

    // Center label - truncate title
    var shortTitle = article.title.length > 8 ? article.title.substring(0, 8) + '...' : article.title;
    svg += '<text class="center-label" x="' + cx + '" y="' + (cy - 4) + '" text-anchor="middle" dominant-baseline="middle">' + escapeHtml(shortTitle) + '</text>';
    svg += '<text x="' + cx + '" y="' + (cy + 12) + '" text-anchor="middle" font-size="10" fill="#fff" opacity="0.8" font-family="' + getComputedStyle(document.body).fontFamily + '">本站原创</text>';

    // Outer nodes
    nodes.forEach(function (n, i) {
      var angle = (2 * Math.PI * i / total) - Math.PI / 2;
      var nx = cx + R * Math.cos(angle);
      var ny = cy + R * Math.sin(angle);
      var nodeR = n.type === 'cite' ? 28 : 26;
      var nodeClass = n.type === 'cite' ? 'outer-node-cite' : 'outer-node-suspect';
      var delay = (i * 0.12 + 0.3).toFixed(2);

      // Node circle
      svg += '<circle class="' + nodeClass + '" cx="' + nx.toFixed(1) + '" cy="' + ny.toFixed(1) + '" r="' + nodeR + '" style="animation-delay:' + delay + 's" filter="url(#glow)"/>';

      // Short name
      var shortName = n.name.length > 6 ? n.name.substring(0, 6) + '..' : n.name;
      svg += '<text class="outer-label" x="' + nx.toFixed(1) + '" y="' + (ny + 1).toFixed(1) + '" text-anchor="middle" dominant-baseline="middle" style="animation-delay:' + delay + 's">' + escapeHtml(shortName) + '</text>';

      // Type label below node
      var labelY = ny + nodeR + 14;
      svg += '<text class="outer-type" x="' + nx.toFixed(1) + '" y="' + labelY.toFixed(1) + '" text-anchor="middle" style="animation-delay:' + delay + 's">' + n.label + '</text>';
    });

    svg += '</svg>';
    svg += '<div class="radiation-legend">';
    svg += '<span><span class="dot cite"></span>正规引用</span>';
    svg += '<span><span class="dot suspect"></span>疑似盗用</span>';
    svg += '</div>';
    svg += '</div>';
    return svg;
  }

  function openModal(id) {
    var a = articles.find(function (x) { return x.id === id; });
    if (!a) return;
    modalTitle.textContent = a.title;
    var h = '';
    h += '<h4>&#x1F4C4; 原文摘要</h4>';
    h += '<p style="font-size:0.9rem;color:var(--text);line-height:1.8;background:var(--bg);padding:14px;border-radius:8px">' + a.summary + '</p>';

    // Radiation diagram
    h += '<h4>&#x1F310; 引用辐射图</h4>';
    h += buildRadiationSvg(a);

    h += '<h4>&#x1F517; 引用来源（' + a.references.length + '）</h4><div class="ref-list">';
    a.references.forEach(function (r) {
      h += '<div class="ref-item"><span class="ref-site">' + r.site + '</span><span class="ref-type">' + r.type + '</span></div>';
    });
    h += '</div>';
    if (a.suspects.length > 0) {
      h += '<h4 style="color:var(--danger)">&#x26A0;&#xFE0F; 疑似盗用内容（' + a.suspects.length + '处）</h4>';
      a.suspects.forEach(function (s) {
        var lv = s.similarity >= 80 ? 'high' : (s.similarity >= 60 ? 'medium' : 'low');
        h += '<div style="margin-bottom:20px;padding:16px;background:#fef2f2;border-radius:8px;border:1px solid #fecaca">';
        h += '<div style="font-weight:600;font-size:0.9rem;margin-bottom:12px">&#x1F6A8; ' + s.site + '</div>';
        h += '<div class="similarity-bar"><div class="bar-label"><span>内容相似度</span><span style="font-weight:700;color:var(--danger)">' + s.similarity + '%</span></div>';
        h += '<div class="bar-track"><div class="bar-fill ' + lv + '" style="width:0%" data-width="' + s.similarity + '%"></div></div></div>';
        h += '<div class="compare-box"><div class="compare-col original"><div class="col-label">&#x2705; 本站原文</div>' + s.originalText + '</div>';
        h += '<div class="compare-col suspect-col"><div class="col-label">&#x274C; 疑似盗用</div>' + s.suspectText + '</div></div></div>';
      });
    } else {
      h += '<h4>&#x2705; 版权状态</h4>';
      h += '<p style="color:var(--success);font-size:0.9rem;padding:14px;background:#f0fdf4;border-radius:8px">未发现疑似盗用内容，版权保护状态良好。</p>';
    }
    modalBody.innerHTML = h;
    modalOverlay.classList.add('show');
    setTimeout(function () {
      document.querySelectorAll('.bar-fill[data-width]').forEach(function (b) { b.style.width = b.getAttribute('data-width'); });
    }, 100);
  }

  function closeModal() { modalOverlay.classList.remove('show'); }

  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderTable(btn.getAttribute('data-filter'));
    });
  });

  tbody.addEventListener('click', function (e) {
    if (e.target.classList.contains('detail-btn')) openModal(parseInt(e.target.getAttribute('data-id')));
  });
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function (e) { if (e.target === modalOverlay) closeModal(); });
  renderTable('all');
})();
