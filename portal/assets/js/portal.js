/**
 * RIHANNA SIGNATURE SAFARI - ATELIER PORTAL JS
 * Modern Admin Interactions & Dynamic Tools
 */

(function() {
  'use strict';

  // 1. Mobile Sidebar Toggle
  const toggleBtn = document.getElementById('btn-portal-mobile-toggle');
  const sidebar = document.getElementById('portal-sidebar');
  const backdrop = document.getElementById('portal-backdrop');

  if (toggleBtn && sidebar && backdrop) {
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      sidebar.classList.toggle('show');
      backdrop.classList.toggle('show');
    });

    backdrop.addEventListener('click', function() {
      sidebar.classList.remove('show');
      backdrop.classList.remove('show');
    });
  }

  // 2. Live EAT Clock (UTC+3)
  const clockEl = document.getElementById('portal-live-clock-val');
  if (clockEl) {
    function updateClock() {
      const now = new Date();
      // Format to East Africa Time (Africa/Nairobi or Dar es Salaam)
      const options = {
        timeZone: 'Africa/Dar_es_Salaam',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      clockEl.textContent = now.toLocaleTimeString('en-GB', options) + ' EAT';
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // 3. Quick Table Live Search Filter
  const tableSearchInput = document.getElementById('portal-table-search');
  if (tableSearchInput) {
    tableSearchInput.addEventListener('input', function() {
      const term = this.value.toLowerCase().trim();
      const rows = document.querySelectorAll('.portal-table tbody tr');
      rows.forEach(function(row) {
        const text = row.textContent.toLowerCase();
        if (text.includes(term)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }

  // 4. Auto Slug Generator for Article Title
  const titleInput = document.getElementById('article-title');
  const slugInput = document.getElementById('article-slug');
  if (titleInput && slugInput) {
    titleInput.addEventListener('input', function() {
      if (!slugInput.dataset.manualEdit) {
        const title = this.value;
        const slug = title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');
        slugInput.value = slug;
      }
    });

    slugInput.addEventListener('input', function() {
      this.dataset.manualEdit = 'true';
    });
  }

  // 5. Quick AJAX Inquiry Status Change
  document.querySelectorAll('.select-inquiry-status').forEach(function(select) {
    select.addEventListener('change', function() {
      const inqId = this.dataset.inquiryId;
      const newStatus = this.value;
      const row = this.closest('tr');

      fetch('api/inquiry-status.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'id=' + encodeURIComponent(inqId) + '&status=' + encodeURIComponent(newStatus)
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          if (row) {
            row.style.transition = 'background-color 0.3s ease';
            row.style.backgroundColor = 'rgba(200, 150, 62, 0.15)';
            setTimeout(() => {
              row.style.backgroundColor = '';
            }, 800);
          }
        } else {
          alert('Could not update status: ' + (data.message || 'Error'));
        }
      })
      .catch(err => {
        console.error('Status update failed', err);
      });
    });
  });

  // 6. Simple Editor Formatting Shortcuts
  document.querySelectorAll('[data-editor-action]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const action = this.dataset.editorAction;
      const textarea = document.getElementById('article-content');
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const selected = text.substring(start, end);

      let replacement = '';
      switch (action) {
        case 'h2':
          replacement = `\n<h2>${selected || 'Section Heading'}</h2>\n`;
          break;
        case 'h3':
          replacement = `\n<h3>${selected || 'Sub-heading'}</h3>\n`;
          break;
        case 'bold':
          replacement = `<strong>${selected || 'bold text'}</strong>`;
          break;
        case 'italic':
          replacement = `<em>${selected || 'italic text'}</em>`;
          break;
        case 'quote':
          replacement = `\n<blockquote>"${selected || 'Safari quote'}" – Redempotius Nalisis</blockquote>\n`;
          break;
        case 'list':
          replacement = `\n<ul>\n  <li>${selected || 'List item'}</li>\n  <li>Second item</li>\n</ul>\n`;
          break;
        case 'p':
          replacement = `\n<p>${selected || 'Paragraph text'}</p>\n`;
          break;
      }

      textarea.value = text.substring(0, start) + replacement + text.substring(end);
      textarea.focus();
    });
  });

})();
