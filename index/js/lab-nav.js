(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var publicationFilter = document.querySelector('.publication-filter');

  if (publicationFilter) {
    var publicationCategoryLabels = {
      'human-centered-ai': 'Human-centered AI',
      'human-behavior-modeling': 'Human behavior modeling',
      'eye-tracking': 'Eye tracking',
      'virtual-and-augmented-reality': 'Virtual and augmented reality',
      'human-computer-interaction': 'Human-computer interaction',
      'human-ai-interaction': 'Human-AI interaction'
    };
    var filterButtons = Array.prototype.slice.call(publicationFilter.querySelectorAll('[data-filter]'));
    var publicationCards = Array.prototype.slice.call(document.querySelectorAll('.publication-list .project-card[data-category]'));
    var publicationGroups = Array.prototype.slice.call(document.querySelectorAll('.publication-group'));

    function getPublicationCategories(card) {
      return (card.getAttribute('data-category') || '')
        .split(/[\s,]+/)
        .filter(function (category, index, categories) {
          return category && categories.indexOf(category) === index;
        })
        .slice(0, 2);
    }

    document.querySelectorAll('.publication-list').forEach(function (list) {
      Array.prototype.slice.call(list.querySelectorAll('.project-card[data-category]')).forEach(function (card, index) {
        card.style.setProperty('--reveal-delay', String((index % 6) * 60) + 'ms');
      });
    });

    publicationCards.forEach(function (card) {
      var categories = getPublicationCategories(card);
      var body = card.querySelector('.project-card__body');
      var venue = card.querySelector('.project-card__venue');
      var awardRow = card.querySelector('.project-card__award-row');
      var existingTags = card.querySelector('.publication-tags');
      var tags = existingTags || document.createElement('div');

      tags.className = 'publication-tags';
      tags.innerHTML = '';
      card.classList.toggle('has-multiple-publication-tags', categories.length > 1);

      categories.forEach(function (category) {
        var tag = document.createElement('span');
        tag.className = 'publication-tag';
        tag.textContent = publicationCategoryLabels[category] || category;
        tags.appendChild(tag);
      });

      if (!existingTags && body) {
        body.insertBefore(tags, awardRow ? awardRow.nextSibling : (venue ? venue.nextSibling : body.firstChild));
      }
    });

    function applyPublicationFilter(filter) {
      filterButtons.forEach(function (button) {
        var active = button.getAttribute('data-filter') === filter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      publicationCards.forEach(function (card) {
        var matches = filter === 'all' || getPublicationCategories(card).indexOf(filter) !== -1;
        card.classList.toggle('is-filtered-out', !matches);
      });

      publicationGroups.forEach(function (group) {
        var visibleCards = group.querySelectorAll('.project-card[data-category]:not(.is-filtered-out)');
        var count = visibleCards.length;
        var countBadge = group.querySelector('.publication-group__count');

        group.classList.toggle('is-filtered-out', count === 0);

        if (countBadge) {
          countBadge.textContent = String(count);
        }
      });
    }

    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        applyPublicationFilter(button.getAttribute('data-filter'));
      });
    });

    applyPublicationFilter('all');
  }

  var revealItems = document.querySelectorAll('.reveal');

  if (!revealItems.length) {
    return;
  }

  document.documentElement.classList.add('reveal-enabled');

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px'
  });

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
})();
