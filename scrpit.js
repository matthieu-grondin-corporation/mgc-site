// =============================================
// 1️⃣ ANIMATIONS GLOBALES (Reveal au scroll)
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  // Observer pour les animations .reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target); // Optimisation : on désactive après l'animation
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Déclenche l'animation avant que l'élément soit visible
  });

  // Applique l'observer à tous les éléments .reveal
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // =============================================
  // 2️⃣ MENU MOBILE (si non géré)
  // =============================================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Fermeture du menu mobile quand on clique sur un lien
  const navLinks = document.querySelectorAll('#mobileMenu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // =============================================
  // 3️⃣ EFFETS HOVER SUR LES CARTES ET BOUTONS
  // =============================================
  // Cartes (pillar-card, profil-card, trait-card)
  document.querySelectorAll('.pillar-card, .profil-card, .trait-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });
  });

  // Boutons (btn-primary, btn-outline, etc.)
  document.querySelectorAll('.btn-primary, .btn-tarif, .btn-nav').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-2px)';
      btn.style.boxShadow = '0 5px 15px rgba(201, 169, 110, 0.3)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)';
      btn.style.boxShadow = 'none';
    });
  });

  // =============================================
  // 4️⃣ GESTION DES ONGLETS POUR LES SECTIONS LÉGALES (OPTIONNEL)
  // =============================================
  // Si tu veux une navigation entre CGV/Mentions légales/RGPD
  const legalTabs = document.querySelectorAll('.legal-tab');
  const legalSections = document.querySelectorAll('.legal-section');

  if (legalTabs.length > 0 && legalSections.length > 0) {
    legalTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Désactive tous les onglets
        legalTabs.forEach(t => t.classList.remove('active'));
        // Active l'onglet cliqué
        tab.classList.add('active');

        // Cache toutes les sections légales
        legalSections.forEach(section => {
          section.style.display = 'none';
        });

        // Affiche la section correspondante
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'block';
      });
    });
  }
});