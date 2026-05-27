/**
 * Miliarium Cloud Functions — entry point.
 *
 * All exported names from this file become deployable functions. Group
 * related triggers into separate files under `src/` and re-export them
 * here as your codebase grows (e.g. `export * from "./invitations";`).
 *
 * Uses the Gen 2 SDK (`firebase-functions/v2/*`).
 */

import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions/v2";

// Initialize the Admin SDK once. All triggers in this codebase share this
// instance — calling `initializeApp()` again would throw.
initializeApp();

/**
 * Smoke-test HTTP function — confirms deploys work end-to-end.
 *
 * After `npm run deploy`, hit the printed URL to verify. Delete this once
 * your real triggers (push dispatch, cascade cleanup, etc.) are in place.
 */
export const helloWorld = onRequest((req, res) => {
  logger.info("helloWorld invoked", { structuredData: true });
  res.json({ ok: true, message: "miliarium backend is alive" });
});
