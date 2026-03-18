// ────────────────────────────────────────────────
// External narratives (loaded once)
let narratives = {};

async function loadNarratives() {
  try {
    const response = await fetch('./descriptions/descriptions.json');  // adjust path if needed
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    narratives = await response.json();
    console.log('Narratives loaded');
  } catch (err) {
    console.error('Failed to load narratives.json:', err);
  }
}


loadNarratives();

function createNarrativePopup(currentFeature, currentFeatureKeys, layer) {
    var popupText = '';
    var narrativeText = narratives[currentFeature.get('fid')] || 'No narrative available for this feature.';
    popupText += '<tr> <div id="ntext">' + marked.parse(narrativeText) + '</div> </tr>';
    return popupText;
}

// Enhance popups with "More..." toggle for long narrative text
function addMoreToggle() {
  document.querySelectorAll('#narrative').forEach(function(content) {
    // Target the narrative text container (adjust selector if needed)
    var narrative = content.querySelector('#ntext'); // or more specific: content.innerHTML.match(/narrative/i)
    if (!narrative) return;

    var fullText = narrative.innerHTML.trim();
    if (fullText.indexOf("<!--more-->") < 0) return; // Skip short text

    var shortText = fullText.substring(0, fullText.indexOf("<!--more-->"));

    // Replace with truncated + link
    narrative.innerHTML = shortText + 
      ' <a href="#" class="more-toggle" style="color:#2980b9; cursor:pointer; text-decoration:underline;">More...</a>';

    // Toggle handler
	content.addEventListener('click', function(e) {
      if (e.target.classList.contains('more-toggle')) {
        e.preventDefault();
        if (e.target.textContent === 'More...') {
          narrative.innerHTML = fullText + 
            ' <a href="#" class="more-toggle">Less</a>';
        } else {
          narrative.innerHTML = shortText + 
            ' <a href="#" class="more-toggle">More...</a>';
        }
      }
    });
  });
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
