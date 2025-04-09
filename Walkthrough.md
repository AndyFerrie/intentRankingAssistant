# ✅ Walkthrough Summary

-   Started with the **user perspective** by exploring the Lloyds chatbot to understand the experience
-   Built a **clean, accessible UI** using semantic HTML, ARIA roles, and Tailwind CSS
-   Took a **TDD approach** to intent ranking — wrote tests first to guide implementation
-   Kept responsibilities **clearly separated** across components, utilities, and server actions
-   Structured the project to be **testable, composable, and maintainable**
-   While scoped as a POC, it’s designed with **scalability and production-readiness in mind**

---

## 1. UI-First Approach

> Built a dummy replica of the assistant UI to visualise the experience and layout.

-   Modular components: `Header`, `Body`, `Input`, `IntentSuggestions`
-   Semantic HTML and ARIA roles for accessibility
-   Tailwind CSS + Lloyds branding

📁 `src/components/virtual-assistant/`  
📁 `public/screenshots/virtualAssistantDiagram.png`

---

## 2. Defined Types from JSON

> Introduced types to model the dataset and ensure consistency.

-   `IntentKey`, `IntentLabel`, `intentLabels`
-   `IntentRecord` to reflect incoming shape

📁 `src/types/intents.ts`

---

## 3. Created Test Factory

> Added a factory to simplify creation of realistic test records.

-   Clean test setup with reusable record generation

📁 `src/tests/factories/createRecord.ts`

---

## 4. TDD for Ranking Logic

> Wrote tests first to guide implementation of core logic.

Test cases included:

-   Top 3 ranking by frequency
-   Tie-breaking by confidence, then alphabetically
-   Date filtering (`days`)
-   Fewer than 3 results
-   Empty array handling

📁 `src/utils/getTopSuggestions.ts`  
📁 `src/utils/getTopSuggestions.test.ts`

---

## 5. Server Action

> Wrapped logic in a server action to simulate real data fetching.

-   Separation of concerns: UI doesn’t know how data is fetched
-   Easy to swap to DB/API later

📁 `src/app/actions/getRankedSuggestions.ts`

---

## 6. Hooked Up UI Logic

> Connected data to the virtual assistant UI with guards in place.

-   `limit` prop on `IntentSuggestions`
-   Guard to render only if suggestions exist

📁 `src/components/virtual-assistant/IntentSuggestions.tsx`  
📁 `src/components/virtual-assistant/VirtualAssistant.tsx`

---

## 7. Component-Level Tests

> Added initial tests to validate UI rendering behavior.

-   Renders up to 3 suggestions
-   Renders nothing when suggestions array is empty

📁 `src/components/virtual-assistant/IntentSuggestions.test.tsx`

---

## 8. Styling & Visual Polish

> Final pass to align UI with the Lloyds look and feel.

-   Lloyds green, Lato font, spacing, responsiveness

---

## 9. Production Recommendations

✅ Recommended Architecture

| Component         | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| 🕒 Cloud Function | Triggered nightly via Cloud Scheduler (e.g. midnight)        |
| 🧠 Compute        | Queries recent intent records and calculates the daily top 3 |
| 💾 Cache          | Stores results in Firestore, Cloud Storage, or Redis         |
| 🖥️ Frontend       | Reads precomputed values instead of performing live queries  |

This setup avoids expensive on-demand computation and ensures fast, predictable response times.

---

## 10. 🔮 Future Improvements

-   🔐 Add authentication awareness, allowing personalised suggestions for signed-in users
-   🌍 Localise suggestion labels for multilingual audiences
-   📊 Track click-through rates to measure suggestion effectiveness over time
-   ♿ Enhance accessibility, including keyboard navigation, screen reader support, and focus states
-   🧪 Add end-to-end tests for user flows using Playwright or Cypress
