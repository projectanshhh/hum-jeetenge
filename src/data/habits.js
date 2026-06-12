// ═══════════════════════════════════════════════════════
// HUM JEETENGE — Summer 120 Challenge Data Model
// ═══════════════════════════════════════════════════════

export const SEGMENTS = [
  {
    id: 'bear',
    name: 'Bear Principle',
    nameHi: 'भालू सिद्धांत',
    tagline: 'Prepare to Dominate',
    emoji: '🐻',
    color: '#ff6b35',
    colorLight: '#ff8f62',
    bg: 'rgba(255, 107, 53, 0.08)',
    border: 'rgba(255, 107, 53, 0.2)',
  },
  {
    id: 'compounding',
    name: 'Compounding',
    nameHi: 'कम्पाउंडिंग',
    tagline: 'Small Daily Gains',
    emoji: '📈',
    color: '#00d4ff',
    colorLight: '#4de0ff',
    bg: 'rgba(0, 212, 255, 0.08)',
    border: 'rgba(0, 212, 255, 0.2)',
  },
  {
    id: 'energy',
    name: 'Energy Principle',
    nameHi: 'ऊर्जा सिद्धांत',
    tagline: 'Peak Energy Matrix',
    emoji: '⚡',
    color: '#39ff14',
    colorLight: '#6fff4f',
    bg: 'rgba(57, 255, 20, 0.08)',
    border: 'rgba(57, 255, 20, 0.2)',
  },
];

export const HABITS = [
  {
    id: 0,
    name: 'Early Surgical Strike',
    subtitle: '120-Min Deep Work',
    points: 20,
    segment: 'bear',
    emoji: '⚔️',
    descHi: 'सुबह उठते ही अपनी सबसे मुश्किल पढ़ाई या काम को खतम करो',
    descEn: 'Tackle your hardest study/work first thing in the morning',
  },
  {
    id: 1,
    name: 'Cave Mode',
    subtitle: '90-Min Sensory Blackout',
    points: 15,
    segment: 'bear',
    emoji: '🦇',
    descHi: 'पूरे 90 मिनट का एक unbroken focus block बनाओ',
    descEn: 'Create one 90-minute unbroken focus block',
  },
  {
    id: 2,
    name: 'Finisher Mode',
    subtitle: '60-Min End Push',
    points: 10,
    segment: 'bear',
    emoji: '🏁',
    descHi: 'दिन के आखिरी घंटे में बचे काम खतम करो',
    descEn: 'Finish remaining work in the last hour of the day',
  },
  {
    id: 3,
    name: '10 Pages Fast Reading',
    subtitle: 'Daily Reading',
    points: 10,
    segment: 'compounding',
    emoji: '📖',
    descHi: 'Reading का compound interest ज़िंदगी भर मिलता है',
    descEn: 'Read 10 pages daily — compound interest for life',
  },
  {
    id: 4,
    name: 'Micro-Skill Blocks',
    subtitle: '30-Min Skill Practice',
    points: 10,
    segment: 'compounding',
    emoji: '🎯',
    descHi: 'रोज़ 30 min micro-skill को दो',
    descEn: 'Dedicate 30 mins daily to a micro-skill',
  },
  {
    id: 5,
    name: 'Mental Night Tracker',
    subtitle: '5-Min Diary',
    points: 5,
    segment: 'compounding',
    emoji: '🌙',
    descHi: 'सोने से पहले सिर्फ 5 मिनट डायरी में लिखना कि आज का दिन कैसा गया',
    descEn: 'Write a 5-min diary before sleeping about your day',
  },
  {
    id: 6,
    name: 'Clean Fuel',
    subtitle: 'Lunch & Dinner',
    points: 10,
    segment: 'energy',
    emoji: '🥗',
    descHi: 'गर्मी में spicy, heavy food avoid करो और easily digestible meals लो',
    descEn: 'Eat light, easily digestible meals — avoid heavy food',
  },
  {
    id: 7,
    name: 'Pre-Thirst Protocol',
    subtitle: '3.5–4L Water',
    points: 5,
    segment: 'energy',
    emoji: '💧',
    descHi: 'पानी की bottle सामने रखो',
    descEn: 'Keep water bottle visible — drink 3.5 to 4 liters',
  },
  {
    id: 8,
    name: 'Circadian Anchor',
    subtitle: 'Fixed Sleep Schedule',
    points: 10,
    segment: 'energy',
    emoji: '🛏️',
    descHi: 'रात को एक fix समय पर सोना और सुबह एक fix समय पर जागना',
    descEn: 'Sleep and wake at fixed times every day',
  },
  {
    id: 9,
    name: 'Avoid Temperature Trap',
    subtitle: 'No Cold Air Laziness',
    points: 5,
    segment: 'energy',
    emoji: '🌡️',
    descHi: 'आलस से बचने के लिए काम के समय सीधे cooler की ठंडी हवा में मत बैठो',
    descEn: "Don't sit in direct cooler air while working — avoid laziness",
  },
];

