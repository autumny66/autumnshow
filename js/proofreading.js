(function () {
  // ===== 三审三校流程定义 =====
  var workflowStages = [
    { key: 'c1', name: '初审', role: '责任编辑', desc: '政治导向、事实准确性、保密审查', status: 'done' },
    { key: 'c2', name: '复审', role: '编辑室主任', desc: '政治导向复核、学术质量把关', status: 'done' },
    { key: 'c3', name: '终审', role: '总编辑', desc: '重大政治问题、全面终审', status: 'done' },
    { key: 'p1', name: '一校', role: '校对员', desc: '错别字、标点、格式体例', status: 'done' },
    { key: 'p2', name: '二校', role: '校对员', desc: '核对改动、图表数据引文', status: 'done' },
    { key: 'p3', name: '三校', role: '责任校对', desc: '全面复核、政治常识性错误', status: 'done' }
  ];

  var stageMap = {
    c1: { name: '初审', short: '初' },
    c2: { name: '复审', short: '复' },
    c3: { name: '终审', short: '终' },
    p1: { name: '一校', short: '一校' },
    p2: { name: '二校', short: '二校' },
    p3: { name: '三校', short: '三校' }
  };

  // ===== 审校数据（含阶段标记） =====
  var reviewData = [
    {
      id: 1, stage: 'c1',
      severity: 'error', severityLabel: '错误',
      category: '商业秘密与保密规定', rule: '《新闻出版保密规定》第五条',
      quote: '据某国有银行内部风控系统测试数据显示',
      explanation: '引用金融机构未公开的内部测试数据，涉嫌泄露商业秘密和国家金融信息安全。新闻出版物不得披露未经公开的金融机构内部运营数据。',
      suggestion: '改为引用已公开的官方报告或行业白皮书数据，如"据中国人民银行发布的《金融科技发展报告》显示"。'
    },
    {
      id: 2, stage: 'c1',
      severity: 'error', severityLabel: '错误',
      category: '政治性表述与夸大宣传', rule: '《关于禁止报纸期刊发布虚假新闻的规定》',
      quote: '我国体育产业已跃居世界第一梯队',
      explanation: '使用"世界第一梯队"等缺乏权威数据支撑的绝对化排名表述，属于夸大宣传。此类表述需有权威机构发布的排名数据作为依据。',
      suggestion: '改为"我国体育产业规模持续增长，在部分领域已达到国际先进水平"，并补充具体数据来源。'
    },
    {
      id: 3, stage: 'p1',
      severity: 'warning', severityLabel: '警告',
      category: '科技术语与错别字', rule: '《图书编校质量差错率计算方法》',
      quote: '深渡学习算法',
      explanation: '"深渡学习"为明显错别字，正确表述应为"深度学习"（Deep Learning）。科技类稿件中术语准确性直接影响内容的专业性和可信度。',
      suggestion: '统一修改为"深度学习算法"，并建议全篇核查AI相关术语的规范性。'
    },
    {
      id: 4, stage: 'p1',
      severity: 'suggestion', severityLabel: '建议',
      category: '标点符号规范', rule: '《标点符号用法》（GB/T 15834-2011）',
      quote: '在1、2年内',
      explanation: '相邻两个数字连用表示概数时，中间不得加顿号。此处的顿号属于误用，影响文本的规范性。',
      suggestion: '改为"在一两年内"或"在1到2年内"。'
    },
    {
      id: 5, stage: 'p2',
      severity: 'warning', severityLabel: '警告',
      category: '经济数据事实核查', rule: '《新闻真实性管理办法》',
      quote: '某体育科技公司2025年营收达到120亿元',
      explanation: '经核实，该公司2025年实际营收约为12亿元人民币，稿件中数据扩大了10倍，属于严重的经济数据事实错误。',
      suggestion: '修改为"某体育科技公司2025年营收达到12亿元"，并补充数据来源（如公司年报或证券交易所公告）。'
    },
    {
      id: 6, stage: 'c2',
      severity: 'warning', severityLabel: '警告',
      category: '数据引用规范', rule: '《新闻出版统计管理办法》',
      quote: '据统计，全球体育科技市场规模将在2028年达到8000亿美元',
      explanation: '引用预测性经济数据时缺少研究机构名称、报告发布时间和统计口径，不符合财经报道的数据引用规范。',
      suggestion: '补充完整信息，例如"据普华永道2026年3月发布的《全球体育科技展望》预测，全球体育科技市场规模将在2028年达到8000亿美元"。'
    },
    {
      id: 7, stage: 'p3',
      severity: 'error', severityLabel: '错误',
      category: '科技常识错误', rule: '出版物内容科学性审核',
      quote: '量子计算机使用二进制编码，每个量子比特只能表示0或1',
      explanation: '量子比特（Qubit）与经典比特（Bit）的本质区别在于量子叠加态，一个量子比特可同时处于0和1的叠加状态，而非"只能表示0或1"。此表述属于基础科技概念错误。',
      suggestion: '改为"量子计算机利用量子比特进行运算，量子比特可同时处于0和1的叠加状态，这一特性使其在特定计算任务中具有潜在优势"。'
    },
    {
      id: 8, stage: 'c3',
      severity: 'error', severityLabel: '错误',
      category: '重大经济政策表述', rule: '《金融信息服务管理规定》',
      quote: '建议央行放宽对体育金融衍生品的市场准入限制',
      explanation: '稿件中涉及对中央银行金融政策的具体建议，属于重大经济政策敏感话题。此类内容需严格遵守金融信息服务管理规定，不得擅自发布影响金融市场预期的政策建议。',
      suggestion: '删除涉及具体政策建议的表述，改为客观描述行业现状，如"业界期待在合规框架下探索体育金融创新的更多可能性"。'
    }
  ];

  var reviewList = document.getElementById('reviewList');
  var articleBody = document.getElementById('articleBody');
  var workflowBar = document.getElementById('workflowBar');
  var stageFilter = document.getElementById('stageFilter');
  var currentStageFilter = 'all';

  // ===== 统计各阶段问题数 =====
  function stageStats() {
    var stats = {};
    workflowStages.forEach(function (s) { stats[s.key] = { total: 0, error: 0, warning: 0, suggestion: 0 }; });
    reviewData.forEach(function (item) {
      if (stats[item.stage]) {
        stats[item.stage].total++;
        stats[item.stage][item.severity]++;
      }
    });
    return stats;
  }

  // ===== 渲染三审三校流程看板 =====
  function renderWorkflow() {
    if (!workflowBar) return;
    var stats = stageStats();
    var html = '<div class="workflow-inner">';
    html += '<div class="workflow-title">&#x1F4C4; 出版流程：三审三校</div>';
    html += '<div class="workflow-steps">';
    workflowStages.forEach(function (stage, idx) {
      var s = stats[stage.key];
      var hasIssues = s.total > 0;
      var stepClass = 'workflow-step ' + stage.status;
      if (hasIssues) stepClass += ' has-issues';
      html += '<div class="' + stepClass + '">';
      html += '<div class="step-badge">' + stage.name + '</div>';
      html += '<div class="step-role">' + stage.role + '</div>';
      html += '<div class="step-desc">' + stage.desc + '</div>';
      if (hasIssues) {
        html += '<div class="step-count">';
        if (s.error) html += '<span class="sc-error">' + s.error + '错</span>';
        if (s.warning) html += '<span class="sc-warning">' + s.warning + '警</span>';
        if (s.suggestion) html += '<span class="sc-suggestion">' + s.suggestion + '建</span>';
        html += '</div>';
      } else {
        html += '<div class="step-count"><span class="sc-clean">无问题</span></div>';
      }
      html += '</div>';
      if (idx < workflowStages.length - 1) {
        html += '<div class="workflow-arrow">&#x2192;</div>';
      }
    });
    html += '</div></div>';
    workflowBar.innerHTML = html;
  }

  // ===== 渲染阶段筛选器 =====
  function renderStageFilter() {
    if (!stageFilter) return;
    var stats = stageStats();
    var html = '<span class="sf-label">按阶段筛选：</span>';
    html += '<button class="sf-btn ' + (currentStageFilter === 'all' ? 'active' : '') + '" data-stage="all">全部（' + reviewData.length + '）</button>';
    workflowStages.forEach(function (stage) {
      var count = stats[stage.key].total;
      var cls = 'sf-btn ' + (currentStageFilter === stage.key ? 'active' : '');
      html += '<button class="' + cls + '" data-stage="' + stage.key + '">' + stage.name + '（' + count + '）</button>';
    });
    stageFilter.innerHTML = html;

    stageFilter.querySelectorAll('.sf-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentStageFilter = btn.getAttribute('data-stage');
        renderStageFilter();
        renderReviewList();
      });
    });
  }

  // ===== 渲染审校意见列表 =====
  function renderReviewList() {
    reviewList.innerHTML = '';
    var filtered = currentStageFilter === 'all' ? reviewData : reviewData.filter(function (a) { return a.stage === currentStageFilter; });
    filtered.forEach(function (item, index) {
      var div = document.createElement('div');
      div.className = 'review-item ' + item.severity;
      div.setAttribute('data-id', item.id);
      div.style.animationDelay = (index * 0.05) + 's';
      var stageInfo = stageMap[item.stage];
      div.innerHTML =
        '<div class="review-header">' +
          '<span class="review-severity ' + item.severity + '">' + item.severityLabel + '</span>' +
          '<span class="review-stage" title="' + stageInfo.name + '发现">' + stageInfo.name + '</span>' +
          '<span class="review-rule">' + item.category + ' · ' + item.rule + '</span>' +
        '</div>' +
        '<div class="review-quote">"' + item.quote + '"</div>' +
        '<div class="review-explanation">' + item.explanation + '</div>' +
        '<div class="review-suggestion">' +
          '<div class="review-suggestion-label">&#x270F; 修改建议</div>' +
          item.suggestion +
        '</div>';
      reviewList.appendChild(div);
    });
  }

  function clearActive() {
    document.querySelectorAll('.hl-error, .hl-warning, .hl-suggestion').forEach(function (el) {
      el.classList.remove('active');
    });
    document.querySelectorAll('.review-item').forEach(function (el) {
      el.classList.remove('active');
    });
  }

  function activatePair(id) {
    clearActive();
    var highlight = document.querySelector('.hl-error[data-id="' + id + '"], .hl-warning[data-id="' + id + '"], .hl-suggestion[data-id="' + id + '"]');
    var reviewItem = document.querySelector('.review-item[data-id="' + id + '"]');
    if (highlight) {
      highlight.classList.add('active');
      highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (reviewItem) {
      reviewItem.classList.add('active');
      reviewItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  articleBody.addEventListener('click', function (e) {
    var target = e.target;
    if (target.classList.contains('hl-error') || target.classList.contains('hl-warning') || target.classList.contains('hl-suggestion')) {
      var id = target.getAttribute('data-id');
      activatePair(id);
    }
  });

  reviewList.addEventListener('click', function (e) {
    var item = e.target.closest('.review-item');
    if (item) {
      var id = item.getAttribute('data-id');
      activatePair(id);
    }
  });

  renderWorkflow();
  renderStageFilter();
  renderReviewList();
})();
