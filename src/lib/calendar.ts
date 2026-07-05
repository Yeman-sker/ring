/** GitHub-contribution-style calendar data for a given year. */
export interface CalendarDay {
  date: string;    // YYYY-MM-DD
  count: number;   // number of posts on this day
  level: 0 | 1 | 2 | 3 | 4;  // activity level (0=none, 4=most)
}

export interface CalendarMonth {
  index: number;   // 0-11
  label: string;   // e.g. "Jan"
  startWeek: number; // which week column this month starts in
}

export interface CalendarWeek {
  days: (CalendarDay | null)[];  // 7 entries, Mon-Sun, null = outside year
}

export interface CalendarData {
  year: number;
  weeks: CalendarWeek[];
  months: CalendarMonth[];
  totalPosts: number;
}

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Build calendar data for a year from an array of post dates.
 */
export function buildCalendar(
  year: number,
  postDates: Date[],
): CalendarData {
  // Initialise day counts for every day of the year
  const dayCounts = new Map<string, number>();
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);

  // Walk every day so null cells are accurate
  const allDays: { date: Date; key: string }[] = [];
  const cursor = new Date(startDate);
  while (cursor <= endDate) {
    const key = formatDate(cursor);
    allDays.push({ date: new Date(cursor), key });
    dayCounts.set(key, 0);
    cursor.setDate(cursor.getDate() + 1);
  }

  // Count posts
  for (const d of postDates) {
    const key = formatDate(d);
    if (dayCounts.has(key)) {
      dayCounts.set(key, (dayCounts.get(key) ?? 0) + 1);
    }
  }

  // Determine levels based on max count
  const counts = Array.from(dayCounts.values());
  const maxCount = Math.max(...counts, 1);

  // Build weeks: Monday-based
  // Find the first Monday on or before Jan 1
  const firstDay = new Date(startDate);
  const dayOfWeek = firstDay.getDay(); // 0=Sun
  // We want Monday as first day: adjust
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Monday offset
  firstDay.setDate(firstDay.getDate() + diff);

  const weeks: CalendarWeek[] = [];
  const current = new Date(firstDay);
  let week: (CalendarDay | null)[] = [];

  // Track months for header
  const monthSet = new Set<number>();
  let weekIndex = 0;

  while (current <= endDate || week.length > 0) {
    const key = formatDate(current);
    const count = dayCounts.get(key);

    if (current.getFullYear() === year) {
      const day: CalendarDay = {
        date: key,
        count: count ?? 0,
        level: getLevel(count ?? 0, maxCount),
      };
      week.push(day);
      if (current.getDate() === 1) {
        monthSet.add(weekIndex);
      }
    } else if (current < startDate) {
      week.push(null); // before year start
    } else if (current > endDate && week.length > 0) {
      week.push(null); // fill remaining week after year end
    }

    if (week.length === 7) {
      weeks.push({ days: week });
      week = [];
      weekIndex++;
    }

    current.setDate(current.getDate() + 1);
  }

  // Build month labels
  const months: CalendarMonth[] = [];
  let col = 0;
  for (const w of weeks) {
    const firstOfMonth = w.days.find((d) => d && d.date.endsWith('-01'));
    if (firstOfMonth) {
      const m = parseInt(firstOfMonth.date.split('-')[1], 10) - 1;
      months.push({ index: m, label: MONTH_LABELS[m], startWeek: col });
    }
    col++;
  }

  const totalPosts = Array.from(dayCounts.values()).reduce((a, b) => a + b, 0);

  return { year, weeks, months, totalPosts };
}

function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getLevel(count: number, maxCount: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  const ratio = count / maxCount;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}
