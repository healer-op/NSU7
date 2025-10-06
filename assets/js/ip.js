async function fetchAndShowIP() {
  const out = document.getElementById('healer');
  if (!out) {
    console.error('Element with id="heler" not found in DOM.');
    alert('Element with id="heler" not found.');
    return;
  }

  out.textContent = 'Fetching...';

  try {
    const resp = await fetch('https://wtfismyip.com/json', { cache: 'no-store' });
    if (!resp.ok) {
      throw new Error('Network response not ok: ' + resp.status + ' ' + resp.statusText);
    }

    const data = await resp.json();

    // If JSON empty or missing main keys, show "entry not found" behavior
    if (!data || Object.keys(data).length === 0) {
      out.textContent = 'Entry not found in JSON.';
      alert('Entry not found in JSON.');
      return;
    }

    out.innerHTML = `Teri IP: ${data.YourFuckingIPAddress} , Location: ${data.YourFuckingLocation} , Tera Internet Provider: ${data.YourFuckingISP} | Aage Maze Nikal Ab`
  } catch (err) {
    console.error(err);
    // Many fetch failures here will be due to CORS if the server doesn't allow cross-origin requests.
    out.textContent = 'Failed to fetch IP info. See console for details.';
    alert('Failed to fetch IP info (check console). If this is a CORS issue, see the note below.');
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

fetchAndShowIP()
// Optionally auto-run on load:

