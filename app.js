// TeamFit - Core Application State & Logic
// Toss/Notion Clean Minimal Design System for University Students

const STORAGE_KEY = 'TEAMFIT_APP_STATE_V3';

const ANIMAL_AVATARS = ['🐰', '🐻', '🐱', '🐶', '🦊', '🐼', '🐹', '🐨'];

function getMascotHtml(rate) {
  let speech = '';
  let moodSvg = '';
  let badgeColor = '';

  if (rate >= 100) {
    speech = '대박! 오늘 할 일 올클리어! 푹 쉬어요 🥳✨';
    badgeColor = 'bg-[#ecfdf5] text-[#059669] border-[#a7f3d0]';
    moodSvg = `
      <svg class="w-10 h-10" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="24" r="15" fill="#FCD34D"/>
        <polygon points="22,3 16,15 28,15" fill="#EC4899"/>
        <circle cx="22" cy="3" r="2.2" fill="#FBBF24"/>
        <line x1="18" y1="11" x2="26" y2="11" stroke="#FFFFFF" stroke-width="1.2"/>
        <path d="M15 21Q17 18 19 21" stroke="#1F2937" stroke-width="2" stroke-linecap="round" fill="none"/>
        <path d="M25 21Q27 18 29 21" stroke="#1F2937" stroke-width="2" stroke-linecap="round" fill="none"/>
        <circle cx="13" cy="25" r="2.5" fill="#F87171" opacity="0.6"/>
        <circle cx="31" cy="25" r="2.5" fill="#F87171" opacity="0.6"/>
        <ellipse cx="22" cy="25" rx="2.5" ry="1.8" fill="#F97316"/>
        <polygon points="7,9 8,11 10,12 8,13 7,15 6,13 4,12 6,11" fill="#F59E0B"/>
        <polygon points="37,10 38,12 40,13 38,14 37,16 36,14 34,13 36,12" fill="#3B82F6"/>
      </svg>
    `;
  } else if (rate >= 50) {
    speech = '벌써 절반 돌파! 조금만 더 파이팅 🔥';
    badgeColor = 'bg-[#eff6ff] text-[#2563eb] border-[#bfdbfe]';
    moodSvg = `
      <svg class="w-10 h-10" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="24" r="15" fill="#FCD34D"/>
        <rect x="8" y="16" width="28" height="4" rx="1.5" fill="#EF4444"/>
        <circle cx="22" cy="18" r="1.2" fill="#FFFFFF"/>
        <circle cx="16" cy="22" r="2" fill="#1F2937"/>
        <circle cx="28" cy="22" r="2" fill="#1F2937"/>
        <circle cx="16.8" cy="21.2" r="0.7" fill="#FFFFFF"/>
        <circle cx="28.8" cy="21.2" r="0.7" fill="#FFFFFF"/>
        <circle cx="13" cy="26" r="2.5" fill="#F87171" opacity="0.6"/>
        <circle cx="31" cy="26" r="2.5" fill="#F87171" opacity="0.6"/>
        <ellipse cx="22" cy="25" rx="2.5" ry="1.8" fill="#F97316"/>
        <path d="M22 14C22 11 20.2 9.5 19.2 11C18.2 12.5 21 14 22 14Z" fill="#10B981"/>
      </svg>
    `;
  } else if (rate > 0) {
    speech = '시작이 반이에요! 차근차근 해봐요 💨';
    badgeColor = 'bg-[#fffbeb] text-[#b45309] border-[#fde68a]';
    moodSvg = `
      <svg class="w-10 h-10" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="24" r="15" fill="#FCD34D"/>
        <circle cx="13" cy="26" r="2.5" fill="#F87171" opacity="0.6"/>
        <circle cx="31" cy="26" r="2.5" fill="#F87171" opacity="0.6"/>
        <circle cx="16" cy="22" r="2" fill="#1F2937"/>
        <circle cx="28" cy="22" r="2" fill="#1F2937"/>
        <circle cx="16.8" cy="21.2" r="0.7" fill="#FFFFFF"/>
        <circle cx="28.8" cy="21.2" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="22" cy="25" rx="2.5" ry="1.8" fill="#F97316"/>
        <path d="M22 9C22 6 20.2 4.5 19.2 6C18.2 7.5 21 9 22 9Z" fill="#10B981"/>
        <path d="M22 9C22 6 23.8 4.5 24.8 6C25.8 7.5 23 9 22 9Z" fill="#34D399"/>
      </svg>
    `;
  } else {
    speech = '오늘도 우리 팀 파이팅해 볼까요? 🐣';
    badgeColor = 'bg-[#f5f6f8] text-[#4e5968] border-[#e5e8eb]';
    moodSvg = `
      <svg class="w-10 h-10" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="24" r="15" fill="#FCD34D"/>
        <circle cx="13" cy="26" r="2.5" fill="#F87171" opacity="0.6"/>
        <circle cx="31" cy="26" r="2.5" fill="#F87171" opacity="0.6"/>
        <circle cx="16" cy="22" r="2" fill="#1F2937"/>
        <circle cx="28" cy="22" r="2" fill="#1F2937"/>
        <circle cx="16.8" cy="21.2" r="0.7" fill="#FFFFFF"/>
        <circle cx="28.8" cy="21.2" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="22" cy="25" rx="2.5" ry="1.8" fill="#F97316"/>
        <path d="M22 9C22 6 20.2 4.5 19.2 6C18.2 7.5 21 9 22 9Z" fill="#10B981"/>
        <path d="M22 9C22 6 23.8 4.5 24.8 6C25.8 7.5 23 9 22 9Z" fill="#34D399"/>
      </svg>
    `;
  }

  return `
    <div class="flex items-center gap-3 p-3 rounded-2xl bg-[#f9fafb] border border-[#f0f2f5] mt-2">
      <div class="shrink-0">
        ${moodSvg}
      </div>
      <div class="flex-1">
        <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeColor} mb-0.5">
          <span>마스코트 핏티의 응원</span>
        </div>
        <p class="text-xs font-bold text-[#191f28] leading-tight">${speech}</p>
      </div>
    </div>
  `;
}

