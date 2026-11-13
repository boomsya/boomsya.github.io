const languageSelect = document.querySelector('#screenshot-language');
const screenshots = document.querySelectorAll('#screenshot-gallery a');

function showScreenshots() {
  const language = languageSelect.value;
  for (const screenshot of screenshots) {
    const url = `/screenshots/${language}-${screenshot.dataset.file}`;
    if (screenshot.getAttribute('href') === url) continue;
    screenshot.href = url;
    screenshot.querySelector('img').src = url;
  }
}

languageSelect.addEventListener('change', showScreenshots);
window.addEventListener('pageshow', showScreenshots);
showScreenshots();
languageSelect.closest('.gallery-language').hidden = false;
