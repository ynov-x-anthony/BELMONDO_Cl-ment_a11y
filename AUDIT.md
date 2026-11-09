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

  Le point qui fait baisser le score Accessibilité : « Background and foreground
  colors do not have a sufficient contrast ratio », sur le sous-titre, les deux
  labels, l'astuce et le bouton.
- **axe DevTools** (extension Chrome) : violation `color-contrast`, impact
  **serious**, sur les 5 éléments ci-dessus (`.subtitle`, 2 × `.label`, `.hint`,
  `.btn-primary`). Aucune violation critical.
- **WAVE** (https://wave.webaim.org/, ou l'extension) : 0 erreur de structure,
  mais des **Contrast Errors** affichées directement sur le sous-titre, les
  labels, l'astuce et le bouton.

## 2. Les éléments à corriger

Mesures avant correction (fond `#ffffff` pour les textes) :

| Élément | Couleur texte | Couleur fond | Ratio mesuré | Ratio AA requis | Conforme ? |
|---------|---------------|--------------|--------------|------------------|------------|
| `.subtitle` | `#aaaaaa` | `#ffffff` | 2.32:1 | 4.5:1 | ❌ |
| `.label` | `#999999` | `#ffffff` | 2.85:1 | 4.5:1 | ❌ |
| `.hint` | `#bbbbbb` | `#ffffff` | 1.92:1 | 4.5:1 | ❌ |
| `.btn-primary` | `#ffffff` | `#6fa8dc` | 2.53:1 | 4.5:1 (texte) | ❌ |

Après correction dans `src/App.css` (mêmes teintes, juste plus soutenues) :

| Élément | Couleur texte | Couleur fond | Ratio mesuré | Ratio AA requis | Conforme ? |
|---------|---------------|--------------|--------------|------------------|------------|
| `.subtitle` | `#595959` | `#ffffff` | 7.00:1 | 4.5:1 | ✅ |
| `.label` | `#666666` | `#ffffff` | 5.74:1 | 4.5:1 | ✅ |
| `.hint` | `#6b6b6b` | `#ffffff` | 5.33:1 | 4.5:1 | ✅ |
| `.btn-primary` | `#ffffff` | `#2b6cb0` | 5.42:1 | 4.5:1 (texte) | ✅ |

> Utilise un vérificateur de contraste (ex. le picker de couleur de Chrome
> DevTools affiche déjà le ratio AA/AAA quand tu modifies une couleur).

## 3. Priorisation

1. **`.btn-primary`** : c'est le seul élément interactif, et l'action principale
   de la page (« Gérer mon abonnement »). Si on ne peut pas lire le bouton, on
   ne peut pas faire la tâche.
2. **`.hint`** : le pire ratio (1.92:1), presque invisible. Il contient une
   information utile (vérifier la facturation avant le renouvellement).
3. **`.label`** : il donne le sens des valeurs (« Statut de l'abonnement »).
   Sans lui, « Actif jusqu'au 12 décembre 2026 » perd son contexte. Il est en
   plus en petite taille (.85rem), donc encore moins lisible.
4. **`.subtitle`** : texte d'introduction, utile mais pas indispensable pour
   utiliser la page.