function getInitialSampleState() {
  const members = [
    { id: 'm_1', name: '최수연', preferredRole: '발표', avatar: '🐰', colorIndex: 0 },
    { id: 'm_2', name: '김민우', preferredRole: '자료조사', avatar: '🐻', colorIndex: 1 },
    { id: 'm_3', name: '이지은', preferredRole: 'PPT 제작', avatar: '🐱', colorIndex: 2 }
  ];

  const rawTasks = [
    { id: 't_1', title: '기업 3개년 재무제표 수집 및 기초 정리', diff: 'A', score: 3, status: '진행 중', progress: 50, isCarriedOver: false },
    { id: 't_2', title: '재무비율 분석 보고서 본문 작성', diff: 'A', score: 3, status: '미시작', progress: 0, isCarriedOver: false },
    { id: 't_3', title: '경쟁사 동종업계 동향 자료조사', diff: 'B', score: 2, status: '완료', progress: 100, isCarriedOver: false },
    { id: 't_4', title: '중간 발표 슬라이드 PPT 템플릿 및 시각화', diff: 'B', score: 2, status: '미시작', progress: 0, isCarriedOver: false },
    { id: 't_5', title: '발표 대본 작성 및 Q&A 예상 질문 정리', diff: 'C', score: 1, status: '미시작', progress: 0, isCarriedOver: false },
    { id: 't_6', title: '참고문헌 및 출처 각주 정리', diff: 'C', score: 1, status: '완료', progress: 100, isCarriedOver: false }
  ];

  const balancedTasks = balanceTasksEqually(members, rawTasks);

  return {
    isInitialized: true,
    project: {
      name: '회계세무학과 2학년 기업분석 팀플',
      deadline: '2026-11-30',
      kakaoUrl: 'https://open.kakao.com',
      kakaoCode: '2026',
      driveUrl: 'https://drive.google.com'
    },
    members,
    tasks: balancedTasks,
    currentScreen: 2,
    currentDay: 1,
    activeMemberId: 'm_1'
  };
}

const defaultEmptyState = {
  isInitialized: false,
  project: {
    name: '회계세무학과 팀 프로젝트',
    deadline: '',
    kakaoUrl: '',
    kakaoCode: '',
    driveUrl: ''
  },
  members: [],
  tasks: [],
  currentScreen: 1,
  currentDay: 1,
  activeMemberId: null
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        return {
          ...defaultEmptyState,
          ...parsed,
          project: { ...defaultEmptyState.project, ...(parsed.project || {}) },
          members: Array.isArray(parsed.members) ? parsed.members : [],
          tasks: Array.isArray(parsed.tasks) ? parsed.tasks : []
        };
      }
    }
  } catch (e) {
    console.warn('Load state error:', e);
  }
  return getInitialSampleState();
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('LocalStorage error:', e);
  }
  updateHeader();
  renderApp();
}

function safeCreateIcons() {
  try {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  } catch (err) {
    console.warn('Lucide icon warning:', err);
  }
}

function updateHeader() {
  const dayBadge = document.getElementById('headerDayBadge');
  const projName = document.getElementById('headerProjectName');
  const quickLinks = document.getElementById('quickLinksContainer');
  const mainNav = document.getElementById('mainNavBar');

  if (dayBadge) dayBadge.innerText = `Day ${state.currentDay || 1}`;
  if (projName) projName.innerText = (state.project && state.project.name) || '팀 프로젝트 관리';

  if (state.isInitialized && mainNav) {
    mainNav.classList.remove('hidden');
    [1, 2, 3, 4].forEach(scr => {
      const btn = document.getElementById(`navBtnScreen${scr}`);
      if (btn) {
        if (state.currentScreen === scr) {
          btn.className = "py-1.5 px-2.5 text-xs font-bold text-center rounded-xl bg-[#eff6ff] text-[#2563eb] transition-all";
        } else {
          btn.className = "py-1.5 px-2.5 text-xs font-semibold text-center rounded-xl text-[#8b95a1] hover:text-[#4e5968] transition-all";
        }
      }
    });

    const rebalanceDot = document.getElementById('rebalanceNoticeDot');
    if (rebalanceDot) {
      const hasUnbalance = checkWorkloadImbalance().isImbalanced;
      const hasCarriedOver = (state.tasks || []).some(t => t.isCarriedOver && t.status !== '완료');
      if (hasUnbalance || hasCarriedOver) {
        rebalanceDot.classList.remove('hidden');
      } else {
        rebalanceDot.classList.add('hidden');
      }
    }
  } else if (mainNav) {
    mainNav.classList.add('hidden');
  }

  // Quick Links
  if (quickLinks) {
    quickLinks.innerHTML = '';
    const currentCode = (state.project && state.project.kakaoCode) || '';
    const codeBadge = currentCode ? `<span class="bg-[#fef3c7] text-[#b45309] text-[10px] px-1 py-0.2 rounded font-extrabold ml-0.5">#${escapeHtml(currentCode)}</span>` : '';
    
    quickLinks.innerHTML += `
      <button onclick="openKakaoModal()" class="px-2 py-1.5 rounded-xl bg-[#fffbeb] hover:bg-[#fef3c7] text-[#b45309] text-xs font-bold flex items-center gap-1 transition" title="카카오톡 단톡방">
        <i data-lucide="message-circle" class="w-3.5 h-3.5 text-amber-500"></i>
        <span>카톡</span>
        ${codeBadge}
      </button>
    `;

    if (state.project && state.project.driveUrl) {
      quickLinks.innerHTML += `
        <a href="${state.project.driveUrl}" target="_blank" class="p-1.5 rounded-xl bg-[#f0fdf4] hover:bg-[#dcfce7] text-[#16a34a] text-xs font-semibold flex items-center gap-1 transition" title="공동 드라이브">
          <i data-lucide="folder-git-2" class="w-3.5 h-3.5"></i>
        </a>
      `;
    }
  }

  safeCreateIcons();
}

function switchScreen(screenNum) {
  state.currentScreen = screenNum;
  saveState();
}

