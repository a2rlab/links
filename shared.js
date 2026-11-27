// Shared by index.html and admin.html
window.A2R = {
  // Tile palette: background, title text, description text (same in light and dark themes)
  COLORS: {
    mint:     ['#9FE1CB', '#04342C', '#0F6E56'],
    peach:    ['#F5C4B3', '#4A1B0C', '#993C1D'],
    lavender: ['#CECBF6', '#26215C', '#534AB7'],
    amber:    ['#FAC775', '#412402', '#854F0B'],
    pink:     ['#F4C0D1', '#4B1528', '#993556'],
    sky:      ['#B5D4F4', '#042C53', '#185FA5'],
    lime:     ['#C0DD97', '#173404', '#3B6D11'],
    sand:     ['#D3D1C7', '#2C2C2A', '#5F5E5A']
  },
  ICONS: ['box','calendar','shield-check','printer','users','coffee','device-tv','battery-charging','bookmarks',
    'robot','cpu','tool','clipboard-list','file-text','forms','school','flask','microscope','car','drone',
    'map-pin','link','world','brand-youtube','brand-github','brand-instagram','brand-linkedin','mail','brand-facebook','brand-x'],
  esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },
  safeUrl(u) {
    u = String(u || '').trim();
    return /^(https?:|mailto:|tel:)/i.test(u) ? u : '#';
  },
  iconFor(l) {
    if (l.icon) return l.icon;
    const u = (l.url || '').toLowerCase();
    if (u.startsWith('mailto:')) return 'mail';
    if (u.includes('instagram.com')) return 'brand-instagram';
    if (u.includes('linkedin.com')) return 'brand-linkedin';
    if (u.includes('youtube.com') || u.includes('youtu.be')) return 'brand-youtube';
    if (u.includes('github')) return 'brand-github';
    if (u.includes('facebook.com')) return 'brand-facebook';
    return 'link';
  },
  youtubeId(u) {
    const m = String(u || '').match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
    return m ? m[1] : '';
  },
  color(key) { return this.COLORS[key] || this.COLORS.sand; }
};