export const TOTAL_POINTS = 100;
export const TARGET_POINTS = 80;
export const TOTAL_DAYS = 120;

// Challenge start date — June 1, 2026
export const CHALLENGE_START = '2026-06-01';

// ─── Utility Functions ───────────────────────────────

export function getCurrentDay() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = new Date(CHALLENGE_START);
  start.setHours(0, 0, 0, 0);
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, Math.min(diff, TOTAL_DAYS));
}

export function calculateScore(habitBooleans) {
  return HABITS.reduce((sum, h, i) => sum + (habitBooleans[i] ? h.points : 0), 0);
}

export function getSegment(segmentId) {
  return SEGMENTS.find(s => s.id === segmentId);
}

export function getSegmentScore(habitBooleans, segmentId) {
  return HABITS.reduce((sum, h, i) => {
    if (h.segment === segmentId && habitBooleans[i]) return sum + h.points;
    return sum;
  }, 0);
}

export function getSegmentMaxScore(segmentId) {
  return HABITS.reduce((sum, h) => h.segment === segmentId ? sum + h.points : sum, 0);
}

// ─── Level System (RPG) ─────────────────────────────

export const LEVELS = [
  { level: 1, title: 'Beginner', minXP: 0, color: '#888' },
  { level: 2, title: 'Rookie', minXP: 300, color: '#4ade80' },
  { level: 3, title: 'Warrior', minXP: 800, color: '#22d3ee' },
  { level: 4, title: 'Elite', minXP: 1500, color: '#a78bfa' },
  { level: 5, title: 'Champion', minXP: 2500, color: '#f59e0b' },
  { level: 6, title: 'Master', minXP: 3500, color: '#ff6b35' },
  { level: 7, title: 'Legend', minXP: 4500, color: '#ef4444' },
  { level: 8, title: 'Sigma', minXP: 5500, color: '#f5c518' },
];

export function getLevel(totalXP) {
  let current = LEVELS[0];
  for (const l of LEVELS) {
    if (totalXP >= l.minXP) current = l;
  }
  const nextLevel = LEVELS.find(l => l.minXP > totalXP) || current;
  const progress = nextLevel === current
    ? 1
    : (totalXP - current.minXP) / (nextLevel.minXP - current.minXP);
  return { ...current, nextLevel, progress };
}

// ─── Data Persistence ────────────────────────────────

const STORAGE_KEY = 'hum-jeetenge-60';
const BACKUP_KEY = 'hum-jeetenge-60-backup';

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const state = JSON.parse(raw);
      // Validate basic structure
      if (state && typeof state === 'object' && state.days) {
        return state;
      }
    }
  } catch (e) {
    console.error('[HJ] Error loading state, trying backup:', e);
    try {
      const backup = localStorage.getItem(BACKUP_KEY);
      if (backup) {
        const state = JSON.parse(backup);
        localStorage.setItem(STORAGE_KEY, backup);
        return state;
      }
    } catch (e2) {
      console.error('[HJ] Backup also failed:', e2);
    }
  }
  // Return fresh state
  return createFreshState();
}

