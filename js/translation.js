(function () {
  // ===== Architecture Diagram =====
  var archContainer = document.getElementById('archDiagram');
  var archHTML = '';

  // Layer 3: Top - Partner apps
  archHTML += '<div class="tl-arch-layer tl-arch-top">';
  archHTML += '<div class="tl-arch-layer-label">应用层 — 伙伴翻译软件</div>';
  archHTML += '<div class="tl-arch-nodes">';

  var partners = [
    { name: '讯飞翻译', desc: '语音翻译引擎' },
    { name: '有道智云', desc: '文本翻译服务' },
    { name: '百度翻译', desc: '多模态翻译' },
    { name: '腾讯翻译君', desc: '实时同传' },
    { name: '字节火山翻译', desc: '视频字幕' },
    { name: '中科语智', desc: '行业定制' }
  ];
  partners.forEach(function (p) {
    archHTML += '<div class="tl-arch-node tl-arch-app">';
    archHTML += '<div class="tl-arch-node-name">' + p.name + '</div>';
    archHTML += '<div class="tl-arch-node-desc">' + p.desc + '</div>';
    archHTML += '</div>';
  });
  archHTML += '</div></div>';

  // Connector arrows
  archHTML += '<div class="tl-arch-arrows"><svg viewBox="0 0 800 30" preserveAspectRatio="none"><path d="M400 0 L400 30" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3" fill="none"/><polygon points="395 26 400 30 405 26" fill="#94a3b8"/></svg></div>';

  // Layer 2: Middle - AI Enablement Platform
  archHTML += '<div class="tl-arch-layer tl-arch-mid">';
  archHTML += '<div class="tl-arch-layer-label">AI 使能平台</div>';
  archHTML += '<div class="tl-arch-nodes">';

  var platform = [
    { name: '模型训练平台', desc: '翻译大模型训练' },
    { name: '推理加速引擎', desc: 'Ascend C 推理优化' },
    { name: '语料管理', desc: '多语种语料库' },
    { name: 'API 网关', desc: '统一接口服务' }
  ];
  platform.forEach(function (p) {
    archHTML += '<div class="tl-arch-node tl-arch-platform">';
    archHTML += '<div class="tl-arch-node-name">' + p.name + '</div>';
    archHTML += '<div class="tl-arch-node-desc">' + p.desc + '</div>';
    archHTML += '</div>';
  });
  archHTML += '</div></div>';

  // Connector arrows
  archHTML += '<div class="tl-arch-arrows"><svg viewBox="0 0 800 30" preserveAspectRatio="none"><path d="M400 0 L400 30" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3" fill="none"/><polygon points="395 26 400 30 405 26" fill="#94a3b8"/></svg></div>';

  // Layer 1: Bottom - Huawei Ascend
  archHTML += '<div class="tl-arch-layer tl-arch-bottom">';
  archHTML += '<div class="tl-arch-layer-label">硬件底座</div>';
  archHTML += '<div class="tl-arch-nodes">';

  var hw = [
    { name: '华为昇腾一体机', desc: 'Atlas 800 训练服务器', highlight: true },
    { name: '昇腾 NPU 集群', desc: 'Ascend 910B x8' },
    { name: '高速互联网络', desc: 'RoCE v2 / 400Gbps' },
    { name: '分布式存储', desc: '训练语料存储集群' }
  ];
  hw.forEach(function (p) {
    archHTML += '<div class="tl-arch-node tl-arch-hardware' + (p.highlight ? ' tl-arch-highlight' : '') + '">';
    archHTML += '<div class="tl-arch-node-name">' + p.name + '</div>';
    archHTML += '<div class="tl-arch-node-desc">' + p.desc + '</div>';
    archHTML += '</div>';
  });
  archHTML += '</div></div>';

  archContainer.innerHTML = archHTML;

  // ===== Languages Grid =====
  var languages = [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: '英语', flag: '🇬🇧' },
    { code: 'ja', name: '日语', flag: '🇯🇵' },
    { code: 'ko', name: '韩语', flag: '🇰🇷' },
    { code: 'fr', name: '法语', flag: '🇫🇷' },
    { code: 'de', name: '德语', flag: '🇩🇪' },
    { code: 'es', name: '西班牙语', flag: '🇪🇸' },
    { code: 'ru', name: '俄语', flag: '🇷🇺' },
    { code: 'ar', name: '阿拉伯语', flag: '🇸🇦' },
    { code: 'pt', name: '葡萄牙语', flag: '🇵🇹' },
    { code: 'it', name: '意大利语', flag: '🇮🇹' },
    { code: 'th', name: '泰语', flag: '🇹🇭' },
    { code: 'vi', name: '越南语', flag: '🇻🇳' },
    { code: 'id', name: '印尼语', flag: '🇮🇩' },
    { code: 'ms', name: '马来语', flag: '🇲🇾' },
    { code: 'hi', name: '印地语', flag: '🇮🇳' },
    { code: 'mn', name: '蒙古语', flag: '🇲🇳' }
  ];
  var langGrid = document.getElementById('langGrid');
  var langHTML = '';
  languages.forEach(function (l) {
    langHTML += '<div class="tl-lang-item"><span class="tl-lang-flag">' + l.flag + '</span><span class="tl-lang-name">' + l.name + '</span></div>';
  });
  langGrid.innerHTML = langHTML;

  // ===== Translation Demo =====
  var srcText = document.getElementById('srcText');
  var tgtText = document.getElementById('tgtText');
  var translateBtn = document.getElementById('translateBtn');
  var transTime = document.getElementById('transTime');
  var transIndicator = document.getElementById('transIndicator');
  var srcLang = document.getElementById('srcLang');
  var tgtLang = document.getElementById('tgtLang');
  var swapBtn = document.getElementById('swapBtn');
  var modeBtns = document.querySelectorAll('.tl-mode-btn');

  var currentMode = 'online';

  // Simulated translations
  var translations = {
    'zh-en': 'Huawei Ascend AI chips provide powerful computing support for intelligent translation, achieving millisecond-level real-time translation.',
    'zh-ja': 'Huawei Ascend AI チップはインテリジェント翻訳に強力なコンピューティングサポートを提供し、ミリ秒レベルのリアルタイム翻訳を実現します。',
    'zh-ko': 'Huawei Ascend AI 칩은 지능형 번역에 강력한 컴퓨팅 지원을 제공하여 밀리초 수준의 실시간 번역을 구현합니다.',
    'zh-fr': 'Les puces Huawei Ascend AI fournissent un support informatique puissant pour la traduction intelligente, permettant une traduction en temps réel à l\'échelle de la milliseconde.',
    'zh-de': 'Huawei Ascend AI-Chips bieten leistungsstarke Rechenunterstützung für intelligente Übersetzung und ermöglichen Übersetzung in Echtzeit im Millisekundenbereich.',
    'zh-es': 'Los chips Huawei Ascend AI proporcionan un poderoso soporte computacional para la traducción inteligente, logrando traducción en tiempo real a nivel de milisegundos.',
    'zh-ru': 'Чипы Huawei Ascend AI обеспечивают мощную вычислительную поддержку интеллектуального перевода, обеспечивая перевод в реальном времени на уровне миллисекунд.',
    'zh-ar': 'توفر رقائق Huawei Ascend AI دعماً حاسوبياً قوياً للترجمة الذكية، مما يحقق ترجمة فورية على مستوى المللي ثانية.',
    'en-zh': '华为昇腾AI芯片为智能翻译提供强大的算力支撑，实现毫秒级实时翻译。',
  };

  function doTranslate() {
    var src = srcText.value.trim();
    if (!src) return;

    var sLang = srcLang.value;
    var tLang = tgtLang.value;
    var key = sLang + '-' + tLang;

    translateBtn.disabled = true;
    translateBtn.textContent = '翻译中...';
    tgtText.innerHTML = '<div class="tl-typing"><span></span><span></span><span></span></div>';
    transTime.textContent = '';

    var delay = currentMode === 'online' ? 400 : 1200;

    setTimeout(function () {
      var result = translations[key];
      if (!result) {
        // Generic simulated result
        var langNames = { en: 'English', zh: '中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', ru: 'Русский', ar: 'العربية' };
        result = '[模拟翻译 → ' + (langNames[tLang] || tLang) + '] ' + src;
      }

      // Typing animation
      tgtText.innerHTML = '';
      var i = 0;
      var typeTimer = setInterval(function () {
        if (i < result.length) {
          tgtText.textContent = result.substring(0, i + 1);
          i++;
        } else {
          clearInterval(typeTimer);
          var elapsed = (delay + result.length * 12);
          transTime.textContent = '翻译耗时 ' + elapsed + 'ms · 准确率 98.2%';
          translateBtn.disabled = false;
          translateBtn.innerHTML = '&#x1F4AC; 立即翻译';
        }
      }, 12);
    }, delay);
  }

  translateBtn.addEventListener('click', doTranslate);

  // Swap languages
  swapBtn.addEventListener('click', function () {
    var tmp = srcLang.value;
    srcLang.value = tgtLang.value;
    tgtLang.value = tmp;
    var tmpText = srcText.value;
    if (tgtText.textContent) srcText.value = tgtText.textContent;
  });

  // Mode toggle
  modeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modeBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentMode = btn.getAttribute('data-mode');
      transIndicator.textContent = currentMode === 'online' ? '在线实时翻译' : '离线本地翻译';
      transIndicator.className = 'tl-trans-status' + (currentMode === 'offline' ? ' offline' : '');
    });
  });

  // Auto-translate on load
  setTimeout(doTranslate, 600);
})();
