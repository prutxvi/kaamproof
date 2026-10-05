# Verification record

Date: 5 October 2026. Local macOS / Node v26.7.0 / Chromium automation. This is developer verification, not a field trial or a mobile hardware benchmark.

## Actual test output

```text
npm test
tests 14
pass 14
fail 0

npm run check
exit code 0
```

Tests cover completion claims with missing evidence, review state, invalid readings, invalid model quotes, model paraphrase rejection, draft exports, static-server headers, unlisted files, foreign-origin extraction, invalid input, malformed JSON and oversized requests.

## Browser checks performed

| Check | Observed result |
|---|---|
| Load fictional incomplete job | Needs evidence; 4 missing items |
| Upload two labelled synthetic PNG fixtures | Both previews displayed and persisted |
| Supply demo reading and acknowledgement | Ready for review; 0 missing items |
| Approve the complete record | Reviewed; 0 missing items |
| Reload | Reviewed record and both photos restored from IndexedDB |
| JSON download | Parsed export: Reviewed, 2 photos, 0 gaps |
| Print layout | Report title, Reviewed status and both attached images present |
| 390 px mobile viewport | No horizontal overflow; screenshot inspected |
| Browser offline + reload after shell caching | App loaded; note restored; four missing items still checked |
| Real local AI button | Qwen3:0.6b excerpts appeared, labelled local server/laptop |
| Browser errors on recorded flow | No page errors reported |

The print layout was populated through the real button; operating-system print-dialog completion was not automated. Photo capture was tested by file upload, not with a physical phone camera. Microphone recording code is present but permission/capture on actual devices was not tested.

## Real model smoke

Ollama downloaded `qwen3:0.6b` (522 MB reported by Ollama). See [recorded request/response](local-model-smoke.json).

```text
HTTP 200
Local model: qwen3:0.6b
Elapsed for this single warm request: 229 ms
Source excerpts:
- Cleaned the indoor filter.
- Customer was absent.
- Outlet temperature was not measured.
```

This is one synthetic smoke request, not an accuracy or latency benchmark. Initial model output paired a paraphrase with an unrelated source quote. The implementation was changed to display only exact source excerpts and discard paraphrases. A dedicated regression test covers that boundary. Omitted facts, poor relevance and false technician statements remain possible.

## Demo assets

The recorded walkthrough is 10.133 seconds of silent browser interaction, approximately 750 KB. It demonstrates capture, gap correction, review and local extraction with synthetic evidence. It is a brief product walkthrough, not a narrated three-minute pitch.

## Still unverified or unfinished

Native Android build; phone CPU/GPU/NPU inference; Telugu/Hindi speech; automatic transcription; image analysis; actual AC-service-owner checklist; real customer demand; Office Kit integration and measured usage; multi-user privacy/authentication; production deployment; GitHub Actions execution.
