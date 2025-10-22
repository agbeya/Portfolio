# Portfolio - Agbonon Edagbedji (Yao Anicet)

Projet React + Tailwind + Vite + Firebase.

## Installation locale

```bash
npm install
npm run dev
```

## Build & déploiement Firebase

```bash
npm run build
firebase deploy --only hosting
```
## Déploiement Firebase
### 1. Vérifier/installer Firebase CLI
```bash
firebase --version || npm install -g firebase-tools
```

### 2. Se connecter
```bash
firebase login
```

### 3. Lister et sélectionner le bon projet
```bash
firebase projects:list
firebase use yao-anicet
```

### 4. Initialiser Firebase Hosting (si besoin)
```bash
firebase init hosting
```

### 5. Builder le site
```bash
npm run build
```

### 6. Déployer
```bash
firebase deploy --only hosting
```

## Auteur
Agbonon Edagbedji Yao Anicet
