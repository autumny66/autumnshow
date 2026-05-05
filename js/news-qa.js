(function () {
  var chatMessages = document.getElementById('chatMessages');
  var chatInput = document.getElementById('chatInput');
  var sendBtn = document.getElementById('sendBtn');
  var newsScroll = document.getElementById('newsScroll');
  var quickBtns = document.querySelectorAll('.quick-btn');
  var isTyping = false;

  var qaMap = {
    '影响': {
      q: '这条新闻对我有什么影响？',
      a: '根据您的关注领域分析，这条政策新闻可能对您产生以下影响：\n\n1. **就业机会**：AI 和量子计算领域的政策扶持将创造大量高薪岗位，预计新增就业岗位超过50万个。\n\n2. **投资方向**：相关科技板块有望迎来利好，人工智能 ETF 和量子计算概念股值得关注。\n\n3. **技能提升**：建议关注 AI 相关技能培训和认证，这将成为未来职场的重要竞争优势。\n\n4. **消费体验**：AI 技术将加速在医疗、教育、出行等领域落地，您的日常生活服务体验将持续优化。'
    },
    '专家': {
      q: '专家怎么看？',
      a: '以下是多位专家的核心观点：\n\n&#x1F468;&#x200D;&#x1F393; **张伟教授（清华大学 AI 研究院）**：\n"这次政策的最大亮点在于将 AI 人才培养纳入国家战略规划，预计未来3年高校 AI 专业招生规模将翻倍。"\n\n&#x1F468;&#x200D;&#x1F4BC; **李明 CEO（某科技独角兽）**：\n"税收优惠和研发补贴对中小企业非常友好，我们有信心在明年将研发投入提高40%。"\n\n&#x1F469;&#x200D;&#x1F4CA; **王芳分析师（中信证券）**：\n"从市场角度看，这轮政策将带来至少2-3年的行业景气周期，建议重点关注算力基础设施和数据要素两个细分方向。"'
    },
    '总结': {
      q: '帮我总结一下要点',
      a: '这条新闻的核心要点如下：\n\n&#x1F4CB; **政策文件**：《关于加快科技创新驱动发展的若干意见》\n\n&#x1F3AF; **重点领域**：人工智能、量子计算、生物医药\n\n&#x1F4C8; **核心目标**：到2028年 AI 核心产业规模超1万亿，带动相关产业超10万亿\n\n&#x1F465; **实施路径**：地方政府配套细则，覆盖税收优惠、人才引进、科研经费\n\n&#x26A0;&#xFE0F; **关键信号**：政策力度空前，将推动科技企业加速发展和传统行业数字化转型'
    },
    '背景': {
      q: '这条新闻的背景是什么？',
      a: '为您梳理核心背景：\n\n&#x1F4C5; **政策沿革**：\n2024年国务院首次将 AI 纳入战略性新兴产业；2025年出台《新一代人工智能发展规划》修订版；本次意见是第三次重大政策升级。\n\n&#x1F30F; **国际形势**：\n全球 AI 军备竞赛加剧，美国、欧盟相继推出千亿美元级 AI 投资计划。我国旨在缩小差距并在量子计算等优势领域实现领跑。\n\n&#x1F4C8; **数据支撑**：\n2025年我国 AI 核心产业规模达5800亿元，同比增长38%。量子计算专利申请量全球第一，但商业化落地仍需政策推动。'
    },
    '趋势': {
      q: '未来发展趋势如何？',
      a: '基于当前政策走向和行业数据，AI 预判如下：\n\n&#x1F535; **短期（6-12个月）**：\n各省市将密集出台配套政策，AI 相关企业注册量将迎来爆发式增长。科技板块股价有望持续走高。\n\n&#x1F7E2; **中期（1-3年）**：\nAI 技术将在制造业、金融、医疗三大领域实现规模化应用。量子计算有望在密码学和药物研发领域取得突破。\n\n&#x1F534; **长期（3-5年）**：\n中国有望在 AI 应用层形成全球领先优势，特别是在智慧城市和自动驾驶领域。量子计算或将重塑整个计算产业格局。'
    }
  };

  function findAnswer(input) {
    for (var key in qaMap) {
      if (input.indexOf(key) !== -1) return qaMap[key];
    }
    return {
      q: input,
      a: '这是一个很好的问题。基于当前新闻内容分析：\n\n该政策涵盖了人工智能、量子计算等前沿领域的全面支持。如果您想了解更具体的信息，可以尝试点击上方的快捷按钮，或输入"影响""专家""总结""背景""趋势"等关键词获取详细解读。'
    };
  }

  function addUserMsg(text) {
    var div = document.createElement('div');
    div.className = 'chat-msg user';
    div.innerHTML = '<div class="msg-bubble">' + escapeHtml(text) + '</div>';
    chatMessages.appendChild(div);
    scrollToBottom();
  }

  function addAIMsg(text) {
    var div = document.createElement('div');
    div.className = 'chat-msg ai';
    var bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    div.appendChild(bubble);
    chatMessages.appendChild(div);
    bubble.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    scrollToBottom();

    isTyping = true;
    disableInputs(true);
    var i = 0;
    var timer = setInterval(function () {
      if (i < text.length) {
        bubble.innerHTML = formatMd(text.substring(0, i + 1));
        i++;
        scrollToBottom();
      } else {
        clearInterval(timer);
        isTyping = false;
        disableInputs(false);
      }
    }, 22);
  }

  function formatMd(t) {
    return t.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  }

  function escapeHtml(t) {
    var d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function scrollToBottom() { newsScroll.scrollTop = newsScroll.scrollHeight; }

  function disableInputs(disabled) {
    sendBtn.disabled = disabled;
    chatInput.disabled = disabled;
    quickBtns.forEach(function (b) { b.disabled = disabled; });
  }

  function sendMessage(text) {
    if (!text.trim() || isTyping) return;
    var qa = findAnswer(text);
    addUserMsg(qa.q);
    chatInput.value = '';
    setTimeout(function () { addAIMsg(qa.a); }, 500);
  }

  sendBtn.addEventListener('click', function () { sendMessage(chatInput.value); });
  chatInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { sendMessage(chatInput.value); }
  });
  quickBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { sendMessage(btn.getAttribute('data-q')); });
  });
})();
