// Western Short Film Studio — Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // State
  let projects = JSON.parse(localStorage.getItem('wsf_projects')) || DEFAULT_PROJECTS;
  let activeProjectId = localStorage.getItem('wsf_active_project') || projects[0].id;
  let currentProject = projects.find(p => p.id === activeProjectId) || projects[0];
  let checklistState = JSON.parse(localStorage.getItem('wsf_checklist')) || {};

  // DOM Elements
  const navItems = document.querySelectorAll('.nav-item');
  const viewContainers = document.querySelectorAll('.view-container');
  const projectSelect = document.getElementById('project-select');
  const shotsGridContainer = document.getElementById('shots-grid-container');
  const toastContainer = document.getElementById('toast-container');

  // Video Modal Elements
  const videoModal = document.getElementById('video-modal');
  const modalVideoPlayer = document.getElementById('modal-video-player');
  const btnPlayDemo = document.getElementById('btn-play-demo');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Toast Helper
  function showToast(message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="color: var(--accent-amber); font-size: 16px;">${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // Clipboard Helper
  function copyToClipboard(text, successMessage = 'คัดลอกลงคลิปบอร์ดแล้ว!') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage);
      }).catch(() => {
        fallbackCopyText(text, successMessage);
      });
    } else {
      fallbackCopyText(text, successMessage);
    }
  }

  function fallbackCopyText(text, successMessage) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMessage);
    } catch (err) {
      showToast('ไม่สามารถคัดลอกได้อัตโนมัติ', '⚠️');
    }
    document.body.removeChild(textArea);
  }

  // Save to LocalStorage
  function saveState() {
    localStorage.setItem('wsf_projects', JSON.stringify(projects));
    localStorage.setItem('wsf_active_project', activeProjectId);
    localStorage.setItem('wsf_checklist', JSON.stringify(checklistState));
  }

  // Initialize Project Selector
  function initProjectSelector() {
    projectSelect.innerHTML = '';
    projects.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.title;
      if (p.id === currentProject.id) opt.selected = true;
      projectSelect.appendChild(opt);
    });

    projectSelect.addEventListener('change', (e) => {
      activeProjectId = e.target.value;
      currentProject = projects.find(p => p.id === activeProjectId) || projects[0];
      saveState();
      renderAllViews();
      showToast(`สลับโปรเจกต์: ${currentProject.title}`);
    });
  }

  // Navigation Tabs Switching
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      viewContainers.forEach(v => v.classList.remove('active'));

      item.classList.add('active');
      const targetView = item.dataset.view;
      const targetContainer = document.getElementById(`view-${targetView}`);
      if (targetContainer) targetContainer.classList.add('active');
    });
  });

  // Render Storyboard 6-Shot Grid
  function renderStoryboard() {
    document.getElementById('storyboard-project-title').textContent = currentProject.title;
    document.getElementById('storyboard-project-logline').textContent = currentProject.logline;

    shotsGridContainer.innerHTML = '';

    if (!currentProject.shots || currentProject.shots.length === 0) {
      shotsGridContainer.innerHTML = `
        <div style="grid-column: span 6; padding: 40px; text-align: center; color: var(--text-secondary); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
          <div style="font-size: 32px; margin-bottom: 12px;">🎬</div>
          <div style="font-size: 16px; font-weight: 600; color: #fff;">ยังไม่มีการสร้าง Storyboard สำหรับโปรเจกต์นี้</div>
          <div style="font-size: 13px; margin-top: 6px;">เลือกโปรเจกต์ "One Floor Below" ด้านบน เพื่อดูตัวอย่างสมบูรณ์แบบครบ 6 ช็อต</div>
        </div>
      `;
      return;
    }

    currentProject.shots.forEach((shot, index) => {
      const card = document.createElement('div');
      card.className = 'shot-card';

      let mediaHtml = '';
      if (shot.thumbnailSrc) {
        mediaHtml = `
          <img src="${shot.thumbnailSrc}" alt="${shot.id}" class="shot-media-img">
          <div class="shot-play-btn" data-video="${shot.mediaSrc || ''}">▶</div>
        `;
      } else {
        mediaHtml = `
          <div class="shot-placeholder">
            <span style="font-size: 28px;">📹</span>
            <span>Vertical 9:16</span>
            <span style="font-size: 10px; color: var(--accent-gold);">${shot.angle || 'Cinematic'}</span>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="shot-media-frame">
          <span class="shot-badge-shotid">${shot.id}</span>
          <span class="shot-badge-time">${shot.timecode}</span>
          ${mediaHtml}
        </div>
        <div class="shot-card-body">
          <div class="shot-meta">
            <span class="shot-angle">${shot.angle}</span>
            <select class="shot-status-select" data-shot="${shot.id}">
              <option value="Ready to Gen" ${shot.status === 'Ready to Gen' ? 'selected' : ''}>Ready to Gen</option>
              <option value="Generating" ${shot.status === 'Generating' ? 'selected' : ''}>Generating...</option>
              <option value="Needs Review" ${shot.status === 'Needs Review' ? 'selected' : ''}>Needs Review</option>
              <option value="Approved Take" ${shot.status === 'Approved Take' ? 'selected' : ''}>Approved Take</option>
              <option value="Approved Demo" ${shot.status === 'Approved Demo' ? 'selected' : ''}>Approved Demo</option>
            </select>
          </div>

          <div class="dialogue-box">
            <div class="dialogue-speaker">🗣️ บทพูดภาษาไทย (ตรงตัว):</div>
            <div class="dialogue-thai">“${shot.dialogue}”</div>
          </div>

          <div class="shot-action-desc" title="${shot.action}">
            ${shot.action}
          </div>

          <button class="btn-copy-prompt" data-shot="${shot.id}" id="btn-copy-${shot.id}">
            <span>📋 Copy Google Flow Prompt</span>
          </button>
        </div>
      `;

      // Copy Prompt Button Event
      const btnCopy = card.querySelector('.btn-copy-prompt');
      btnCopy.addEventListener('click', () => {
        copyToClipboard(shot.prompt, `คัดลอก Prompt สำหรับ ${shot.id} แล้ว!`);
        btnCopy.classList.add('copied');
        btnCopy.innerHTML = `<span>✓ Copied! พร้อมวางใน Flow</span>`;
        setTimeout(() => {
          btnCopy.classList.remove('copied');
          btnCopy.innerHTML = `<span>📋 Copy Google Flow Prompt</span>`;
        }, 2000);
      });

      // Play Demo Video Event
      const playBtn = card.querySelector('.shot-play-btn');
      if (playBtn) {
        playBtn.addEventListener('click', () => {
          openVideoModal(shot.mediaSrc || 'assets/demo.mp4', `${shot.id} • ${shot.dialogue}`);
        });
      }

      // Status Change Event
      const statusSelect = card.querySelector('.shot-status-select');
      statusSelect.addEventListener('change', (e) => {
        shot.status = e.target.value;
        saveState();
        renderShotLog();
        showToast(`อัปเดตสถานะ ${shot.id}: ${shot.status}`);
      });

      shotsGridContainer.appendChild(card);
    });

    renderInspector();
  }

  // Render Right Inspector Panel
  function renderInspector() {
    const bible = currentProject.characterBible || {};
    document.getElementById('inspector-char-name').textContent = bible.name || 'ตัวละครหลัก';
    document.getElementById('inspector-char-appearance').textContent = bible.appearance || 'ไม่มีข้อมูล';

    const continuityContainer = document.getElementById('inspector-continuity-list');
    continuityContainer.innerHTML = '';
    if (bible.continuityNotes) {
      bible.continuityNotes.forEach(note => {
        const item = document.createElement('div');
        item.className = 'continuity-item';
        item.innerHTML = `<span class="continuity-check-icon">✓</span> <span>${note}</span>`;
        continuityContainer.appendChild(item);
      });
    }
  }

  // Render Brief Form
  function renderBriefForm() {
    document.getElementById('brief-title').value = currentProject.title || '';
    document.getElementById('brief-genre').value = currentProject.genre || '';
    document.getElementById('brief-logline').value = currentProject.logline || '';
    document.getElementById('brief-setting').value = currentProject.setting || '';
    document.getElementById('brief-hook').value = currentProject.hook || '';
  }

  // Save Brief Form
  document.getElementById('btn-save-brief').addEventListener('click', () => {
    currentProject.title = document.getElementById('brief-title').value;
    currentProject.genre = document.getElementById('brief-genre').value;
    currentProject.logline = document.getElementById('brief-logline').value;
    currentProject.setting = document.getElementById('brief-setting').value;
    currentProject.hook = document.getElementById('brief-hook').value;
    saveState();
    initProjectSelector();
    renderStoryboard();
    showToast('บันทึกข้อมูล Project Brief สำเร็จ!');
  });

  // Render Character Bible Form
  function renderBibleForm() {
    const bible = currentProject.characterBible || {};
    document.getElementById('char-name').value = bible.name || '';
    document.getElementById('char-age').value = bible.age || '';
    document.getElementById('char-appearance').value = bible.appearance || '';
    document.getElementById('char-voice').value = bible.voice || '';

    document.getElementById('code-char-prompt').textContent = bible.referencePrompt || 'ไม่มี Prompt อ้างอิง';
    document.getElementById('code-scene-prompt').textContent = bible.sceneReferencePrompt || 'ไม่มี Prompt อ้างอิง';
    document.getElementById('code-prop-prompt').textContent = bible.propReferencePrompt || 'ไม่มี Prompt อ้างอิง';
  }

  // Save Character Bible Form
  document.getElementById('btn-save-bible').addEventListener('click', () => {
    if (!currentProject.characterBible) currentProject.characterBible = {};
    currentProject.characterBible.name = document.getElementById('char-name').value;
    currentProject.characterBible.age = document.getElementById('char-age').value;
    currentProject.characterBible.appearance = document.getElementById('char-appearance').value;
    currentProject.characterBible.voice = document.getElementById('char-voice').value;
    saveState();
    renderInspector();
    showToast('บันทึกข้อมูล Character Bible สำเร็จ!');
  });

  // Reference Prompt Copy Buttons
  document.getElementById('btn-copy-char-prompt').addEventListener('click', () => {
    const text = document.getElementById('code-char-prompt').textContent;
    copyToClipboard(text, 'คัดลอก Character Reference Prompt แล้ว!');
  });

  document.getElementById('btn-copy-scene-prompt').addEventListener('click', () => {
    const text = document.getElementById('code-scene-prompt').textContent;
    copyToClipboard(text, 'คัดลอก Scene Reference Prompt แล้ว!');
  });

  document.getElementById('btn-copy-prop-prompt').addEventListener('click', () => {
    const text = document.getElementById('code-prop-prompt').textContent;
    copyToClipboard(text, 'คัดลอก Prop Reference Prompt แล้ว!');
  });

  // QC & Repair Studio Setup
  const repairPresetSelect = document.getElementById('repair-preset-select');
  const repairGuideBox = document.getElementById('repair-guide-box');
  const repairShotSelect = document.getElementById('repair-shot-select');
  const btnGenerateRepair = document.getElementById('btn-generate-repair');
  const repairResultContainer = document.getElementById('repair-result-container');
  const repairResultBox = document.getElementById('repair-result-box');
  const btnCopyRepairOutput = document.getElementById('btn-copy-repair-output');

  function initRepairView() {
    repairPresetSelect.innerHTML = '';
    REPAIR_PRESETS.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.label;
      repairPresetSelect.appendChild(opt);
    });

    function updateGuide() {
      const selected = REPAIR_PRESETS.find(p => p.id === repairPresetSelect.value);
      if (selected) {
        repairGuideBox.innerHTML = `<strong>คำแนะนำ:</strong> ${selected.solutionGuide}`;
      }
    }

    repairPresetSelect.addEventListener('change', updateGuide);
    updateGuide();
  }

  btnGenerateRepair.addEventListener('click', () => {
    const shotId = repairShotSelect.value;
    const shot = currentProject.shots.find(s => s.id === shotId);
    const preset = REPAIR_PRESETS.find(p => p.id === repairPresetSelect.value);
    const detail = document.getElementById('repair-detail-input').value.trim() || preset.issueText;

    const repairPrompt = `แก้เฉพาะช็อต ${shotId} จาก Prompt และ reference ที่แนบ
ปัญหาที่เห็น/ได้ยินจริง: ${detail}
ต้องคงไว้: บทพูดตรงตัว "${shot ? shot.dialogue : 'บทเดิม'}", ผู้พูดคนเดิม, หน้าตา, ชุด, ฉากลิฟต์, อัตราส่วนแนวตั้ง 9:16 และระยะเวลา 8 วินาที
แก้ได้เฉพาะ: ${preset.solutionGuide}
ส่ง Prompt ใหม่แบบ self-contained พร้อมบอกว่าปรับข้อความตรงไหน
ไม่แก้ช็อตอื่น ไม่สร้างสื่อก่อนฉันสั่ง และไม่รายงาน QC วิดีโอจาก Prompt อย่างเดียว`;

    repairResultBox.textContent = repairPrompt;
    repairResultContainer.style.display = 'block';
    showToast('สร้างคำสั่งซ่อมงานเรียบร้อยแล้ว!');
  });

  btnCopyRepairOutput.addEventListener('click', () => {
    copyToClipboard(repairResultBox.textContent, 'คัดลอกคำสั่งซ่อมงานแล้ว!');
  });

  // QC Checklist & Shot Log Setup
  function renderChecklist() {
    const container = document.getElementById('checklist-items-container');
    container.innerHTML = '';

    WORKFLOW_CHECKLIST.forEach((item, index) => {
      const isChecked = !!checklistState[item.id];
      const div = document.createElement('label');
      div.style.display = 'flex';
      div.style.alignItems = 'flex-start';
      div.style.gap = '12px';
      div.style.padding = '10px 14px';
      div.style.background = isChecked ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-elevated)';
      div.style.border = `1px solid ${isChecked ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-color)'}`;
      div.style.borderRadius = 'var(--radius-md)';
      div.style.cursor = 'pointer';
      div.style.transition = 'all 0.2s ease';

      div.innerHTML = `
        <input type="checkbox" id="chk-${item.id}" ${isChecked ? 'checked' : ''} style="margin-top: 3px; accent-color: var(--accent-emerald); width: 16px; height: 16px;">
        <span style="font-size: 13.5px; color: ${isChecked ? '#fff' : 'var(--text-secondary)'}; line-height: 1.4;">${index + 1}. ${item.text}</span>
      `;

      const checkbox = div.querySelector('input');
      checkbox.addEventListener('change', (e) => {
        checklistState[item.id] = e.target.checked;
        saveState();
        renderChecklist();
      });

      container.appendChild(div);
    });
  }

  document.getElementById('btn-reset-checklist').addEventListener('click', () => {
    checklistState = {};
    saveState();
    renderChecklist();
    showToast('รีเซ็ตรายการ Checklist ทั้งหมดแล้ว');
  });

  function renderShotLog() {
    const tbody = document.getElementById('shot-log-tbody');
    tbody.innerHTML = '';

    if (!currentProject.shots || currentProject.shots.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="padding: 20px; text-align: center; color: var(--text-muted);">ไม่มีข้อมูลช็อต</td></tr>`;
      return;
    }

    currentProject.shots.forEach(shot => {
      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid var(--border-color)';

      tr.innerHTML = `
        <td style="padding: 10px; font-weight: 700; color: #fff;">${shot.id}</td>
        <td style="padding: 10px; font-family: var(--font-mono); color: var(--accent-amber-light);">${shot.timecode}</td>
        <td style="padding: 10px; color: var(--accent-gold);">${shot.angle}</td>
        <td style="padding: 10px; color: #fff;">“${shot.dialogue}”</td>
        <td style="padding: 10px;">
          <span class="tag ${shot.status.includes('Approved') ? 'tag-green' : 'tag-amber'}">${shot.status}</span>
        </td>
        <td style="padding: 10px; color: var(--text-secondary); font-size: 11.5px;">${shot.audioNotes || '-'}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Copy All 6 Prompts Button in Topbar
  document.getElementById('btn-copy-all-prompts').addEventListener('click', () => {
    if (!currentProject.shots || currentProject.shots.length === 0) {
      showToast('ไม่มีช็อตในโปรเจกต์นี้', '⚠️');
      return;
    }

    const allPrompts = currentProject.shots.map(s => `=== ${s.id} (${s.timecode}) ===\nDialogue: "${s.dialogue}"\n\n${s.prompt}\n`).join('\n----------------------------------------\n\n');
    copyToClipboard(allPrompts, 'คัดลอกชุด Prompt ครบทั้ง 6 ช็อตเรียบร้อยแล้ว!');
  });

  // Modal Video Handling
  function openVideoModal(videoSrc, title) {
    modalVideoPlayer.src = videoSrc;
    document.getElementById('video-modal-title').textContent = title;
    videoModal.classList.add('open');
    modalVideoPlayer.play().catch(() => {});
  }

  function closeVideoModal() {
    videoModal.classList.remove('open');
    modalVideoPlayer.pause();
  }

  btnPlayDemo.addEventListener('click', () => {
    openVideoModal('assets/demo.mp4', '▶ พรีวิวคลิปตัวอย่างจริง • One Floor Below (8 วินาที)');
  });

  modalCloseBtn.addEventListener('click', closeVideoModal);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideoModal();
  });

  // ==========================================
  // Interactive Production Guide & Flow Hub
  // ==========================================
  let activeGuideStepIndex = 0;
  const guideStepperTrack = document.getElementById('guide-stepper-track');
  const guideStepRenderBox = document.getElementById('guide-step-render-box');
  const guideSearchInput = document.getElementById('guide-search-input');
  const btnGuideExpandAll = document.getElementById('btn-guide-expand-all');
  const btnGuideCollapseAll = document.getElementById('btn-guide-collapse-all');

  function initGuideView() {
    if (!guideStepperTrack || !guideStepRenderBox || typeof PRODUCTION_GUIDE === 'undefined') return;

    renderGuideStepper();
    renderGuideCurrentStep();

    // Search Filtering
    guideSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (q === '') {
        renderGuideCurrentStep();
      } else {
        renderGuideSearchResults(q);
      }
    });

    // Expand / Collapse All
    btnGuideExpandAll.addEventListener('click', () => {
      document.querySelectorAll('.guide-topic-card').forEach(card => card.classList.add('open'));
    });

    btnGuideCollapseAll.addEventListener('click', () => {
      document.querySelectorAll('.guide-topic-card').forEach(card => card.classList.remove('open'));
    });
  }

  function renderGuideStepper() {
    guideStepperTrack.innerHTML = '';
    PRODUCTION_GUIDE.forEach((step, idx) => {
      const tab = document.createElement('button');
      tab.className = `guide-step-tab ${idx === activeGuideStepIndex ? 'active' : ''}`;
      tab.id = `guide-tab-${step.stepId}`;
      tab.innerHTML = `
        <span class="tab-num">${step.stepNumber}</span>
        <span>${step.icon} ${step.shortTitle}</span>
      `;
      tab.addEventListener('click', () => {
        activeGuideStepIndex = idx;
        guideSearchInput.value = '';
        renderGuideStepper();
        renderGuideCurrentStep();
      });
      guideStepperTrack.appendChild(tab);
    });
  }

  function renderGuideCurrentStep() {
    const step = PRODUCTION_GUIDE[activeGuideStepIndex];
    if (!step) return;

    let studioActionBtn = '';
    if (step.studioLink) {
      if (step.studioLink.url) {
        studioActionBtn = `
          <a href="${step.studioLink.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 12.5px; padding: 7px 14px;">
            <span>⚡ ${step.studioLink.label}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        `;
      } else if (step.studioLink.view) {
        studioActionBtn = `
          <button class="btn btn-secondary guide-goto-view-btn" data-target-view="${step.studioLink.view}" style="font-size: 12.5px; padding: 7px 14px;">
            <span>↗ ${step.studioLink.label}</span>
          </button>
        `;
      }
    }

    let flowSpecialHub = '';
    if (step.stepId === 'step-4') {
      flowSpecialHub = `
        <div class="flow-hub-card">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <div style="font-size: 15px; font-weight: 700; color: #fff;">⚙️ แดชบอร์ดสรุปสเปกสำหรับ Google Flow (Veo Studio)</div>
              <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 2px;">ตรวจเช็กพารามิเตอร์ 4 ตัวนี้ในหน้าตั้งค่าของ Flow ก่อนกดสร้างเสมอ</div>
            </div>
            <a href="https://labs.google/fx/tools/flow" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 6px 14px; font-size: 12px;">
              <span>⚡ เปิด Google Flow ทันที</span>
            </a>
          </div>

          <div class="flow-specs-grid">
            <div class="flow-spec-item">
              <div class="flow-spec-label">สัดส่วนหน้าจอ (Aspect Ratio)</div>
              <div class="flow-spec-val" style="color: var(--accent-amber);">9:16 Vertical</div>
            </div>
            <div class="flow-spec-item">
              <div class="flow-spec-label">ความยาวคลิป (Duration)</div>
              <div class="flow-spec-val" style="color: var(--accent-gold);">8 วินาที (8s)</div>
            </div>
            <div class="flow-spec-item">
              <div class="flow-spec-label">จำนวนผลลัพธ์ (Outputs)</div>
              <div class="flow-spec-val" style="color: var(--accent-emerald);">1 ผลลัพธ์ (คุมเครดิต)</div>
            </div>
            <div class="flow-spec-item">
              <div class="flow-spec-label">โมเดลที่แนะนำ (Recommended Model)</div>
              <div class="flow-spec-val" style="color: var(--accent-blue);">Veo 3.1 Lite / Fast</div>
            </div>
          </div>
        </div>
      `;
    }

    let topicsHtml = step.topics.map((topic, tIdx) => {
      const stepsHtml = topic.steps.map(s => `
        <div class="guide-step-item">
          <span class="guide-step-item-bullet">›</span>
          <span>${s}</span>
        </div>
      `).join('');

      const proTipHtml = topic.proTip ? `
        <div class="guide-callout tip">
          <span style="font-size: 16px;">💡</span>
          <div><strong>เคล็ดลับมือโปร:</strong> ${topic.proTip}</div>
        </div>
      ` : '';

      const cautionHtml = topic.caution ? `
        <div class="guide-callout caution">
          <span style="font-size: 16px;">⚠️</span>
          <div><strong>ข้อควรระวัง:</strong> ${topic.caution}</div>
        </div>
      ` : '';

      let snippetHtml = '';
      if (topic.copyableSnippet) {
        snippetHtml = `
          <div style="margin-top: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 12px; font-weight: 600; color: var(--accent-emerald);">${topic.snippetLabel || 'ตัวอย่างคำสั่ง'}</span>
              <button class="btn btn-secondary guide-copy-snippet-btn" data-snippet="${encodeURIComponent(topic.copyableSnippet)}" style="padding: 3px 10px; font-size: 11px;">
                📋 คัดลอก Prompt
              </button>
            </div>
            <div class="guide-code-box">${topic.copyableSnippet}</div>
          </div>
        `;
      }

      // Default first topic open
      const isOpen = tIdx === 0 ? 'open' : '';

      return `
        <div class="guide-topic-card ${isOpen}" id="${topic.id}">
          <div class="guide-topic-header">
            <div class="guide-topic-title">
              <span>📌</span>
              <span>${topic.title}</span>
            </div>
            <div class="guide-topic-chevron">▼</div>
          </div>
          <div class="guide-topic-body">
            <div class="guide-topic-desc">${topic.description}</div>
            <div class="guide-steps-list">${stepsHtml}</div>
            ${proTipHtml}
            ${cautionHtml}
            ${snippetHtml}
          </div>
        </div>
      `;
    }).join('');

    const prevDisabled = activeGuideStepIndex === 0 ? 'disabled style="opacity: 0.5; pointer-events: none;"' : '';
    const nextDisabled = activeGuideStepIndex === PRODUCTION_GUIDE.length - 1 ? 'disabled style="opacity: 0.5; pointer-events: none;"' : '';

    guideStepRenderBox.innerHTML = `
      <div class="guide-step-view">
        <div class="guide-step-header">
          <div class="guide-step-title-wrap">
            <div class="guide-step-icon-box">${step.icon}</div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="tag tag-amber">${step.category}</span>
                <span style="font-size: 11px; color: var(--text-muted);">ขั้นตอน ${step.stepNumber} จาก 7</span>
              </div>
              <h2 class="guide-step-heading">${step.title}</h2>
              <p class="guide-step-summary">${step.summary}</p>
            </div>
          </div>
          <div>${studioActionBtn}</div>
        </div>

        ${flowSpecialHub}

        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div style="font-size: 13px; font-weight: 700; color: var(--accent-gold); text-transform: uppercase;">
              📖 หัวข้อย่อยและรายละเอียดที่ต้องทำ (${step.topics.length} หัวข้อ)
            </div>
            <span style="font-size: 11px; color: var(--text-muted);">คลิกที่แถบหัวข้อเพื่อเปิด/ปิดดูคำอธิบาย</span>
          </div>

          <div class="guide-topics-list">
            ${topicsHtml}
          </div>
        </div>

        <div class="guide-step-footer">
          <button class="btn btn-secondary" id="btn-guide-prev-step" ${prevDisabled}>
            <span>← ขั้นตอนก่อนหน้า</span>
          </button>
          <div style="font-size: 12px; color: var(--text-secondary);">
            ขั้นตอนที่ ${step.stepNumber} / 7
          </div>
          <button class="btn btn-primary" id="btn-guide-next-step" ${nextDisabled}>
            <span>ขั้นตอนถัดไป →</span>
          </button>
        </div>
      </div>
    `;

    attachGuideInteractions();
  }

  function renderGuideSearchResults(query) {
    let matchedTopics = [];
    PRODUCTION_GUIDE.forEach(step => {
      step.topics.forEach(topic => {
        const fullContent = (topic.title + ' ' + topic.description + ' ' + topic.steps.join(' ') + ' ' + (topic.proTip || '') + ' ' + (topic.caution || '')).toLowerCase();
        if (fullContent.includes(query)) {
          matchedTopics.push({ step, topic });
        }
      });
    });

    if (matchedTopics.length === 0) {
      guideStepRenderBox.innerHTML = `
        <div class="guide-step-view" style="text-align: center; padding: 48px;">
          <div style="font-size: 32px; margin-bottom: 12px;">🔍</div>
          <div style="font-size: 16px; font-weight: 700; color: #fff;">ไม่พบหัวข้อที่ตรงกับ "${query}"</div>
          <div style="font-size: 13px; color: var(--text-secondary); margin-top: 6px;">ลองค้นหาด้วยคำอื่น เช่น "Google Flow", "ซับ", "Prompt", "CapCut", "เครดิต", "เสียง"</div>
          <button class="btn btn-secondary" style="margin-top: 16px;" id="btn-clear-search">ล้างคำค้นหา</button>
        </div>
      `;
      document.getElementById('btn-clear-search').addEventListener('click', () => {
        guideSearchInput.value = '';
        renderGuideCurrentStep();
      });
      return;
    }

    let topicsHtml = matchedTopics.map(({ step, topic }) => {
      const stepsHtml = topic.steps.map(s => `
        <div class="guide-step-item">
          <span class="guide-step-item-bullet">›</span>
          <span>${s}</span>
        </div>
      `).join('');

      const proTipHtml = topic.proTip ? `
        <div class="guide-callout tip">
          <span style="font-size: 16px;">💡</span>
          <div><strong>เคล็ดลับมือโปร:</strong> ${topic.proTip}</div>
        </div>
      ` : '';

      const cautionHtml = topic.caution ? `
        <div class="guide-callout caution">
          <span style="font-size: 16px;">⚠️</span>
          <div><strong>ข้อควรระวัง:</strong> ${topic.caution}</div>
        </div>
      ` : '';

      return `
        <div class="guide-topic-card open" id="${topic.id}">
          <div class="guide-topic-header">
            <div class="guide-topic-title">
              <span>${step.icon} [${step.shortTitle}]</span>
              <span>${topic.title}</span>
            </div>
            <div class="guide-topic-chevron">▼</div>
          </div>
          <div class="guide-topic-body" style="display: flex;">
            <div class="guide-topic-desc">${topic.description}</div>
            <div class="guide-steps-list">${stepsHtml}</div>
            ${proTipHtml}
            ${cautionHtml}
          </div>
        </div>
      `;
    }).join('');

    guideStepRenderBox.innerHTML = `
      <div class="guide-step-view">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 14px;">
          <div>
            <h2 style="font-size: 17px; font-weight: 700; color: #fff;">
              🔍 ผลการค้นหาสำหรับ "${query}"
            </h2>
            <div style="font-size: 12.5px; color: var(--accent-emerald); margin-top: 2px;">
              พบทั้งหมด ${matchedTopics.length} หัวข้อย่อยที่เกี่ยวข้อง
            </div>
          </div>
          <button class="btn btn-secondary" id="btn-back-to-step" style="font-size: 12px; padding: 6px 12px;">
            ← กลับไปที่ขั้นตอนหลัก
          </button>
        </div>

        <div class="guide-topics-list">
          ${topicsHtml}
        </div>
      </div>
    `;

    document.getElementById('btn-back-to-step').addEventListener('click', () => {
      guideSearchInput.value = '';
      renderGuideCurrentStep();
    });

    attachGuideInteractions();
  }

  function attachGuideInteractions() {
    // Accordion Toggle
    document.querySelectorAll('.guide-topic-header').forEach(hdr => {
      hdr.addEventListener('click', () => {
        const card = hdr.closest('.guide-topic-card');
        card.classList.toggle('open');
      });
    });

    // Step Nav buttons
    const btnPrev = document.getElementById('btn-guide-prev-step');
    const btnNext = document.getElementById('btn-guide-next-step');

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (activeGuideStepIndex > 0) {
          activeGuideStepIndex--;
          renderGuideStepper();
          renderGuideCurrentStep();
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (activeGuideStepIndex < PRODUCTION_GUIDE.length - 1) {
          activeGuideStepIndex++;
          renderGuideStepper();
          renderGuideCurrentStep();
        }
      });
    }

    // Snippet copy buttons
    document.querySelectorAll('.guide-copy-snippet-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const snippet = decodeURIComponent(btn.dataset.snippet);
        copyToClipboard(snippet, 'คัดลอกตัวอย่างคำสั่ง Prompt สำเร็จ!');
      });
    });

    // Go-to-view buttons
    document.querySelectorAll('.guide-goto-view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.dataset.targetView;
        const navTarget = document.querySelector(`.nav-item[data-view="${targetView}"]`);
        if (navTarget) {
          navTarget.click();
        }
      });
    });
  }

  // Render All Views
  function renderAllViews() {
    renderStoryboard();
    renderBriefForm();
    renderBibleForm();
    renderChecklist();
    renderShotLog();
    initGuideView();
  }

  // Initial Boot
  initProjectSelector();
  initRepairView();
  renderAllViews();
});
