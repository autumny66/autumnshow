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
      category: '保密规定', rule: '《新闻出版保密规定》第三条',
      quote: '据某军工集团内部人士透露',
      explanation: '稿件中涉及未公开的军工单位内部信息，存在泄露国家秘密的风险。新闻出版物不得报道未公开的国防和军事领域内部信息。',
      suggestion: '删除涉及军工单位内部消息的表述，或改为引用已公开的官方报道和数据，如"据市科技局公开资料显示"。'
    },
    {
      id: 2, stage: 'c1',
      severity: 'error', severityLabel: '错误',
      category: '政治性表述', rule: '《关于正确使用涉台宣传用语的意见》',
      quote: '台湾当局对此高度关注',
      explanation: '涉台用语不规范。根据中央台办发布的涉台宣传用语规范，不得使用"台湾当局"等具有主权国家含义的称谓，应使用体现"一个中国"原则的规范表述。',
      suggestion: '改为"台湾地区有关方面对此予以关注"或"台湾有关方面表示关注"。'
    },
    {
      id: 3, stage: 'p1',
      severity: 'warning', severityLabel: '警告',
      category: '广告法', rule: '《中华人民共和国广告法》第九条',
      quote: '该企业在行业中排名第一',
      explanation: '使用绝对化用语"第一"，涉嫌违反广告法关于不得使用"国家级""最高级""最佳"等用语的规定。虽然本稿件非广告，但在出版物中涉及企业宣传时仍应避免此类表述。',
      suggestion: '改为"该企业在行业中位居前列"或"市场占有率处于行业领先地位"。'
    },
    {
      id: 4, stage: 'p1',
      severity: 'suggestion', severityLabel: '建议',
      category: '标点符号规范', rule: '《标点符号用法》（GB/T 15834-2011）',
      quote: '三、五年后',
      explanation: '相邻两个数字连用表示概数时，中间不得加顿号。此处的顿号属于误用，影响文本的规范性。',
      suggestion: '改为"三五年后"。'
    },
    {
      id: 5, stage: 'p2',
      severity: 'warning', severityLabel: '警告',
      category: '计量单位规范', rule: '《中华人民共和国计量法》',
      quote: '亩产达到了1500斤',
      explanation: '"斤"是我国市制单位，非法定计量单位。根据《计量法》规定，出版物中应使用国家法定计量单位。在农业产量统计中，法定计量单位应为"公斤"或"吨"。',
      suggestion: '改为"亩产达到了750公斤"（1斤=0.5公斤）。'
    },
    {
      id: 6, stage: 'c2',
      severity: 'warning', severityLabel: '警告',
      category: '数据引用规范', rule: '《新闻出版统计管理办法》',
      quote: '据不完全统计，约80%的企业都表示支持',
      explanation: '引用调查数据时缺少数据来源、调查时间、样本量等关键信息，不符合数据引用的学术规范和出版规范，影响稿件的权威性和可信度。',
      suggestion: '补充完整数据来源，例如"据市工商联2026年3月对500家企业的抽样调查显示，约80%的受访企业表示支持..."'
    },
    {
      id: 7, stage: 'p3',
      severity: 'error', severityLabel: '错误',
      category: '事实性错误', rule: '出版物内容真实性审核',
      quote: '"十三五"期间',
      explanation: '"十三五"规划期为2016-2020年，当前时间为2026年，稿件中使用"十三五期间"表述建设目标属于明显的时间逻辑错误。',
      suggestion: '根据当前时间，应改为"十四五期间"（2021-2025年）或"十五五期间"（2026-2030年）。'
    },
    {
      id: 8, stage: 'c3',
      severity: 'error', severityLabel: '错误',
      category: '重大政治表述', rule: '《关于出版重大选题备案办法》',
      quote: '力争建成国家级数字经济示范区',
      explanation: '涉及"国家级"示范区建设的表述，属于重大选题范畴。根据规定，出版涉及重大题材的图书、文章需履行备案程序，确保与中央精神保持一致。',
      suggestion: '删除"国家级"字样，改为"力争建成具有全国影响力的数字经济示范区"，或补充相关备案文件依据。'
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
