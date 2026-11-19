// 官網班表：伺服器端（建置時）與瀏覽器端共用的顯示程式
const WEEKDAYS = ['一', '二', '三', '四', '五', '六', '日'];

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function monthLabel(month) {
  const [y, m] = String(month).split('-');
  return `${y}年${Number(m)}月`;
}

export function taipeiMonth(offset = 0) {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit' }).formatToParts(new Date());
  let y = Number(parts.find((p) => p.type === 'year').value);
  let m = Number(parts.find((p) => p.type === 'month').value) + offset;
  while (m > 12) { m -= 12; y += 1; }
  return `${y}-${String(m).padStart(2, '0')}`;
}

export function renderScheduleTable(schedule, doctorDept, deptColors) {
  const legend = Object.entries(deptColors)
    .map(([dept, color]) => `<span class="sch-legend-item"><i style="background:${color}"></i>${esc(dept)}</span>`)
    .join('');
  const head = WEEKDAYS.map((d, i) => `<th scope="col" class="${i >= 5 ? 'sch-weekend' : ''}">${d}</th>`).join('');
  const rows = (schedule.slots || []).map((slot) => {
    const cells = WEEKDAYS.map((d, i) => {
      const names = (slot.days?.[i] || []).filter(Boolean);
      if (!names.length) return `<td class="sch-closed" data-day="週${d}"><span>休診</span></td>`;
      const list = names
        .map((n) => `<li style="color:${deptColors[doctorDept[n]] || 'inherit'}">${esc(n)}</li>`)
        .join('');
      return `<td data-day="週${d}"><ul>${list}</ul></td>`;
    }).join('');
    return `<tr><th scope="row" class="sch-time">${esc(slot.time)}</th>${cells}</tr>`;
  }).join('');
  const notices = (schedule.notices || []).filter((n) => String(n).trim());
  const noticeHtml = notices.length
    ? `<ul class="sch-notices">${notices.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>`
    : '';
  return `
    <div class="sch-head">
      <h3 class="sch-title">${esc(monthLabel(schedule.month))}醫師班表</h3>
      <div class="sch-legend">${legend}</div>
    </div>
    <div class="sch-scroll">
      <table class="sch-table">
        <thead><tr><th scope="col" class="sch-corner">時段</th>${head}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    ${noticeHtml}`;
}

// 把 Firestore REST API 的欄位格式轉成一般物件
export function fromFirestore(value) {
  if (!value || typeof value !== 'object') return value;
  if ('stringValue' in value) return value.stringValue;
  if ('integerValue' in value) return Number(value.integerValue);
  if ('doubleValue' in value) return value.doubleValue;
  if ('booleanValue' in value) return value.booleanValue;
  if ('timestampValue' in value) return value.timestampValue;
  if ('nullValue' in value) return null;
  if ('arrayValue' in value) return (value.arrayValue.values || []).map(fromFirestore);
  if ('mapValue' in value) return fromFields(value.mapValue.fields || {});
  return null;
}

export function fromFields(fields) {
  return Object.fromEntries(Object.entries(fields || {}).map(([k, v]) => [k, fromFirestore(v)]));
}

// Firestore 不能直接存「陣列裡的陣列」，所以每格醫師名單存成 { names: [...] }
export function normalizeSchedule(doc, month) {
  if (!doc) return null;
  return {
    month,
    published: doc.published !== false,
    notices: doc.notices || [],
    slots: (doc.slots || []).map((s) => ({
      time: s.time || '',
      days: (s.days || []).map((d) => (Array.isArray(d) ? d : d?.names || [])),
    })),
  };
}
