# Open-source shortlist

Research date: 5 October 2026. Selected by fit to this prototype and the proposed Android path, not by an exhaustive benchmark or popularity ranking. Vendor feature claims are not independently benchmarked.

| Project | Why it matters | Decision |
|---|---|---|
| [Ollama](https://github.com/ollama/ollama) | MIT local-model runner with a documented HTTP API | Optional external runtime integrated in this prototype; actual Qwen extraction tested |
| [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) | Apache-2.0 edge inference framework with Android/Kotlin support | Preferred candidate for native device work; not integrated or benchmarked here |
| [Transformers.js](https://github.com/huggingface/transformers.js) | Apache-2.0 browser inference with WebGPU/WASM options | Browser alternative; deferred until device/runtime compatibility is tested |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | MIT speech inference implementation with Android examples | Offline speech candidate; not integrated; Telugu/noise performance unverified |
| [ERPNext](https://github.com/frappe/erpnext) | GPL-3.0 field/maintenance workflows provide a useful domain reference | Reference only; importing a large ERP would create unnecessary scope and licence obligations |

The prototype has **no third-party npm dependencies**. Node and browser APIs supply the app runtime. Ollama and its model are installed separately and are not bundled in this repository. Licence statements refer to the project-level licences; model weights, transitive dependencies and individual files may have separate terms.

Qwen3-0.6B model reference: [official model card](https://huggingface.co/Qwen/Qwen3-0.6B). The prototype uses Ollama's `qwen3:0.6b` distribution, not the proposed Gemma Android candidate.

## Commercial overlap

[CompanyCam](https://help.companycam.com/en/articles/8991633-using-ai-features-for-documents) documents voice/photo reports with offline walkthroughs processed after reconnection. [MaintainX](https://www.getmaintainx.com/use-cases/ai-powered-maintenance-operations) describes AI voice summaries. These products establish that generic voice-to-report generation is not novel. They are not open-source dependencies or endorsed partners.

KaamProof's proposed angle is completeness checking while the technician is still at the job, local inference and explicit source boundaries. No global uniqueness, patentability or customer demand is claimed.

## Primary implementation references

- [Ollama chat API](https://docs.ollama.com/api/chat)
- [Google Android LiteRT-LM guide](https://developers.google.com/edge/litert-lm/android)
- [Google mobile Gemma deployment](https://developers.google.com/edge/litert-lm/models/gemma-4)
- [Transformers.js README](https://github.com/huggingface/transformers.js/blob/main/README.md)
- [ERPNext maintenance visit](https://docs.frappe.io/erpnext/v14/user/manual/en/support/maintenance-visit)

Coverage limitation: targeted official documentation and repository research. No exhaustive repository census or performance comparison was conducted.
