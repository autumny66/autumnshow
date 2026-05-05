(function () {
  // ===== Media Tier Config =====
  var tiers = {
    S: { label: 'S级', coeff: 3.0, color: '#dc2626', bg: '#fef2f2' },
    A: { label: 'A级', coeff: 2.0, color: '#ea580c', bg: '#fff7ed' },
    B: { label: 'B级', coeff: 1.2, color: '#2563eb', bg: '#eff6ff' },
    C: { label: 'C级', coeff: 0.5, color: '#6b7280', bg: '#f3f4f6' }
  };

  // ===== Article Data =====
  var articles = [
    {
      id: 1,
      title: '全国首个量子计算产业园在合肥正式揭牌',
      author: '赵强', dept: '科技部',
      date: '2026-04-18', isExclusive: true,
      citations: [
        { media: '新华社', tier: 'S', type: '全文转载' },
        { media: '人民日报', tier: 'S', type: '深度引用' },
        { media: '央视新闻', tier: 'S', type: '视频报道引用' },
        { media: '科技日报', tier: 'A', type: '全文转载' },
        { media: '澎湃新闻', tier: 'A', type: '深度引用' },
        { media: '第一财经', tier: 'A', type: '数据引用' },
        { media: '安徽日报', tier: 'B', type: '全文转载' },
        { media: '合肥晚报', tier: 'B', type: '引用' },
        { media: '量子前沿（公众号）', tier: 'C', type: '转载' },
        { media: '科技头条号', tier: 'C', type: '引用' },
        { media: '量子产业网', tier: 'C', type: '转载' }
      ],
      secondaryRefs: 38,
      timeliness: 1.0,
      spreadDepth: 1.8
    },
    {
      id: 2,
      title: '新能源汽车出口量连续8个月全球第一，产业链加速出海',
      author: '陈晓明', dept: '经济部',
      date: '2026-04-22', isExclusive: false,
      citations: [
        { media: '央视新闻', tier: 'S', type: '新闻联播引用' },
        { media: '经济日报', tier: 'A', type: '全文转载' },
        { media: '第一财经', tier: 'A', type: '深度引用' },
        { media: '21世纪经济报道', tier: 'A', type: '数据分析引用' },
        { media: '腾讯新闻', tier: 'C', type: '全文转载' },
        { media: '新浪财经', tier: 'C', type: '转载' },
        { media: '网易新闻', tier: 'C', type: '转载' },
        { media: '搜狐汽车', tier: 'C', type: '引用' },
        { media: '汽车之家', tier: 'B', type: '深度引用' },
        { media: '每日经济新闻', tier: 'A', type: '引用' }
      ],
      secondaryRefs: 25,
      timeliness: 1.0,
      spreadDepth: 1.5
    },
    {
      id: 3,
      title: '国务院发布新一轮科技创新支持政策深度解读',
      author: '周婷', dept: '时政部',
      date: '2026-04-24', isExclusive: true,
      citations: [
        { media: '人民日报', tier: 'S', type: '深度引用' },
        { media: '新华社', tier: 'S', type: '政策解读引用' },
        { media: '光明日报', tier: 'S', type: '全文转载' },
        { media: '经济日报', tier: 'A', type: '全文转载' },
        { media: '中国日报', tier: 'S', type: '引用' },
        { media: '澎湃新闻', tier: 'A', type: '深度引用' },
        { media: '南方周末', tier: 'A', type: '深度分析引用' },
        { media: '财经杂志', tier: 'A', type: '引用' },
        { media: '新浪财经', tier: 'C', type: '转载' }
      ],
      secondaryRefs: 45,
      timeliness: 1.0,
      spreadDepth: 2.2
    },
    {
      id: 4,
      title: '独家调查：乡村振兴中的数字农业实践样本',
      author: '王芳', dept: '农村部',
      date: '2026-04-10', isExclusive: true,
      citations: [
        { media: '农民日报', tier: 'A', type: '全文转载' },
        { media: '人民网', tier: 'S', type: '深度引用' },
        { media: '央视农业频道', tier: 'A', type: '视频引用' },
        { media: '南方农村报', tier: 'B', type: '全文转载' },
        { media: '各省市农业信息网', tier: 'B', type: '转载' },
        { media: '三农头条', tier: 'C', type: '转载' }
      ],
      secondaryRefs: 15,
      timeliness: 0.8,
      spreadDepth: 1.3
    },
    {
      id: 5,
      title: '全国碳排放权交易市场年度报告：碳价首次突破200元/吨',
      author: '张丽华', dept: '经济部',
      date: '2026-04-12', isExclusive: false,
      citations: [
        { media: '经济日报', tier: 'A', type: '数据引用' },
        { media: '21世纪经济报道', tier: 'A', type: '深度引用' },
        { media: '中国环境报', tier: 'A', type: '全文转载' },
        { media: '财新网', tier: 'A', type: '引用' },
        { media: '上海证券报', tier: 'A', type: '数据分析' },
        { media: '证券时报', tier: 'B', type: '引用' },
        { media: '绿色金融圈（公众号）', tier: 'C', type: '转载' },
        { media: '碳中和资讯', tier: 'C', type: '引用' }
      ],
      secondaryRefs: 22,
      timeliness: 0.8,
      spreadDepth: 1.6
    },
    {
      id: 6,
      title: '数字人民币试点城市扩容至50个，跨境支付场景取得突破',
      author: '李文杰', dept: '财经部',
      date: '2026-04-10', isExclusive: false,
      citations: [
        { media: '金融时报', tier: 'A', type: '全文转载' },
        { media: '上海证券报', tier: 'A', type: '引用' },
        { media: '财新网', tier: 'A', type: '深度引用' },
        { media: '各地方日报', tier: 'B', type: '转载' },
        { media: '支付资讯（公众号）', tier: 'C', type: '转载' },
        { media: '区块链头条', tier: 'C', type: '引用' }
      ],
      secondaryRefs: 12,
      timeliness: 0.8,
      spreadDepth: 1.2
    },
    {
      id: 7,
      title: '长三角一体化再提速：沪苏湖高铁正式通车运营',
      author: '王建国', dept: '长三角报道组',
      date: '2026-04-15', isExclusive: false,
      citations: [
        { media: '解放日报', tier: 'A', type: '全文转载' },
        { media: '浙江日报', tier: 'A', type: '引用' },
        { media: '新华日报', tier: 'A', type: '引用' },
        { media: '湖州日报', tier: 'B', type: '全文转载' },
        { media: '苏州日报', tier: 'B', type: '转载' },
        { media: '长三角资讯', tier: 'C', type: '转载' }
      ],
      secondaryRefs: 8,
      timeliness: 0.8,
      spreadDepth: 1.0
    },
    {
      id: 8,
      title: '深度：中国空间站第三批科学实验成果公布',
      author: '赵强', dept: '科技部',
      date: '2026-04-05', isExclusive: true,
      citations: [
        { media: '新华社', tier: 'S', type: '全文转载' },
        { media: '人民日报', tier: 'S', type: '头版引用' },
        { media: '科技日报', tier: 'A', type: '全文转载' },
        { media: '中国科学报', tier: 'A', type: '深度分析' },
        { media: '环球时报', tier: 'A', type: '引用' },
        { media: '航天爱好者网', tier: 'C', type: '转载' },
        { media: 'NASA Watch（外媒）', tier: 'S', type: '引用' }
      ],
      secondaryRefs: 52,
      timeliness: 0.6,
      spreadDepth: 2.5
    }
  ];

  // ===== Score Calculation =====
  function calcScore(article) {
    var baseScore = 0;
    var tierCounts = { S: 0, A: 0, B: 0, C: 0 };
    article.citations.forEach(function (c) {
      baseScore += tiers[c.tier].coeff;
      tierCounts[c.tier]++;
    });
    var exclusiveBonus = article.isExclusive ? 1.3 : 1.0;
    var raw = baseScore * article.timeliness * exclusiveBonus * article.spreadDepth;
    // Normalize to 0-100 scale (empirical max ~100)
    var normalized = Math.min(100, Math.round(raw / 0.85));
    return {
      total: normalized,
      baseScore: baseScore,
      tierCounts: tierCounts,
      exclusiveBonus: exclusiveBonus,
      timeliness: article.timeliness,
      spreadDepth: article.spreadDepth,
      secondaryRefs: article.secondaryRefs
    };
  }

  // Pre-calculate scores and sort
  var scored = articles.map(function (a) {
    var s = calcScore(a);
    return Object.assign({}, a, s);
  });
  scored.sort(function (a, b) { return b.total - a.total; });

  // ===== Render Article Table =====
  var rankBody = document.getElementById('rankTableBody');

  function renderRankTable(filter) {
    var list = scored;
    if (filter === '90') list = scored.filter(function (a) { return a.total >= 90; });
    else if (filter === '70') list = scored.filter(function (a) { return a.total >= 70 && a.total < 90; });
    else if (filter === 'low') list = scored.filter(function (a) { return a.total < 70; });

    rankBody.innerHTML = '';
    var rank = 0;
    var prevScore = -1;
    var actualRank = 0;
    scored.forEach(function (a) {
      actualRank++;
      if (prevScore !== a.total) rank = actualRank;
      prevScore = a.total;
      // Skip if doesn't match filter
      if (filter === '90' && a.total < 90) return;
      if (filter === '70' && (a.total < 70 || a.total >= 90)) return;
      if (filter === 'low' && a.total >= 70) return;

      var gradeLabel = a.total >= 90 ? '卓越' : (a.total >= 70 ? '优秀' : (a.total >= 50 ? '良好' : '一般'));
      var gradeClass = a.total >= 90 ? 'grade-s' : (a.total >= 70 ? 'grade-a' : (a.total >= 50 ? 'grade-b' : 'grade-c'));
      var saCount = a.tierCounts.S + a.tierCounts.A;
      var rankIcon = rank === 1 ? '&#x1F947;' : (rank === 2 ? '&#x1F948;' : (rank === 3 ? '&#x1F949;' : rank));

      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td style="text-align:center;font-weight:700">' + rankIcon + '</td>' +
        '<td>' + a.title + (a.isExclusive ? ' <span style="font-size:0.7rem;color:var(--accent);font-weight:600;background:#fff7ed;padding:2px 6px;border-radius:4px">独家</span>' : '') + '</td>' +
        '<td>' + a.author + '</td>' +
        '<td>' + a.date + '</td>' +
        '<td><span style="color:var(--accent);font-weight:600">' + saCount + '</span></td>' +
        '<td>' + a.citations.length + '</td>' +
        '<td><span style="font-weight:700;font-size:1.05rem;color:' + (a.total >= 90 ? 'var(--accent)' : (a.total >= 70 ? 'var(--success)' : 'var(--text)')) + '">' + a.total + '</span></td>' +
        '<td><span class="grade-tag ' + gradeClass + '">' + gradeLabel + '</span></td>' +
        '<td><button class="detail-btn" data-id="' + a.id + '">评分详情</button></td>';
      rankBody.appendChild(tr);
    });
  }

  // ===== Render Journalist Table =====
  var jBody = document.getElementById('journalistTableBody');
  (function () {
    var jMap = {};
    scored.forEach(function (a) {
      if (!jMap[a.author]) jMap[a.author] = { name: a.author, dept: a.dept, count: 0, citations: 0, totalScore: 0, saRefs: 0, allRefs: 0 };
      jMap[a.author].count++;
      jMap[a.author].citations += a.citations.length;
      jMap[a.author].totalScore += a.total;
      jMap[a.author].saRefs += a.tierCounts.S + a.tierCounts.A;
      jMap[a.author].allRefs += a.citations.length;
    });
    var jList = Object.values(jMap);
    jList.sort(function (a, b) { return (b.totalScore / b.count) - (a.totalScore / a.count); });
    jBody.innerHTML = '';
    jList.forEach(function (j, idx) {
      var avg = (j.totalScore / j.count).toFixed(1);
      var saRatio = j.allRefs > 0 ? (j.saRefs / j.allRefs * 100).toFixed(0) : 0;
      var composite = Math.round(j.totalScore / j.count * 0.6 + j.count * 3 + j.saRefs * 2);
      var rankIcon = idx === 0 ? '&#x1F947;' : (idx === 1 ? '&#x1F948;' : (idx === 2 ? '&#x1F949;' : (idx + 1)));
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td style="text-align:center;font-weight:700">' + rankIcon + '</td>' +
        '<td><span style="font-weight:600">' + j.name + '</span> <span style="font-size:0.78rem;color:var(--text-secondary)">' + j.dept + '</span></td>' +
        '<td>' + j.count + ' 篇</td>' +
        '<td>' + j.citations + '</td>' +
        '<td><span style="font-weight:600">' + avg + '</span></td>' +
        '<td>' + saRatio + '%</td>' +
        '<td><span style="font-weight:700;color:var(--primary)">' + composite + '</span></td>';
      jBody.appendChild(tr);
    });
  })();

  // ===== Detail Modal =====
  var modalOverlay = document.getElementById('modalOverlay');
  var modalTitle = document.getElementById('modalTitle');
  var modalBody = document.getElementById('modalBody');
  var modalClose = document.getElementById('modalClose');

  function openDetail(id) {
    var a = scored.find(function (x) { return x.id === id; });
    if (!a) return;
    modalTitle.textContent = '影响力评分详情';

    var h = '';

    // Article info
    h += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">';
    h += '<div style="flex:1"><div style="font-size:1rem;font-weight:700;line-height:1.5">' + a.title + '</div>';
    h += '<div style="font-size:0.82rem;color:var(--text-secondary);margin-top:4px">' + a.author + ' · ' + a.dept + ' · ' + a.date + (a.isExclusive ? ' · 独家报道' : '') + '</div></div>';
    h += '<div style="text-align:center;flex-shrink:0">';
    h += '<div style="width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:800;color:#fff;background:' + (a.total >= 90 ? 'linear-gradient(135deg,#f59e0b,#ef4444)' : (a.total >= 70 ? 'linear-gradient(135deg,#10b981,#059669)' : 'linear-gradient(135deg,#6b7280,#9ca3af)')) + '">' + a.total + '</div>';
    h += '<div style="font-size:0.72rem;color:var(--text-secondary);margin-top:4px">影响力指数</div></div></div>';

    // Score breakdown
    h += '<div class="inf-breakdown-grid">';

    // Left: factors
    h += '<div class="inf-breakdown-col">';
    h += '<div class="inf-factor-title">评分因子分解</div>';

    h += '<div class="inf-factor-row"><span class="inf-f-label">基础引用分</span>';
    h += '<span class="inf-f-value">' + a.baseScore.toFixed(1) + '</span></div>';

    h += '<div class="inf-factor-row"><span class="inf-f-label">时效系数</span>';
    h += '<span class="inf-f-value">&times;' + a.timeliness + '</span>';
    h += '<span class="inf-f-desc">' + (a.timeliness === 1.0 ? '30天内' : (a.timeliness === 0.8 ? '30-90天' : '90天以上')) + '</span></div>';

    h += '<div class="inf-factor-row"><span class="inf-f-label">独家加成</span>';
    h += '<span class="inf-f-value">&times;' + a.exclusiveBonus + '</span>';
    h += '<span class="inf-f-desc">' + (a.isExclusive ? '独家报道' : '非独家') + '</span></div>';

    h += '<div class="inf-factor-row"><span class="inf-f-label">传播深度系数</span>';
    h += '<span class="inf-f-value">&times;' + a.spreadDepth + '</span>';
    h += '<span class="inf-f-desc">二跳引用 ' + a.secondaryRefs + ' 次</span></div>';

    h += '</div>';

    // Right: tier breakdown
    h += '<div class="inf-breakdown-col">';
    h += '<div class="inf-factor-title">媒体等级引用分布</div>';

    ['S', 'A', 'B', 'C'].forEach(function (t) {
      var count = a.tierCounts[t];
      var maxCount = Math.max(a.tierCounts.S, a.tierCounts.A, a.tierCounts.B, a.tierCounts.C, 1);
      var pct = (count / maxCount * 100).toFixed(0);
      h += '<div class="inf-tier-row">';
      h += '<span class="inf-tier-badge" style="background:' + tiers[t].bg + ';color:' + tiers[t].color + '">' + tiers[t].label + '</span>';
      h += '<div class="inf-tier-bar"><div class="inf-tier-fill" style="width:' + pct + '%;background:' + tiers[t].color + '"></div></div>';
      h += '<span class="inf-tier-count">' + count + ' <span style="font-weight:400;color:var(--text-secondary)">(&times;' + tiers[t].coeff + ' = ' + (count * tiers[t].coeff).toFixed(1) + ')</span></span>';
      h += '</div>';
    });

    h += '<div style="margin-top:10px;font-size:0.82rem;color:var(--text-secondary)">二跳引用 <strong style="color:var(--text)">' + a.secondaryRefs + '</strong> 次（被引用方的再引用）</div>';
    h += '</div>';
    h += '</div>';

    // Citation detail table
    h += '<div class="inf-factor-title" style="margin-top:20px">引用明细</div>';
    h += '<div class="inf-cite-table">';
    h += '<div class="inf-cite-header"><span>媒体名称</span><span>等级</span><span>引用方式</span><span>贡献分值</span></div>';
    a.citations.forEach(function (c) {
      h += '<div class="inf-cite-row">';
      h += '<span style="font-weight:600">' + c.media + '</span>';
      h += '<span><span class="inf-tier-badge-sm" style="background:' + tiers[c.tier].bg + ';color:' + tiers[c.tier].color + '">' + tiers[c.tier].label + '</span></span>';
      h += '<span style="color:var(--text-secondary)">' + c.type + '</span>';
      h += '<span style="font-weight:600;color:' + tiers[c.tier].color + '">+' + tiers[c.tier].coeff + '</span>';
      h += '</div>';
    });
    h += '</div>';

    modalBody.innerHTML = h;
    modalOverlay.classList.add('show');
  }

  function closeModal() { modalOverlay.classList.remove('show'); }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderRankTable(btn.getAttribute('data-filter'));
    });
  });

  // Detail buttons (event delegation)
  rankBody.addEventListener('click', function (e) {
    if (e.target.classList.contains('detail-btn')) openDetail(parseInt(e.target.getAttribute('data-id')));
  });
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function (e) { if (e.target === modalOverlay) closeModal(); });

  // Initial render
  renderRankTable('all');
})();