export function saveState(state) {
  try {
    // Backup current state before overwriting
    const current = localStorage.getItem(STORAGE_KEY);
    if (current) {
      localStorage.setItem(BACKUP_KEY, current);
    }
    state.lastSaved = new Date().toISOString();
    const json = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, json);
    // Dispatch event so other components know
    window.dispatchEvent(new CustomEvent('hj-state-updated', { detail: state }));
    return true;
  } catch (e) {
    console.error('[HJ] Error saving state:', e);
    return false;
  }
}

export function createFreshState() {
  return {
    startDate: CHALLENGE_START,
    userName: '',
    days: {},
    streak: { current: 0, best: 0 },
    lastSaved: new Date().toISOString(),
    version: 1,
  };
}

export function getDayData(state, dayNum) {
  return state.days[dayNum] || { habits: new Array(10).fill(false), score: 0, journal: '', timestamp: null };
}

export function setDayData(state, dayNum, dayData) {
  dayData.score = calculateScore(dayData.habits);
  dayData.timestamp = new Date().toISOString();
  state.days[dayNum] = dayData;
  // Recalculate streak
  recalcStreak(state);
  return state;
}

export function recalcStreak(state) {
  const today = getCurrentDay();
  let current = 0;
  let best = state.streak?.best || 0;
  
  // If today hasn't reached the target yet, the streak is maintained from yesterday
  const todayData = state.days[today];
  const todayReached = todayData && todayData.score >= TARGET_POINTS;
  const startDay = todayReached ? today : today - 1;

  // Count backwards
  for (let d = startDay; d >= 1; d--) {
    const day = state.days[d];
    if (day && day.score >= TARGET_POINTS) {
      current++;
    } else {
      break;
    }
  }

  best = Math.max(best, current);
  state.streak = { current, best };
}

export function getTotalXP(state) {
  let total = 0;
  for (const key of Object.keys(state.days)) {
    total += state.days[key].score || 0;
  }
  return total;
}

export function getCompletedDays(state) {
  return Object.keys(state.days).filter(k => state.days[k].score >= TARGET_POINTS).length;
}

export function getAverageScore(state) {
  const days = Object.values(state.days).filter(d => d.score > 0);
  if (days.length === 0) return 0;
  return Math.round(days.reduce((s, d) => s + d.score, 0) / days.length);
}

// ─── Export / Import (Backup) ────────────────────────

export function exportData() {
  const state = loadState();
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `hum-jeetenge-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importData(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const state = JSON.parse(e.target.result);
        if (state && state.days) {
          saveState(state);
          resolve(state);
        } else {
          reject(new Error('Invalid backup file'));
        }
      } catch (err) {
        reject(err);
      }
    };
    reader.readAsText(file);
  });
}

// ─── Motivational Quotes ─────────────────────────────

export const QUOTES = [
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln" },
  { text: "जब तक सफल ना हो जाओ, सोना हराम कर दो अपना।", author: "Hum Jeetenge" },
  { text: "The pain of discipline is nothing like the pain of disappointment.", author: "Justin Langer" },
  { text: "मेहनत इतनी खामोशी से करो कि सफलता शोर मचा दे।", author: "" },
  { text: "Champions do not become champions when they win the event, but in the hours, weeks, months and years they spend preparing for it.", author: "T. Alan Armstrong" },
  { text: "छोटे-छोटे कदम ही बड़ी मंज़िलों तक पहुँचाते हैं।", author: "" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "आज का दर्द, कल की ताक़त बनेगा।", author: "Hum Jeetenge" },
  { text: "Success isn't always about greatness. It's about consistency.", author: "Dwayne Johnson" },
  { text: "जो आज comfort zone में हैं, वो कल regret zone में होंगे।", author: "" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "120 दिन बाद तुम्हें खुद पर गर्व होगा। बस रुकना मत।", author: "Hum Jeetenge" },
];

export function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

export function getDailyQuote() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  return QUOTES[dayOfYear % QUOTES.length];
}
