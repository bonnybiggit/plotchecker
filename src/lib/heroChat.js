// The widget URL is preserved from reference/index.html.
const widgetUrl = "https://embed.tawk.to/69f626940e006d1c3cb11508/1jnkoddfg";

export function openHeroChat() {
  if (typeof window.openTawkChat === "function") {
    window.openTawkChat();
    return;
  }
  const api = window.Tawk_API = window.Tawk_API || {};
  if (typeof api.maximize === "function") {
    api.maximize();
    return;
  }
  if (document.getElementById("plotchecker-hero-chat")) return;
  const previousOnLoad = api.onLoad;
  api.onLoad = function () {
    previousOnLoad?.call(api);
    api.maximize?.();
  };
  window.Tawk_LoadStart = new Date();
  const script = document.createElement("script");
  script.id = "plotchecker-hero-chat";
  script.async = true;
  script.src = widgetUrl;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  // Allow a later click to retry if the widget could not load.
  script.onerror = () => script.remove();
  document.head.appendChild(script);
}
