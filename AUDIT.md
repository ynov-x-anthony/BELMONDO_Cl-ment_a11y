# AUDIT.md : à compléter

## 1. Audits outillés

Lance les 3 audits sur la page (`npm run dev`, puis ouvre-la dans Chrome) et
colle ici un résumé de ce que chacun remonte :

- **Lighthouse** (DevTools → onglet Lighthouse → catégorie Accessibility) :
Scores Globaux
Performances : 94 / 100 (Excellent, chargement très rapide : FCP à 0,9 s et LCP à 1,4 s).

Accessibilité : 86 / 100 (Très bon, mais quelques améliorations à prévoir).

Bonnes pratiques : 100 / 100 (Parfait).

SEO : 82 / 100 (Correct, mais des erreurs bloquantes pour les moteurs de recherche).

- **axe DevTools** (extension Chrome) :
- **WAVE** (https://wave.webaim.org/, ou l'extension) :

## 2. Les éléments à corriger

| Élément | Couleur texte | Couleur fond | Ratio mesuré | Ratio AA requis | Conforme ? |
|---------|---------------|--------------|--------------|------------------|------------|
| `.subtitle` | | | | 4.5:1 | |
| `.label` | | | | 4.5:1 | |
| `.hint` | | | | 4.5:1 | |
| `.btn-primary` | | | | 4.5:1 (texte) | |

> Utilise un vérificateur de contraste (ex. le picker de couleur de Chrome
> DevTools affiche déjà le ratio AA/AAA quand tu modifies une couleur).

## 3. Priorisation

Classe les 4 corrections par ordre d'impact (1 = le plus urgent) et explique pourquoi.
