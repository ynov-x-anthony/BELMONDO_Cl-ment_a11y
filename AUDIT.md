# AUDIT.md : à compléter

Pour chaque ligne, retrouve le problème correspondant dans `src/App.tsx` / `src/App.css`
et remplis les 3 colonnes. Il y a **6 problèmes volontaires** dans ce starter.

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui |
|---|------------------------------|-------------------------------|----------------------------------------|
| 1 | <img src="/hero.jpg" /> | P | L'image n'a pas de texte alternatif, ce qui empêche les utilisateurs de lecteurs d'écran de comprendre son contenu. |
| 2 | <h1>NewsHub</h1> | O | Le titre n'est pas structuré comme un en-tête, ce qui empêche les utilisateurs de naviguer efficacement dans la page. |
| 3 | <button>Click me</button> | O | Le bouton n'a pas de texte de description, ce qui empêche les utilisateurs de comprendre son action. |
| 4 | <a href="/about">About</a> | U | Le lien n'a pas de texte de description, ce qui empêche les utilisateurs de comprendre son objectif. |
| 5 | <input type="text" placeholder="Enter your name" /> | U | Le champ de saisie n'a pas d'étiquette, ce qui empêche les utilisateurs de comprendre son objectif. |
| 6 | <div role="button">Click me</div> | O | Le div n'est pas un bouton accessible, ce qui empêche les utilisateurs de naviguer efficacement dans la page. |

> Rappel : P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.
