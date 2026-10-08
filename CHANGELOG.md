# Changelog

All notable project changes are recorded here.

## 2026-10-08

### Added
- Initial Prasad Jewellers product foundation.
- Mobile-first premium interface.
- Jamshedpur Jewellers Association rate presentation.
- Gold and silver rate cards.
- Catalogue foundation.
- Design request entry point.
- Call, WhatsApp and email contact actions.
- PWA manifest.
- GitHub Pages deployment workflow.
- **Master Admin rate-entry interface** with daily Gold and Silver fields, validation, timestamp capture and customer-facing preview.

### Architecture note
The displayed rates are isolated in `src/data/rates.js`. They are intentionally not described as a live API until a verified rate provider or secure update workflow is connected.

### Admin architecture note
The Master Admin form is intentionally validation-only at this stage. It must be connected to an authenticated backend before it can persist public rate changes. No GitHub token, database service key, or admin password is placed in browser code.
