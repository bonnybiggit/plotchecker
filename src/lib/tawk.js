let initialized = false;
let ready = false;
let pendingOpen = false;

export function initializeTawk() {
  if (initialized) return;
  initialized = true;

  const api = window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  // Keep the mobile launcher above the bottom navigation and device safe area.
  const inset = document.createElement('div');
  inset.style.paddingBottom = 'env(safe-area-inset-bottom, 0px)';
  document.body.appendChild(inset);
  const safeBottom = parseFloat(window.getComputedStyle(inset).paddingBottom) || 0;
  inset.remove();

  api.customStyle = {
    visibility: {
      desktop: { position: 'br', xOffset: 24, yOffset: 24 },
      mobile: { position: 'br', xOffset: 16, yOffset: 96 + safeBottom },
    },
  };
  const previousOnLoad = api.onLoad;
  api.onLoad = function () {
    ready = true;
    previousOnLoad?.call(api);
    if (pendingOpen) {
      pendingOpen = false;
      api.maximize();
    }
  };

  const script = document.createElement('script');
  script.id = 'tawk-embed';
  script.async = true;
  script.src = 'https://embed.tawk.to/69f626940e006d1c3cb11508/1jnkoddfg';
  script.charset = 'UTF-8';
  script.crossOrigin = 'anonymous';
  script.onerror = () => {
    script.remove();
    initialized = false;
  };
  document.head.appendChild(script);
}

export function openAgentChat() {
  if (ready && typeof window.Tawk_API?.maximize === 'function') {
    window.Tawk_API.maximize();
    return;
  }
  pendingOpen = true;
  initializeTawk();
}