// ----------------------------------------------------
// Kakao OpenChat Modal Logic
// ----------------------------------------------------
function openKakaoModal() {
  const overlay = document.getElementById('modalOverlay');
  const box = document.getElementById('modalBox');
  if (!overlay || !box) return;

  const currentCode = (state.project && state.project.kakaoCode) || '';
  const currentUrl = (state.project && state.project.kakaoUrl) || '';

  box.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#f0f2f5] pb-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-[#fef3c7] text-[#b45309] flex items-center justify-center font-bold">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="text-sm font-bold text-[#191f28]">카카오톡 오픈채팅</h3>
            <p class="text-[11px] text-[#8b95a1]">참여 코드 및 단톡방 링크</p>
          </div>
        </div>
        <button onclick="closeKakaoModal()" class="text-[#8b95a1] hover:text-[#191f28] p-1 rounded-lg">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      ${currentCode ? `
        <div class="bg-[#fffbeb] border border-[#fef3c7] rounded-2xl p-3.5 flex items-center justify-between">
          <div>
            <span class="text-[10px] text-[#b45309] font-semibold block">오픈채팅 참여 코드</span>
            <span class="text-base font-extrabold text-[#78350f] tracking-wider">${escapeHtml(currentCode)}</span>
          </div>
          <button onclick="copyKakaoCode('${escapeHtml(currentCode)}')" id="copyCodeBtn" class="px-3 py-1.5 bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-xl text-xs font-bold flex items-center gap-1 transition">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i> 복사
          </button>
        </div>
      ` : `
        <div class="bg-[#f5f6f8] rounded-2xl p-3 text-[11px] text-[#6b7684] leading-relaxed">
          💡 참여 코드를 등록해두면 팀원들이 상단에서 바로 확인하고 복사할 수 있어요!
        </div>
      `}

      <div class="space-y-2.5 text-xs">
        <div>
          <label class="block font-semibold text-[#4e5968] mb-1">참여 코드 (비밀번호)</label>
          <input type="text" id="modalKakaoCodeInput" value="${escapeHtml(currentCode)}" 
            class="w-full px-3 py-2 text-xs rounded-xl border border-[#e5e8eb] bg-[#f9fafb] focus:bg-white focus:outline-none focus:border-amber-400" 
            placeholder="예: 2026, 1234">
        </div>
        <div>
          <label class="block font-semibold text-[#4e5968] mb-1">오픈채팅방 URL</label>
          <input type="text" id="modalKakaoUrlInput" value="${escapeHtml(currentUrl)}" 
            class="w-full px-3 py-2 text-xs rounded-xl border border-[#e5e8eb] bg-[#f9fafb] focus:bg-white focus:outline-none focus:border-amber-400" 
            placeholder="https://open.kakao.com/o/...">
        </div>
      </div>

      <div class="pt-1 flex flex-col gap-2">
        <button onclick="saveKakaoInfo()" class="w-full py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-white text-xs font-bold rounded-xl transition">
          저장하기
        </button>
        ${currentUrl ? `
          <a href="${currentUrl}" target="_blank" onclick="closeKakaoModal()" class="w-full py-2.5 bg-[#fee500] hover:bg-[#fdd835] text-[#3c1e1e] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition">
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i> 카카오톡 채팅방 열기
          </a>
        ` : ''}
      </div>
    </div>
  `;

  overlay.classList.remove('hidden');
  safeCreateIcons();
}

function closeKakaoModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.add('hidden');
}

function saveKakaoInfo() {
  const codeInput = document.getElementById('modalKakaoCodeInput');
  const urlInput = document.getElementById('modalKakaoUrlInput');

  if (!state.project) state.project = {};
  if (codeInput) state.project.kakaoCode = codeInput.value.trim();
  if (urlInput) state.project.kakaoUrl = urlInput.value.trim();

  saveState();
  closeKakaoModal();
}

function copyKakaoCode(code) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => {
      const btn = document.getElementById('copyCodeBtn');
      if (btn) btn.innerHTML = '복사됨 ✓';
      setTimeout(() => {
        if (btn) btn.innerHTML = '<i data-lucide="copy" class="w-3.5 h-3.5"></i> 복사';
        safeCreateIcons();
      }, 1500);
    }).catch(() => {
      prompt('참여 코드를 복사하세요:', code);
    });
  } else {
    prompt('참여 코드를 복사하세요:', code);
  }
}

// ----------------------------------------------------
// Balancing Algorithm
// ----------------------------------------------------
function balanceTasksEqually(members, tasks) {
  if (!members || members.length === 0 || !tasks || tasks.length === 0) return tasks || [];

  const memberScores = {};
  members.forEach(m => memberScores[m.id] = 0);

  const sortedTasks = [...tasks].sort((a, b) => (b.score || 2) - (a.score || 2));

  return sortedTasks.map(task => {
    let bestMemberId = members[0].id;
    let minEvaluation = Infinity;

    members.forEach(member => {
      let roleMatch = false;
      if (member.preferredRole) {
        const pref = member.preferredRole.toLowerCase();
        const title = (task.title || '').toLowerCase();
        if (title.includes(pref) || (pref.includes('조사') && title.includes('조사')) ||
            (pref.includes('ppt') && title.includes('ppt')) || (pref.includes('발표') && title.includes('발표')) ||
            (pref.includes('보고서') && title.includes('보고서'))) {
          roleMatch = true;
        }
      }

      const currentLoad = memberScores[member.id] || 0;
      const evaluation = currentLoad - (roleMatch ? 1.2 : 0);

      if (evaluation < minEvaluation) {
        minEvaluation = evaluation;
        bestMemberId = member.id;
      }
    });

    memberScores[bestMemberId] = (memberScores[bestMemberId] || 0) + (task.score || 2);
    return {
      ...task,
      memberId: bestMemberId
    };
  });
}

function checkWorkloadImbalance() {
  if (!state.isInitialized || !state.members || state.members.length < 2) {
    return { isImbalanced: false };
  }

  const memberRemainingScores = {};
  state.members.forEach(m => memberRemainingScores[m.id] = 0);

  (state.tasks || []).forEach(task => {
    if (task.status !== '완료' && task.memberId) {
      memberRemainingScores[task.memberId] = (memberRemainingScores[task.memberId] || 0) + (task.score || 2);
    }
  });

  for (const member of state.members) {
    const myScore = memberRemainingScores[member.id] || 0;
    const otherMembers = state.members.filter(m => m.id !== member.id);
    const otherAvg = otherMembers.reduce((sum, m) => sum + (memberRemainingScores[m.id] || 0), 0) / otherMembers.length;

    if (myScore - otherAvg >= 3) {
      return {
        isImbalanced: true,
        overloadedMember: member,
        diff: Math.round((myScore - otherAvg) * 10) / 10,
        myScore,
        otherAvg: Math.round(otherAvg * 10) / 10
      };
    }
  }

  return { isImbalanced: false };
}

function getTaskProgressFraction(task) {
  if (task.status === '완료') return 1.0;
  if (task.status === '진행 중') return (task.progress || 50) / 100;
  return 0.0;
}

// ----------------------------------------------------
// Screen Renderers
// ----------------------------------------------------
function renderApp() {
  const container = document.getElementById('screenContent');
  if (!container) return;

  try {
    if (!state.isInitialized || state.currentScreen === 1) {
      container.innerHTML = renderScreen1();
    } else if (state.currentScreen === 2) {
      container.innerHTML = renderScreen2();
    } else if (state.currentScreen === 3) {
      container.innerHTML = renderScreen3();
    } else if (state.currentScreen === 4) {
      container.innerHTML = renderScreen4();
    }
  } catch (renderError) {
    console.error('Render error:', renderError);
    container.innerHTML = `
      <div class="p-4 bg-red-50 text-red-700 rounded-2xl text-xs space-y-2 border border-red-200">
        <h3 class="font-bold">화면 렌더링 중 오류가 발생했습니다.</h3>
        <p>${escapeHtml(renderError.message)}</p>
        <button onclick="resetAllData()" class="px-3 py-1.5 bg-red-600 text-white font-bold rounded-lg shadow-sm">
          데이터 초기화 후 재시작
        </button>
      </div>
    `;
  }

  safeCreateIcons();
}

// ----------------------------------------------------
// SCREEN 1: 초기 설정 (Bright & Simple Minimalist Setup)
// ----------------------------------------------------
function renderScreen1() {
  const members = state.members || [];
  const tasks = state.tasks || [];

  return `
    <div class="fade-in space-y-4">
      <!-- Bright & Friendly Welcome Card -->
      <div class="bg-gradient-to-br from-[#eff6ff] via-[#f0f9ff] to-[#e0f2fe] border border-[#dbeafe] rounded-3xl p-5 text-[#1e3a8a] shadow-xs relative overflow-hidden">
        <div class="flex items-center justify-between">
          <div class="space-y-1 z-10">
            <span class="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#2563eb] bg-white/80 px-2.5 py-0.5 rounded-full border border-[#bfdbfe]">
              <span>✨ 첫 프로젝트 시작</span>
            </span>
            <h2 class="text-base font-extrabold text-[#0f172a] tracking-tight">공정한 역할 분담 설정</h2>
            <p class="text-xs text-[#3b82f6] font-medium leading-relaxed">
              팀원과 할 일을 적어주시면 핏티가 난이도에 맞춰<br>갈등 없이 딱 알맞게 나눠드릴게요! 🐣
            </p>
          </div>
          <div class="shrink-0 pl-2">
            <div class="w-12 h-12 rounded-2xl bg-white/90 border border-[#bfdbfe] flex items-center justify-center shadow-xs">
              <svg class="w-9 h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="19" r="13" fill="#FCD34D"/>
                <circle cx="11" cy="21" r="2.2" fill="#F87171" opacity="0.6"/>
                <circle cx="25" cy="21" r="2.2" fill="#F87171" opacity="0.6"/>
                <circle cx="13" cy="17" r="1.8" fill="#1F2937"/>
                <circle cx="23" cy="17" r="1.8" fill="#1F2937"/>
                <circle cx="13.5" cy="16.5" r="0.6" fill="#FFFFFF"/>
                <circle cx="23.5" cy="16.5" r="0.6" fill="#FFFFFF"/>
                <ellipse cx="18" cy="20.5" rx="2.5" ry="1.6" fill="#F97316"/>
                <path d="M18 6C18 4 16.2 2.5 15.2 4C14.2 5.5 17 7 18 7Z" fill="#10B981"/>
                <path d="M18 6C18 4 19.8 2.5 20.8 4C21.8 5.5 19 7 18 7Z" fill="#34D399"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- 1. Project Info Card -->
      <div class="bg-white rounded-3xl p-5 border border-[#f0f2f5] shadow-xs space-y-3.5">
        <div class="flex items-center gap-2">
          <span class="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-xs">1</span>
          <h3 class="text-xs font-bold text-[#191f28]">프로젝트 기본 정보</h3>
        </div>

        <div class="space-y-2.5">
          <div>
            <label class="block text-[11px] font-semibold text-[#6b7684] mb-1">프로젝트명</label>
            <input type="text" id="initProjName" value="${escapeHtml(state.project.name || '')}" 
              class="w-full px-3.5 py-2.5 text-xs rounded-2xl border border-[#e5e8eb] bg-[#fbfcfd] focus:bg-white focus:outline-none focus:border-blue-500 transition" 
              placeholder="예: 회계세무학과 2학년 기업분석 팀플">
          </div>

          <div class="grid grid-cols-3 gap-2">
            <div class="col-span-2">
              <label class="block text-[11px] font-semibold text-[#6b7684] mb-1">카카오톡 단톡방 URL</label>
              <input type="text" id="initKakaoUrl" value="${escapeHtml(state.project.kakaoUrl || '')}" 
                class="w-full px-3.5 py-2.5 text-xs rounded-2xl border border-[#e5e8eb] bg-[#fbfcfd] focus:bg-white focus:outline-none focus:border-blue-500 transition" 
                placeholder="https://open.kakao.com/...">
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-[#6b7684] mb-1">참여 코드</label>
              <input type="text" id="initKakaoCode" value="${escapeHtml(state.project.kakaoCode || '')}" 
                class="w-full px-3.5 py-2.5 text-xs rounded-2xl border border-[#e5e8eb] bg-[#fbfcfd] focus:bg-white focus:outline-none focus:border-blue-500 transition" 
                placeholder="예: 2026">
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-semibold text-[#6b7684] mb-1">공동 작업 드라이브 / 노션 링크</label>
            <input type="text" id="initDriveUrl" value="${escapeHtml(state.project.driveUrl || '')}" 
              class="w-full px-3.5 py-2.5 text-xs rounded-2xl border border-[#e5e8eb] bg-[#fbfcfd] focus:bg-white focus:outline-none focus:border-blue-500 transition" 
              placeholder="https://drive.google.com/...">
          </div>
        </div>
      </div>

      <!-- 2. Member Input Card -->
      <div class="bg-white rounded-3xl p-5 border border-[#f0f2f5] shadow-xs space-y-3.5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-xs">2</span>
            <h3 class="text-xs font-bold text-[#191f28]">팀원 등록</h3>
          </div>
          <span class="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
            총 ${members.length}명
          </span>
        </div>
        
        <div class="flex gap-1.5">
          <input type="text" id="newMemberName" placeholder="이름 (예: 수연)" 
            class="flex-1 px-3.5 py-2.5 text-xs rounded-2xl border border-[#e5e8eb] bg-[#fbfcfd] focus:bg-white focus:outline-none focus:border-blue-500 transition">
          <select id="newMemberRole" 
            class="px-2.5 py-2.5 text-xs rounded-2xl border border-[#e5e8eb] bg-[#fbfcfd] focus:bg-white focus:outline-none focus:border-blue-500 font-medium text-[#4e5968]">
            <option value="자료조사">자료조사</option>
            <option value="PPT 제작">PPT 제작</option>
            <option value="발표">발표</option>
            <option value="보고서 작성">보고서 작성</option>
            <option value="일정 관리">일정 관리</option>
          </select>
          <button onclick="addMemberFromInput()" class="px-3.5 py-2.5 bg-[#3182f6] hover:bg-[#1b64da] text-white rounded-2xl text-xs font-bold transition flex items-center gap-1 shadow-xs">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="flex flex-wrap gap-2 pt-1">
          ${members.length === 0 ? '<p class="text-xs text-[#8b95a1] py-1.5">팀원을 1명 이상 추가해 주세요.</p>' : ''}
          ${members.map(m => `
            <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold member-color-${m.colorIndex || 0} shadow-2xs">
              <span>${m.avatar || '🐰'}</span>
              <span>${escapeHtml(m.name)}</span>
              <span class="text-[10px] font-medium opacity-80">(${escapeHtml(m.preferredRole)})</span>
              <button onclick="removeMember('${m.id}')" class="opacity-60 hover:opacity-100 hover:text-red-500 p-0.5 ml-0.5">
                <i data-lucide="x" class="w-3 h-3"></i>
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 3. Task Input Card -->
      <div class="bg-white rounded-3xl p-5 border border-[#f0f2f5] shadow-xs space-y-3.5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-xs">3</span>
            <h3 class="text-xs font-bold text-[#191f28]">과제 업무 등록</h3>
          </div>
          <span class="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
            총 ${tasks.length}개
          </span>
        </div>

        <div class="space-y-2">
          <input type="text" id="newTaskTitle" placeholder="할 일 입력 (예: 기업 재무비율 분석 보고서 작성)" 
            class="w-full px-3.5 py-2.5 text-xs rounded-2xl border border-[#e5e8eb] bg-[#fbfcfd] focus:bg-white focus:outline-none focus:border-blue-500 transition">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 text-xs">
              <label class="cursor-pointer">
                <input type="radio" name="taskDiff" value="A" class="hidden peer">
                <span class="px-2.5 py-1.5 rounded-xl border border-red-200 peer-checked:bg-red-500 peer-checked:text-white text-red-600 text-[11px] font-bold transition">A (3점)</span>
              </label>
              <label class="cursor-pointer">
                <input type="radio" name="taskDiff" value="B" checked class="hidden peer">
                <span class="px-2.5 py-1.5 rounded-xl border border-amber-200 peer-checked:bg-amber-500 peer-checked:text-white text-amber-600 text-[11px] font-bold transition">B (2점)</span>
              </label>
              <label class="cursor-pointer">
                <input type="radio" name="taskDiff" value="C" class="hidden peer">
                <span class="px-2.5 py-1.5 rounded-xl border border-emerald-200 peer-checked:bg-emerald-500 peer-checked:text-white text-emerald-600 text-[11px] font-bold transition">C (1점)</span>
              </label>
            </div>
            <button onclick="addTaskFromInput()" class="px-3.5 py-1.5 bg-[#3182f6] hover:bg-[#1b64da] text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-xs">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i> 등록
            </button>
          </div>
        </div>

        <div class="space-y-2 pt-1">
          ${tasks.length === 0 ? '<p class="text-xs text-[#8b95a1] py-1.5">등록된 업무가 없습니다.</p>' : ''}
          ${tasks.map(t => `
            <div class="flex items-center justify-between p-3 rounded-2xl border border-[#f0f2f5] bg-[#fbfcfd] text-xs">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded-lg text-[10px] font-extrabold badge-diff-${t.diff}">${t.diff} (${t.score}점)</span>
                <span class="text-[#191f28] font-bold">${escapeHtml(t.title)}</span>
              </div>
              <button onclick="removeTask('${t.id}')" class="text-[#8b95a1] hover:text-red-500 p-1">
                <i data-lucide="x" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Action Button -->
      <button onclick="generateEquallyBalancedPlan()" class="w-full py-4 bg-gradient-to-r from-[#3182f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white rounded-2xl font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition active:scale-[0.98]">
        <i data-lucide="sparkles" class="w-4 h-4"></i> 공정하게 자동 분담표 만들기
      </button>
    </div>
  `;
}

// ----------------------------------------------------
// SCREEN 2: 오늘의 계획 (Toss Style Feed & Segmented Control)
// ----------------------------------------------------
function renderScreen2() {
  const members = state.members || [];
  if (members.length === 0) {
    return `
      <div class="p-8 text-center text-xs text-[#8b95a1] space-y-3 bg-white rounded-3xl border border-[#f0f2f5]">
        <p>팀원이 등록되지 않았습니다.</p>
        <button onclick="switchScreen(1)" class="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold">초기 설정으로 가기</button>
      </div>
    `;
  }

  const activeMember = members.find(m => m.id === state.activeMemberId) || members[0];
  const allTasks = state.tasks || [];
  const myTasks = allTasks.filter(t => t.memberId === activeMember.id);
  const myCompletedCount = myTasks.filter(t => t.status === '완료').length;
  const myInProgressCount = myTasks.filter(t => t.status === '진행 중').length;
  const myEffectiveScore = myTasks.reduce((sum, t) => sum + getTaskProgressFraction(t), 0);
  const myRate = myTasks.length > 0 ? Math.round((myEffectiveScore / myTasks.length) * 100) : 0;

  return `
    <div class="fade-in space-y-4">
      <!-- Member Story-style Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        ${members.map(m => {
          const isSelected = m.id === activeMember.id;
          return `
            <button onclick="setActiveMember('${m.id}')" class="px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${isSelected ? 'bg-[#191f28] text-white shadow-xs' : 'bg-white text-[#6b7684] border border-[#f0f2f5] hover:bg-gray-50'}">
              <span class="text-sm">${m.avatar || '🐰'}</span>
              <span>${escapeHtml(m.name)}</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- Hero Progress Card (Toss Card Style with Mascot) -->
      <div class="bg-white rounded-3xl p-5 border border-[#f0f2f5] shadow-xs space-y-3">
        <div class="flex items-center justify-between">
          <div>
            <span class="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">
              ${escapeHtml(activeMember.preferredRole || '담당')}
            </span>
            <h2 class="text-base font-extrabold text-[#191f28] mt-1.5 tracking-tight">${activeMember.avatar || '🐰'} ${escapeHtml(activeMember.name)}님의 오늘 할 일</h2>
          </div>
          <div class="text-right">
            <span class="text-2xl font-black text-blue-600 tracking-tight">${myRate}%</span>
            <p class="text-[11px] text-[#8b95a1] font-medium mt-0.5">${myCompletedCount}/${myTasks.length} 완료</p>
          </div>
        </div>

        <!-- Sleek Progress Bar -->
        <div class="w-full bg-[#f2f4f6] rounded-full h-2.5 overflow-hidden">
          <div class="bg-blue-500 h-2.5 rounded-full transition-all duration-300" style="width: ${myRate}%"></div>
        </div>

        <!-- Mascot Fitty Interactive Reaction Box -->
        ${getMascotHtml(myRate)}
      </div>

      <!-- Task Card Feed -->
      <div class="space-y-3">
        <div class="flex items-center justify-between px-1">
          <span class="text-xs font-bold text-[#4e5968]">담당 업무 (${myTasks.length}건)</span>
          <span class="text-[11px] text-[#8b95a1]">원클릭 상태 변경</span>
        </div>

        ${myTasks.length === 0 ? '<div class="p-8 text-center text-xs text-[#8b95a1] bg-white rounded-3xl border border-dashed border-[#e5e8eb]">배정된 업무가 없습니다.</div>' : ''}

        ${myTasks.map(task => {
          const isDone = task.status === '완료';
          const isInProgress = task.status === '진행 중';
          const currentProgress = task.progress || (isDone ? 100 : (isInProgress ? 50 : 0));

          return `
            <div class="bg-white rounded-3xl p-4 border ${isDone ? 'border-blue-100 bg-blue-50/20' : 'border-[#f0f2f5]'} shadow-xs space-y-3 transition">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1">
                  <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
                    <span class="px-2 py-0.5 rounded-lg text-[10px] font-extrabold badge-diff-${task.diff || 'B'}">${task.diff || 'B'}등급</span>
                    ${task.isCarriedOver ? '<span class="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-red-50 text-red-600 border border-red-100">이월됨</span>' : ''}
                    ${isInProgress ? `<span class="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">진행도 ${currentProgress}%</span>` : ''}
                  </div>
                  <h4 class="text-xs font-bold ${isDone ? 'line-through text-[#8b95a1]' : 'text-[#191f28]'} leading-snug">${escapeHtml(task.title)}</h4>
                </div>
              </div>

              <!-- Toss Segmented Control Bar -->
              <div class="segmented-control">
                <button onclick="updateTaskStatus('${task.id}', '미시작')" class="segmented-btn ${task.status === '미시작' ? 'active-미시작' : ''}">
                  미시작
                </button>
                <button onclick="updateTaskStatus('${task.id}', '진행 중')" class="segmented-btn ${isInProgress ? 'active-진행중' : ''}">
                  진행 중
                </button>
                <button onclick="updateTaskStatus('${task.id}', '완료')" class="segmented-btn ${isDone ? 'active-완료' : ''}">
                  완료 ✓
                </button>
              </div>

              <!-- In-Progress Slider Control Panel -->
              ${isInProgress ? `
                <div class="pt-3 border-t border-amber-100/60 bg-[#fffbeb]/60 rounded-2xl p-3 space-y-2.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-bold text-[#b45309] flex items-center gap-1">
                      <i data-lucide="activity" class="w-3.5 h-3.5 text-amber-500"></i> 진행 현황
                    </span>
                    <span class="font-black text-amber-600 bg-white px-2 py-0.5 rounded-full text-xs shadow-2xs">${currentProgress}% 진행</span>
                  </div>

                  <!-- Mini Progress Bar -->
                  <div class="w-full bg-amber-100 rounded-full h-1.5 overflow-hidden">
                    <div class="bg-amber-500 h-1.5 rounded-full transition-all duration-200" style="width: ${currentProgress}%"></div>
                  </div>

                  <!-- Quick % Preset Buttons & Slider -->
                  <div class="flex items-center justify-between gap-1 pt-0.5">
                    <div class="flex items-center gap-1">
                      <button onclick="updateTaskProgress('${task.id}', 25)" class="px-2 py-1 rounded-lg text-[10px] font-bold transition ${currentProgress === 25 ? 'bg-amber-500 text-white' : 'bg-white text-amber-700 border border-amber-200'}">25%</button>
                      <button onclick="updateTaskProgress('${task.id}', 50)" class="px-2 py-1 rounded-lg text-[10px] font-bold transition ${currentProgress === 50 ? 'bg-amber-500 text-white' : 'bg-white text-amber-700 border border-amber-200'}">50%</button>
                      <button onclick="updateTaskProgress('${task.id}', 75)" class="px-2 py-1 rounded-lg text-[10px] font-bold transition ${currentProgress === 75 ? 'bg-amber-500 text-white' : 'bg-white text-amber-700 border border-amber-200'}">75%</button>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-[10px] text-amber-700 font-medium">조절:</span>
                      <input type="range" min="10" max="90" step="5" value="${currentProgress}" 
                        oninput="updateTaskProgress('${task.id}', this.value)" 
                        class="w-20 h-1.5 accent-amber-500 cursor-pointer">
                    </div>
                  </div>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>

      <!-- Move to Screen 3 -->
      <button onclick="switchScreen(3)" class="w-full py-3.5 bg-white hover:bg-gray-50 text-[#4e5968] rounded-2xl text-xs font-bold border border-[#f0f2f5] flex items-center justify-center gap-1.5 transition">
        <i data-lucide="bar-chart-2" class="w-4 h-4 text-blue-500"></i> 팀 전체 진행 현황 보기
      </button>
    </div>
  `;
}

// ----------------------------------------------------
// SCREEN 3: 일일 시행 기록 & 팀 모니터링
// ----------------------------------------------------
function renderScreen3() {
  const allTasks = state.tasks || [];
  const members = state.members || [];
  const totalTasks = allTasks.length;
  const completedTasks = allTasks.filter(t => t.status === '완료').length;
  const inProgressTasks = allTasks.filter(t => t.status === '진행 중').length;
  const remainingTasks = totalTasks - completedTasks;
  const totalEffective = allTasks.reduce((sum, t) => sum + getTaskProgressFraction(t), 0);
  const overallRate = totalTasks > 0 ? Math.round((totalEffective / totalTasks) * 100) : 0;

  return `
    <div class="fade-in space-y-4">
      <!-- Team Progress Hero Card -->
      <div class="bg-gradient-to-br from-[#191f28] to-[#333d4b] rounded-3xl p-5 text-white shadow-xs space-y-3">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs text-blue-200 font-semibold">팀 전체 진행률</p>
            <h2 class="text-2xl font-black mt-0.5 tracking-tight">${overallRate}%</h2>
          </div>
          <div class="text-right">
            <span class="text-xs bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full font-bold">
              남은 업무 ${remainingTasks}개
            </span>
            <p class="text-[11px] text-gray-300 mt-1">완료 ${completedTasks} / 진행 중 ${inProgressTasks} / 총 ${totalTasks}</p>
          </div>
        </div>

        <div class="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
          <div class="bg-blue-400 h-2.5 rounded-full transition-all duration-300" style="width: ${overallRate}%"></div>
        </div>
      </div>

      <!-- Member Progress Cards -->
      <div class="space-y-3">
        <h3 class="text-xs font-bold text-[#6b7684] flex items-center gap-1.5 px-1">
          <i data-lucide="users" class="w-3.5 h-3.5 text-blue-500"></i> 팀원별 진행 상황
        </h3>

        ${members.map((member, idx) => {
          const mTasks = allTasks.filter(t => t.memberId === member.id);
          const mCompleted = mTasks.filter(t => t.status === '완료').length;
          const mEffective = mTasks.reduce((sum, t) => sum + getTaskProgressFraction(t), 0);
          const mRate = mTasks.length > 0 ? Math.round((mEffective / mTasks.length) * 100) : 0;
          const isOver50 = mRate >= 50;

          return `
            <div class="bg-white rounded-3xl p-4 border border-[#f0f2f5] shadow-xs space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <span class="w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-base member-color-${member.colorIndex || 0}">
                    ${member.avatar || '🐰'}
                  </span>
                  <div>
                    <h4 class="text-xs font-bold text-[#191f28] flex items-center gap-1">
                      <span>${escapeHtml(member.name)}</span>
                      <span class="text-[10px] text-[#8b95a1] font-normal">(${escapeHtml(member.preferredRole || '팀원')})</span>
                    </h4>
                    <span class="text-[10px] text-blue-600 font-semibold">${mCompleted}/${mTasks.length} 완료</span>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  ${isOver50 ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0]">🎉 50% 달성</span>' : ''}
                  <span class="text-sm font-black ${isOver50 ? 'text-[#059669]' : 'text-blue-600'}">${mRate}%</span>
                </div>
              </div>

              <!-- Bar -->
              <div class="w-full bg-[#f2f4f6] rounded-full h-2 overflow-hidden">
                <div class="${isOver50 ? 'bg-[#059669]' : 'bg-blue-500'} h-2 rounded-full transition-all duration-300" style="width: ${mRate}%"></div>
              </div>

              <!-- Task Chips -->
              <div class="flex flex-wrap gap-1.5 pt-0.5">
                ${mTasks.map(t => {
                  const done = t.status === '완료';
                  const inProg = t.status === '진행 중';
                  const progVal = t.progress || 50;
                  return `
                    <span class="text-[10px] px-2.5 py-1 rounded-xl border flex items-center gap-1 ${done ? 'bg-blue-50 text-blue-700 border-blue-100 line-through opacity-70' : (inProg ? 'bg-amber-50 text-amber-700 border-amber-200 font-semibold' : 'bg-[#f9fafb] text-[#4e5968] border-[#f0f2f5]')}">
                      <span class="font-extrabold text-[9px]">${t.diff}</span> ${escapeHtml(t.title)}
                      ${inProg ? `<span class="text-[9px] font-bold text-amber-600 bg-white px-1 rounded-md shadow-2xs">${progVal}%</span>` : ''}
                    </span>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Move to Screen 4 -->
      <button onclick="switchScreen(4)" class="w-full py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-2xl text-xs font-bold border border-blue-200 flex items-center justify-center gap-1.5 transition">
        <i data-lucide="refresh-cw" class="w-4 h-4"></i> 역할 및 일정 재조율 보기
      </button>
    </div>
  `;
}

// ----------------------------------------------------
// SCREEN 4: 역할 및 일정 재조율 (Rebalancing)
// ----------------------------------------------------
function renderScreen4() {
  const unbalanceInfo = checkWorkloadImbalance();
  const allTasks = state.tasks || [];
  const members = state.members || [];
  const uncompletedTasks = allTasks.filter(t => t.status !== '완료');

  return `
    <div class="fade-in space-y-4">
      <div class="bg-white rounded-3xl p-4.5 border border-[#f0f2f5] shadow-xs flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 text-xl shadow-2xs">
          🐣
        </div>
        <div>
          <h2 class="text-sm font-bold text-[#191f28]">역할 및 일정 재조율</h2>
          <p class="text-xs text-[#8b95a1] mt-0.5 leading-relaxed">특정 팀원에게 일이 몰리지 않게 핏티와 함께 다정하게 맞춰봐요 🤝</p>
        </div>
      </div>

      <!-- Rule 3: 업무 불균형 경고 배너 -->
      ${unbalanceInfo.isImbalanced ? `
        <div class="bg-red-50 border border-red-200 rounded-3xl p-4 text-red-800 space-y-2">
          <div class="flex items-start gap-2">
            <i data-lucide="alert-triangle" class="w-5 h-5 text-red-500 shrink-0 mt-0.5"></i>
            <div>
              <h4 class="text-xs font-bold text-red-700">업무 불균형 알림</h4>
              <p class="text-xs text-red-600 mt-0.5 leading-relaxed">
                <strong>${escapeHtml(unbalanceInfo.overloadedMember.name)}</strong> 팀원의 남은 업무 점수(${unbalanceInfo.myScore}점)가 평균보다 
                <span class="underline font-bold">${unbalanceInfo.diff}점</span> 높아요. 다른 팀원에게 일부 업무를 넘겨줄까요?
              </p>
            </div>
          </div>
        </div>
      ` : `
        <div class="bg-[#f0fdf4] border border-[#dcfce7] rounded-3xl p-3.5 text-[#16a34a] flex items-center gap-2 text-xs font-semibold">
          <i data-lucide="check-circle" class="w-4 h-4 shrink-0"></i>
          <span>현재 모든 팀원의 업무량이 공정하게 균형을 이루고 있습니다!</span>
        </div>
      `}

      <!-- Rule 2: 당일 미완료 및 이월 업무 목록 -->
      <div class="bg-white rounded-3xl p-4.5 border border-[#f0f2f5] shadow-xs space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-xs font-bold text-[#4e5968] flex items-center gap-1.5">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-500"></i> 미완료 & 이월 업무 (${uncompletedTasks.length}건)
          </h3>
          <span class="text-[11px] text-[#8b95a1]">담당자 변경 가능</span>
        </div>

        <div class="space-y-2">
          ${uncompletedTasks.length === 0 ? '<p class="text-xs text-[#8b95a1] text-center py-4">모든 업무를 완료했습니다! 👏</p>' : ''}
          ${uncompletedTasks.map(task => {
            const currentOwner = members.find(m => m.id === task.memberId);
            return `
              <div class="p-3.5 rounded-2xl border border-[#f0f2f5] bg-[#f9fafb] space-y-2.5">
                <div>
                  <div class="flex items-center gap-1.5 mb-1">
                    <span class="px-2 py-0.5 rounded-lg text-[10px] font-extrabold badge-diff-${task.diff || 'B'}">${task.diff || 'B'} (${task.score || 2}점)</span>
                    ${task.isCarriedOver ? '<span class="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-red-100 text-red-600">이월됨</span>' : ''}
                    <span class="text-[10px] text-[#8b95a1] font-medium">상태: ${task.status}</span>
                  </div>
                  <p class="text-xs font-bold text-[#191f28]">${escapeHtml(task.title)}</p>
                </div>

                <div class="flex items-center justify-between pt-1 border-t border-[#e5e8eb]/70 text-xs">
                  <span class="text-[#6b7684] text-[11px]">담당: <strong>${currentOwner ? escapeHtml(currentOwner.name) : '미배정'}</strong></span>
                  <div class="flex items-center gap-1.5">
                    <select id="reassignSelect_${task.id}" class="text-[11px] py-1 px-2.5 rounded-xl border border-[#e5e8eb] bg-white font-medium">
                      ${members.map(m => `
                        <option value="${m.id}" ${m.id === task.memberId ? 'selected' : ''}>${escapeHtml(m.name)}</option>
                      `).join('')}
                    </select>
                    <button onclick="reassignTaskOwner('${task.id}')" class="px-2.5 py-1 bg-[#191f28] hover:bg-black text-white text-[11px] font-bold rounded-xl transition">
                      변경
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-2 pt-1">
        <button onclick="applyCarriedOverToNextDay()" class="w-full py-3.5 bg-[#3182f6] hover:bg-[#1b64da] text-white rounded-2xl text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 transition">
          <i data-lucide="calendar-plus" class="w-4 h-4"></i> 다음 날 일정에 반영 & 저장
        </button>
        <button onclick="switchScreen(2)" class="w-full py-3 bg-[#f2f4f6] hover:bg-[#e5e8eb] text-[#4e5968] rounded-2xl text-xs font-bold transition">
          오늘의 계획 화면으로 돌아가기
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// Handlers & Actions
// ----------------------------------------------------
function addMemberFromInput() {
  const nameInput = document.getElementById('newMemberName');
  const roleSelect = document.getElementById('newMemberRole');
  if (!nameInput || !nameInput.value.trim()) return;

  if (!state.members) state.members = [];

  const newMember = {
    id: 'm_' + Date.now() + Math.random().toString(36).substr(2, 4),
    name: nameInput.value.trim(),
    preferredRole: roleSelect ? roleSelect.value : '자료조사',
    avatar: ANIMAL_AVATARS[state.members.length % ANIMAL_AVATARS.length],
    colorIndex: state.members.length % 5
  };

  state.members.push(newMember);
  nameInput.value = '';
  saveState();
}

function removeMember(memberId) {
  state.members = (state.members || []).filter(m => m.id !== memberId);
  state.tasks = (state.tasks || []).map(t => t.memberId === memberId ? { ...t, memberId: null } : t);
  saveState();
}

function addTaskFromInput() {
  const titleInput = document.getElementById('newTaskTitle');
  const diffRadios = document.getElementsByName('taskDiff');
  if (!titleInput || !titleInput.value.trim()) return;

  let selectedDiff = 'B';
  diffRadios.forEach(r => { if (r.checked) selectedDiff = r.value; });

  const scoreMap = { 'A': 3, 'B': 2, 'C': 1 };
  if (!state.tasks) state.tasks = [];

  const newTask = {
    id: 't_' + Date.now() + Math.random().toString(36).substr(2, 4),
    title: titleInput.value.trim(),
    diff: selectedDiff,
    score: scoreMap[selectedDiff] || 2,
    memberId: null,
    status: '미시작',
    progress: 0,
    dayAssigned: state.currentDay || 1,
    isCarriedOver: false
  };

  state.tasks.push(newTask);
  titleInput.value = '';
  saveState();
}

function removeTask(taskId) {
  state.tasks = (state.tasks || []).filter(t => t.id !== taskId);
  saveState();
}

function generateEquallyBalancedPlan() {
  const projNameInput = document.getElementById('initProjName');
  const kakaoInput = document.getElementById('initKakaoUrl');
  const kakaoCodeInput = document.getElementById('initKakaoCode');
  const driveInput = document.getElementById('initDriveUrl');

  if (!state.project) state.project = {};
  if (projNameInput) state.project.name = projNameInput.value.trim() || '팀 프로젝트';
  if (kakaoInput) state.project.kakaoUrl = kakaoInput.value.trim();
  if (kakaoCodeInput) state.project.kakaoCode = kakaoCodeInput.value.trim();
  if (driveInput) state.project.driveUrl = driveInput.value.trim();

  if (!state.members || state.members.length === 0) {
    alert('최소 1명 이상의 팀원을 등록해 주세요.');
    return;
  }
  if (!state.tasks || state.tasks.length === 0) {
    alert('최소 1개 이상의 업무를 등록해 주세요.');
    return;
  }

  state.tasks = balanceTasksEqually(state.members, state.tasks);
  state.isInitialized = true;
  state.currentScreen = 2;
  state.activeMemberId = state.members[0].id;
  saveState();
}

function setActiveMember(memberId) {
  state.activeMemberId = memberId;
  saveState();
}

function updateTaskStatus(taskId, newStatus) {
  state.tasks = (state.tasks || []).map(t => {
    if (t.id === taskId) {
      let progress = t.progress || 0;
      if (newStatus === '완료') progress = 100;
      else if (newStatus === '미시작') progress = 0;
      else if (newStatus === '진행 중') progress = progress > 0 && progress < 100 ? progress : 50;
      return { ...t, status: newStatus, progress };
    }
    return t;
  });
  saveState();
}

function updateTaskProgress(taskId, newProgress) {
  const val = Math.min(100, Math.max(0, parseInt(newProgress, 10) || 0));
  state.tasks = (state.tasks || []).map(t => {
    if (t.id === taskId) {
      let status = t.status;
      if (val === 100) status = '완료';
      else if (val === 0) status = '미시작';
      else status = '진행 중';
      return { ...t, progress: val, status };
    }
    return t;
  });
  saveState();
}

function reassignTaskOwner(taskId) {
  const select = document.getElementById(`reassignSelect_${taskId}`);
  if (!select) return;
  const newMemberId = select.value;

  state.tasks = (state.tasks || []).map(t => {
    if (t.id === taskId) {
      return { ...t, memberId: newMemberId };
    }
    return t;
  });

  alert('담당자가 성공적으로 변경되었습니다.');
  saveState();
}

function applyCarriedOverToNextDay() {
  alert('이월 업무와 일정 재조율이 성공적으로 저장되었습니다.');
  switchScreen(2);
}

// ----------------------------------------------------
// Simulator Functions
// ----------------------------------------------------
function advanceToNextDay() {
  state.currentDay = (state.currentDay || 1) + 1;
  let carryCount = 0;

  state.tasks = (state.tasks || []).map(t => {
    if (t.status !== '완료') {
      carryCount++;
      return { ...t, isCarriedOver: true };
    }
    return t;
  });

  saveState();

  if (carryCount > 0) {
    alert(`☀️ D+${state.currentDay}일차로 이동했습니다!\n미완료된 업무 ${carryCount}건이 다음 날 일정으로 자동 이월되었습니다.`);
    switchScreen(4);
  } else {
    alert(`☀️ D+${state.currentDay}일차로 이동했습니다!`);
  }
}

function resetAllData() {
  if (confirm('모든 데이터를 초기화하고 처음 설정 화면으로 돌아가시겠습니까?')) {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('TEAMFIT_APP_STATE_V1');
      localStorage.removeItem('TEAMFIT_APP_STATE_V2');
    } catch(e) {}
    state = JSON.parse(JSON.stringify(defaultEmptyState));
    saveState();
  }
}

function loadSampleData() {
  state = getInitialSampleState();
  saveState();
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Global Exports
window.advanceToNextDay = advanceToNextDay;
window.loadSampleData = loadSampleData;
window.resetAllData = resetAllData;
window.switchScreen = switchScreen;
window.updateTaskStatus = updateTaskStatus;
window.updateTaskProgress = updateTaskProgress;
window.setActiveMember = setActiveMember;
window.generateEquallyBalancedPlan = generateEquallyBalancedPlan;
window.addMemberFromInput = addMemberFromInput;
window.removeMember = removeMember;
window.addTaskFromInput = addTaskFromInput;
window.removeTask = removeTask;
window.reassignTaskOwner = reassignTaskOwner;
window.applyCarriedOverToNextDay = applyCarriedOverToNextDay;
window.openKakaoModal = openKakaoModal;
window.closeKakaoModal = closeKakaoModal;
window.saveKakaoInfo = saveKakaoInfo;
window.copyKakaoCode = copyKakaoCode;

// Robust Multi-Stage Boot Loader
function bootApp() {
  try {
    updateHeader();
    renderApp();
  } catch (err) {
    console.error('Boot error:', err);
    const container = document.getElementById('screenContent');
    if (container) {
      container.innerHTML = `
        <div class="p-4 bg-red-50 text-red-700 rounded-2xl text-xs space-y-2 border border-red-200">
          <h3 class="font-bold">앱 초기화 오류:</h3>
          <p>${escapeHtml(err.message)}</p>
          <button onclick="resetAllData()" class="px-3 py-1.5 bg-red-600 text-white font-bold rounded-lg shadow-sm">
            데이터 초기화 후 재시작
          </button>
        </div>
      `;
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}
window.addEventListener('load', bootApp);
