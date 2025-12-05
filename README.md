# Statscore Coding Challenge

Projekt rozwiązujący zadanie coding challenge dla Statscore - przetwarzanie i formatowanie danych meczów sportowych.

## Instalacja

```bash
npm install
```

## Uruchomienie

### Tryb deweloperski
```bash
npm run dev
```

### Build i uruchomienie produkcyjne
```bash
npm run build
npm start
```

## Testy

```bash
# Uruchomienie testów w trybie watch
npm test

# Jednorazowe uruchomienie testów
npm run test:run
```

## Linting

```bash
# Sprawdzenie błędów
npm run lint

# Automatyczna naprawa błędów
npm run lint:fix
```

## Struktura projektu

```
src/
  ├── app.ts              # Główny plik aplikacji
  ├── consts/             # Stałe
  ├── data/               # Dane wejściowe
  ├── helpers/            # Funkcje pomocnicze
  └── types/              # Definicje typów TypeScript

tests/                    # Testy jednostkowe
```

## Autor

Rafał Piechowicz <rpiechowicz@icloud.com>
