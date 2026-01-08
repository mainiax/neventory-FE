(() => {
  try {
    const stored = localStorage.getItem('theme'); // 'dark' | 'light' | null
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldUseDark = stored ? stored === 'dark' : prefersDark;

    const root = document.documentElement;
    if (shouldUseDark) root.classList.add('dark');
    else root.classList.remove('dark');

    // Optional: persist default so next load is deterministic
    if (!stored) localStorage.setItem('theme', shouldUseDark ? 'dark' : 'light');
  } catch {
    // If storage is blocked, fallback to system preference only
    try {
      const prefersDark =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', !!prefersDark);
    } catch {}
  }
})();
