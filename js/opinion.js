(function () {
  // ===== Event Data =====
  var events = [
    {
      name: '某知名餐饮连锁品牌被曝食品安全问题',
      sentiment: { positive: 8, neutral: 22, negative: 70 },
      keywords: [
        { word: '食品安全', level: 'hot' },
        { word: '过期食材', level: 'hot' },
        { word: '卫生问题', level: 'hot' },
        { word: '品牌信任', level: 'warm' },
        { word: '消费者权益', level: 'warm' },
        { word: '监管部门', level: 'warm' },
        { word: '赔偿', level: 'cool' },
        { word: '整改', level: 'cool' },
        { word: '连锁反应', level: 'cool' }
      ],
      media: [
        { name: '微博', sentiment: 'neg', desc: '负面占比82%，大量消费者投诉' },
        { name: '抖音', sentiment: 'neg', desc: '相关视频播放量破2亿，评论一边倒' },
        { name: '微信公众号', sentiment: 'neu', desc: '深度分析文章增多，理性讨论上升' },
        { name: '知乎', sentiment: 'neu', desc: '讨论趋于理性，关注制度改进' },
        { name: '新闻客户端', sentiment: 'neg', desc: '主流媒体跟进报道，要求彻查' },
        { name: '小红书', sentiment: 'neg', desc: '大量"避雷"笔记，品牌口碑急跌' }
      ],
      summary: '当前舆情态势<strong style="color:var(--danger)">极为严峻</strong>，负面情绪占比高达70%。社交媒体已成为舆论发酵的主阵地，微博和抖音的传播速度远超预期。消费者对品牌的信任度已降至冰点，若不及时采取有效措施，预计48小时内舆情将再次升级。<strong>建议立即启动危机公关最高级别响应。</strong>',
      actions: [
        {
          scores: { risk: '低', opportunity: '高', time: '2-3周' },
          timeline: [
            { time: '第1-6小时', content: '发布真诚道歉声明，CEO亲自出镜视频道歉。舆论短暂波动后，正面声音开始出现，"态度诚恳"成为新的讨论热点。', type: 'success', tag: '机会', tagType: 'opportunity' },
            { time: '第6-24小时', content: '公布详细整改方案：涉事门店永久关闭、全国门店自查、引入第三方检测机构。媒体态度开始转向，"知错能改"成为主流叙事。', type: 'success', tag: '转机', tagType: 'opportunity' },
            { time: '第2-3天', content: '消费者赔偿方案公布，全额退款+额外补偿。负面声量下降35%，部分KOL开始发布"给品牌一次机会"的内容。', type: '', tag: '向好', tagType: 'opportunity' },
            { time: '第1周', content: '邀请媒体和消费者代表参观整改后门店。正面报道占比回升至45%，品牌信任度恢复至危机前的60%。', type: 'success', tag: '恢复', tagType: 'opportunity' },
            { time: '第2-3周', content: '舆情基本平息，品牌启动"食品安全透明化"长期计划。行业反思该事件，品牌反而因整改力度大获得额外好感。', type: 'success', tag: '转危为机', tagType: 'opportunity' }
          ],
          summary: '该策略虽然短期内成本较高，但能有效遏制舆情恶化。模型预测<strong style="color:var(--success)">3周内舆情可基本平息，品牌信任度可恢复至60%以上</strong>，且有机会将危机转化为品牌升级契机。'
        },
        {
          scores: { risk: '中', opportunity: '中', time: '4-6周' },
          timeline: [
            { time: '第1-6小时', content: '发布书面声明澄清事实，承认部分问题但强调被夸大。舆论反应分化：部分人认为有诚意，部分人认为在"甩锅"。', type: 'warning', tag: '分歧', tagType: 'neutral' },
            { time: '第6-24小时', content: '网友开始逐字分析声明，找出多处措辞不当。微博热搜#某品牌声明避重就轻#登上前十，负面声量不降反升15%。', type: 'danger', tag: '风险', tagType: 'risk' },
            { time: '第2-3天', content: '陆续有前员工爆料更多内幕，事态扩大。品牌被迫进行第二次回应，但公信力已受损，被认为"被迫回应"。', type: 'danger', tag: '恶化', tagType: 'risk' },
            { time: '第1周', content: '开始实施改进措施，但舆论焦点已转向"为什么第一次不坦诚"。负面声量维持在50%以上，恢复速度明显缓慢。', type: 'warning', tag: '缓慢', tagType: 'neutral' },
            { time: '第4-6周', content: '经过持续改进和多次正面沟通，舆情逐步回落。但品牌形象恢复周期拉长至6周，总损失约为主动道歉策略的2倍。', type: '', tag: '滞后恢复', tagType: 'neutral' }
          ],
          summary: '该策略的风险在于<strong style="color:var(--warning)">首次回应力度不足可能引发"二次危机"</strong>，舆论可能从"食品安全问题"升级为"诚信问题"。恢复周期延长至4-6周，综合损失约为方案一的2倍。'
        },
        {
          scores: { risk: '极高', opportunity: '极低', time: '3个月+' },
          timeline: [
            { time: '第1-6小时', content: '品牌方保持沉默，未做任何公开回应。舆论迅速升级，"心虚""默认"成为关键词，负面声量在6小时内翻倍。', type: 'danger', tag: '失控', tagType: 'risk' },
            { time: '第6-24小时', content: '愤怒情绪蔓延，消费者自发组织抵制行动。多家门店出现消费者聚集，监管部门被迫介入调查。', type: 'danger', tag: '危机升级', tagType: 'risk' },
            { time: '第2-3天', content: '主流媒体发表评论员文章批评品牌态度。股价暴跌15%，多地加盟商要求解约，事态完全失控。', type: 'danger', tag: '全面危机', tagType: 'risk' },
            { time: '第1周', content: '被迫召开新闻发布会，但为时已晚。舆论已从"食品安全问题"升级为"企业道德问题"，甚至引发行业层面的政策讨论。', type: 'danger', tag: '不可逆', tagType: 'risk' },
            { time: '第1-3个月', content: '品牌声誉遭受毁灭性打击，30%消费者表示永不回头。即使后续进行大量补救，品牌信任度也仅恢复至危机前的30%。', type: 'danger', tag: '毁灭性打击', tagType: 'risk' }
          ],
          summary: '<strong style="color:var(--danger)">此为最危险策略</strong>。沉默等同于默认有罪，舆论将从事件本身升级为企业价值观层面的信任危机。模型预测品牌可能遭受<strong style="color:var(--danger)">不可逆的声誉损失</strong>，恢复周期超过3个月，部分消费者可能永久流失。'
        }
      ]
    },
    {
      name: '某科技公司大规模裁员引发社会关注',
      sentiment: { positive: 12, neutral: 35, negative: 53 },
      keywords: [
        { word: '裁员', level: 'hot' },
        { word: 'N+1赔偿', level: 'hot' },
        { word: '互联网寒冬', level: 'hot' },
        { word: '劳动法', level: 'warm' },
        { word: '中年危机', level: 'warm' },
        { word: '企业文化', level: 'warm' },
        { word: '转型', level: 'cool' },
        { word: '就业市场', level: 'cool' }
      ],
      media: [
        { name: '微博', sentiment: 'neg', desc: '前员工维权帖获10万+转发，舆论同情被裁员工' },
        { name: '知乎', sentiment: 'neu', desc: '技术讨论为主，部分理性分析行业周期' },
        { name: '脉脉', sentiment: 'neg', desc: '内部消息泄露，在职员工恐慌情绪蔓延' },
        { name: '微信公众号', sentiment: 'neu', desc: '深度文章关注互联网行业转型与劳动权益' },
        { name: '新闻客户端', sentiment: 'neu', desc: '主流媒体关注就业大局，呼吁理性看待' }
      ],
      summary: '当前舆情<strong style="color:var(--warning)">中度紧张</strong>，负面情绪占比53%。舆论焦点已从单纯的裁员事件上升到互联网行业健康发展和劳动者权益保护的层面。社交媒体上的个人故事传播力度大，容易引发共情效应。',
      actions: [
        {
          scores: { risk: '中低', opportunity: '中高', time: '3-4周' },
          timeline: [
            { time: '第1-6小时', content: 'CEO发布内部信和公开信，真诚反思裁员方式不当，承诺优化补偿方案。舆论出现分化，部分声音认可态度。', type: 'success', tag: '缓和', tagType: 'opportunity' },
            { time: '第1-3天', content: '公布"优化裁员方案"：N+2补偿、推荐就业、创业扶持基金。被裁员工中开始出现正面声音，维权帖减少。', type: 'success', tag: '改善', tagType: 'opportunity' },
            { time: '第1-2周', content: '启动人才转岗计划，与多家企业签署人才接收协议。行业媒体报道"负责任的裁员方式"，舆论环境明显改善。', type: '', tag: '恢复', tagType: 'opportunity' },
            { time: '第3-4周', content: '舆情基本平息，公司发布战略转型说明。负面声量降至20%以下，品牌形象部分修复。', type: 'success', tag: '平息', tagType: 'opportunity' }
          ],
          summary: '积极补偿方案能有效<strong style="color:var(--success)">在1-2周内扭转舆论方向</strong>，被裁员工成为品牌正面传播者。虽然短期成本增加约30%，但综合公关损失降低约60%。'
        },
        {
          scores: { risk: '中', opportunity: '低', time: '6-8周' },
          timeline: [
            { time: '第1-6小时', content: '发布官方声明强调合法合规，按N+1标准赔偿。被裁员工普遍不满，社交媒体对比其他公司的赔偿方案。', type: 'warning', tag: '不满', tagType: 'neutral' },
            { time: '第1-3天', content: '"冷血裁员"标签在微博发酵，前员工集体发布被裁经历。舆论从裁员事件转向对企业文化的质疑。', type: 'danger', tag: '扩散', tagType: 'risk' },
            { time: '第1-2周', content: '持续有新爆料出现，公司被迫多次回应但公信力不足。校招生开始解约，人才吸引力明显下降。', type: 'danger', tag: '持续恶化', tagType: 'risk' },
            { time: '第4-8周', content: '随着时间推移和其他热点出现，舆情热度自然下降。但品牌在人才市场的形象受损，影响持续约半年。', type: 'warning', tag: '缓慢恢复', tagType: 'neutral' }
          ],
          summary: '仅满足法定最低标准会<strong style="color:var(--warning)">被视为"冷血企业"</strong>，舆论从裁员事件扩散到企业文化层面。长期影响主要体现在人才吸引力下降，招聘成本预计上升20%。'
        },
        {
          scores: { risk: '极高', opportunity: '极低', time: '3个月+' },
          timeline: [
            { time: '第1-6小时', content: '法务团队介入，向发布负面信息的员工发送律师函。舆论瞬间炸裂，"强势资本家欺压打工人"叙事形成。', type: 'danger', tag: '引爆', tagType: 'risk' },
            { time: '第1-3天', content: '维权员工获得大量社会支持，劳动监察部门介入调查。多个工会组织发声，事件上升为劳动权益标杆案例。', type: 'danger', tag: '全面升级', tagType: 'risk' },
            { time: '第1-2周', content: '事件引发全国性讨论，多个城市出现互联网从业者维权聚会。监管层可能出台行业裁员规范，公司成为反面案例。', type: 'danger', tag: '政策风险', tagType: 'risk' },
            { time: '第1-3个月', content: '长期法律纠纷、品牌形象崩塌、核心人才大量流失。公司在行业中的声誉可能需要1-2年才能修复。', type: 'danger', tag: '长期损害', tagType: 'risk' }
          ],
          summary: '<strong style="color:var(--danger)">此为最危险策略</strong>。法律施压不仅无法解决问题，反而将个体事件升级为社会议题。可能引发<strong style="color:var(--danger)">监管层面的政策风险</strong>，对公司长期发展造成深远影响。'
        }
      ]
    },
    {
      name: '某新能源车企自动驾驶事故致人死亡',
      sentiment: { positive: 5, neutral: 25, negative: 70 },
      keywords: [
        { word: '自动驾驶', level: 'hot' },
        { word: '安全事故', level: 'hot' },
        { word: '生命权', level: 'hot' },
        { word: '技术缺陷', level: 'warm' },
        { word: '责任认定', level: 'warm' },
        { word: '监管缺位', level: 'warm' },
        { word: '行业标准', level: 'cool' },
        { word: '伦理困境', level: 'cool' }
      ],
      media: [
        { name: '微博', sentiment: 'neg', desc: '愤怒情绪占主导，要求严查自动驾驶安全性' },
        { name: '抖音', desc: '事故视频疯传，播放量破5亿', sentiment: 'neg' },
        { name: '汽车论坛', sentiment: 'neu', desc: '技术派和质疑派激烈争论' },
        { name: '新闻客户端', sentiment: 'neg', desc: '主流媒体关注自动驾驶立法空白' },
        { name: '微信公众号', sentiment: 'neu', desc: '深度文章讨论AI伦理和监管框架' }
      ],
      summary: '舆情<strong style="color:var(--danger)">高度紧张</strong>，涉及生命安全使得舆论极为敏感。事件已超出单一品牌范畴，上升到自动驾驶技术安全性和行业监管的讨论层面。政府部门的介入态度将直接影响舆情走向。',
      actions: [
        {
          scores: { risk: '中', opportunity: '中', time: '4-6周' },
          timeline: [
            { time: '第1-6小时', content: 'CEO发布视频声明，深切哀悼遇难者，承诺全力配合调查，暂停相关功能推送OTA更新。公众态度从愤怒转为关注后续处理。', type: '', tag: '初步安抚', tagType: 'neutral' },
            { time: '第1-3天', content: '成立独立技术调查委员会，邀请第三方专家参与。公布初步调查数据，主动披露技术细节。理性声音开始增多。', type: 'success', tag: '透明度', tagType: 'opportunity' },
            { time: '第1-2周', content: '与遇难者家属达成和解（具体保密），宣布10亿安全升级基金。部分舆论认为"态度端正"，但质疑声仍存。', type: 'warning', tag: '分化', tagType: 'neutral' },
            { time: '第4-6周', content: '发布完整调查报告和系统升级方案，推动行业安全标准制定。舆情逐步平息，品牌因推动行业标准获得部分正面评价。', type: 'success', tag: '长期修复', tagType: 'opportunity' }
          ],
          summary: '涉及生命安全的事件需要<strong>最高级别的重视和最快速的响应</strong>。主动暂停功能推送和公开调查数据能有效展示企业责任感。<strong style="color:var(--success)">4-6周内舆情可基本平息</strong>，长期有机会成为行业标准推动者。'
        },
        {
          scores: { risk: '高', opportunity: '低', time: '2-3个月' },
          timeline: [
            { time: '第1-6小时', content: '发布书面声明对事故表示遗憾，强调"辅助驾驶非自动驾驶"，暗示驾驶员有责任。舆论强烈反弹。', type: 'danger', tag: '激怒公众', tagType: 'risk' },
            { time: '第1-3天', content: '"甩锅驾驶员"成为热搜话题，大量用户晒出销售承诺"自动驾驶"的证据。事故性质从安全问题升级为诚信问题。', type: 'danger', tag: '二次危机', tagType: 'risk' },
            { time: '第1-2周', content: '多名律师团队介入，消费者集体维权。监管部门约谈企业，要求全面自查。媒体深挖历史事故数据，发现此前多起未公开事件。', type: 'danger', tag: '全面调查', tagType: 'risk' },
            { time: '第1-3个月', content: '监管出台更严格的自动驾驶监管规定，该品牌成为重点监管对象。品牌形象严重受损，销量预计下滑30%以上。', type: 'danger', tag: '长期影响', tagType: 'risk' }
          ],
          summary: '<strong style="color:var(--danger)">暗示驾驶员责任是最危险的策略</strong>，会引发"甩锅"舆论风暴。事故性质将升级为诚信问题，可能面临<strong style="color:var(--danger)">监管处罚和集体诉讼</strong>，品牌恢复期超过3个月。'
        },
        {
          scores: { risk: '极高', opportunity: '极低', time: '6个月+' },
          timeline: [
            { time: '第1-6小时', content: '仅通过客服回应"以官方通报为准"，不主动发声。舆论猜测四起，各种未经证实的"内幕消息"广泛传播。', type: 'danger', tag: '失控', tagType: 'risk' },
            { time: '第1-3天', content: '谣言满天飞，"系统缺陷早有预兆""高管提前抛售股票"等阴谋论盛行。政府部门被迫公开表态，要求企业回应。', type: 'danger', tag: '谣言扩散', tagType: 'risk' },
            { time: '第1-2周', content: '被迫召开新闻发布会但为时已晚，每一个回答都被放在显微镜下审视。股价累计下跌25%，多个合作伙伴宣布暂停合作。', type: 'danger', tag: '全面崩盘', tagType: 'risk' },
            { time: '第1-6个月', content: '事件成为行业反面教材，引发全行业监管收紧。品牌重建需要6个月以上，且可能永久性失去部分用户信任。', type: 'danger', tag: '长期损害', tagType: 'risk' }
          ],
          summary: '<strong style="color:var(--danger)">涉及生命安全事故中保持沉默是最错误的选择</strong>。信息真空会被谣言和阴谋论填充，事件将从安全事故升级为全方位的企业信任危机。<strong>恢复周期可能超过6个月，且存在不可逆的品牌损伤。</strong>'
        }
      ]
    }
  ];

  // ===== DOM =====
  var eventCards = document.getElementById('eventCards');
  var sentimentChart = document.getElementById('sentimentChart');
  var keywordCloud = document.getElementById('keywordCloud');
  var mediaList = document.getElementById('mediaList');
  var aiSummary = document.getElementById('aiSummary');
  var actionSelector = document.getElementById('actionSelector');
  var scoreCards = document.getElementById('scoreCards');
  var timeline = document.getElementById('timeline');
  var wargameSummary = document.getElementById('wargameSummary');

  var currentEvent = 0;
  var currentAction = 0;

  function renderAnalysis(idx) {
    var ev = events[idx];
    // Sentiment chart
    var total = ev.sentiment.positive + ev.sentiment.neutral + ev.sentiment.negative;
    sentimentChart.innerHTML =
      '<div class="sentiment-row"><span class="label">正面</span><div class="bar-area"><div class="fill positive" style="width:' + (ev.sentiment.positive / total * 100) + '%">' + ev.sentiment.positive + '%</div></div></div>' +
      '<div class="sentiment-row"><span class="label">中性</span><div class="bar-area"><div class="fill neutral" style="width:' + (ev.sentiment.neutral / total * 100) + '%">' + ev.sentiment.neutral + '%</div></div></div>' +
      '<div class="sentiment-row"><span class="label">负面</span><div class="bar-area"><div class="fill negative" style="width:' + (ev.sentiment.negative / total * 100) + '%">' + ev.sentiment.negative + '%</div></div></div>';

    // Keywords
    var kwHtml = '';
    ev.keywords.forEach(function (k) { kwHtml += '<span class="keyword-tag ' + k.level + '">' + k.word + '</span>'; });
    keywordCloud.innerHTML = kwHtml;

    // Media
    var mHtml = '';
    ev.media.forEach(function (m) {
      mHtml += '<div class="media-item"><span class="media-name">' + m.name + '</span><span>' + m.desc + '</span><span class="media-sentiment ' + m.sentiment + '">' + ({ pos: '偏正面', neu: '中性', neg: '偏负面' }[m.sentiment]) + '</span></div>';
    });
    mediaList.innerHTML = mHtml;

    // Summary
    aiSummary.innerHTML = '<div class="ai-label">&#x1F916; AI 舆情研判</div><div>' + ev.summary + '</div>';
  }

  function renderWargame(eIdx, aIdx) {
    var action = events[eIdx].actions[aIdx];

    // Score cards
    var riskColor = { '低': 'var(--success)', '中低': 'var(--success)', '中': 'var(--warning)', '高': 'var(--danger)', '极高': 'var(--danger)' };
    scoreCards.innerHTML =
      '<div class="score-card risk-card"><div class="score-label">风险评估</div><div class="score-value" style="color:' + (riskColor[action.scores.risk] || 'var(--warning)') + '">' + action.scores.risk + '</div></div>' +
      '<div class="score-card gain-card"><div class="score-label">转机潜力</div><div class="score-value">' + action.scores.opportunity + '</div></div>' +
      '<div class="score-card neutral-card"><div class="score-label">预计恢复周期</div><div class="score-value" style="font-size:1.1rem">' + action.scores.time + '</div></div>';

    // Timeline
    var tlHtml = '';
    action.timeline.forEach(function (t) {
      tlHtml += '<div class="timeline-item ' + t.type + '">' +
        '<div class="tl-time">' + t.time + '</div>' +
        '<div class="tl-content">' + t.content + '</div>' +
        '<span class="tl-tag ' + t.tagType + '">' + t.tag + '</span>' +
        '</div>';
    });
    timeline.innerHTML = tlHtml;

    // Wargame summary
    wargameSummary.innerHTML = '<div class="ai-label">&#x1F916; AI 推演结论</div><div>' + action.summary + '</div>';
  }

  // Event selection
  eventCards.addEventListener('click', function (e) {
    var card = e.target.closest('.event-card');
    if (!card) return;
    document.querySelectorAll('.event-card').forEach(function (c) { c.classList.remove('active'); });
    card.classList.add('active');
    currentEvent = parseInt(card.getAttribute('data-event'));
    renderAnalysis(currentEvent);
    renderWargame(currentEvent, currentAction);
  });

  // Action selection
  actionSelector.addEventListener('click', function (e) {
    var btn = e.target.closest('.action-btn');
    if (!btn) return;
    document.querySelectorAll('.action-btn').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    currentAction = parseInt(btn.getAttribute('data-action'));
    renderWargame(currentEvent, currentAction);
  });

  // Initial render
  renderAnalysis(0);
  renderWargame(0, 0);
})();
