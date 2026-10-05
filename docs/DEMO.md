# Three-minute walkthrough

## Preparation

Run `npm start`. If showing AI, provision Ollama `qwen3:0.6b` first. Open localhost once to install the offline shell. State that this is a browser prototype and inference runs on the laptop. Use only fictional data and the labelled synthetic fixtures.

## Demonstration

1. Load the sample job. Its note says “Service complete.” Point out the four missing records and disabled review approval.
2. Attach `synthetic-before.png` and `synthetic-after.png`. Explain that these are illustrations used to demonstrate attachment handling, not real service photos.
3. Enter the synthetic demonstration reading `18.2`. Correct the note to state that this is the recorded demonstration reading and that the customer acknowledged the record. Check acknowledgement.
4. The status becomes “Ready for review.” Select approval. The status becomes “Reviewed.”
5. Optionally select source-linked extraction. Show the exact note excerpts and laptop inference label. Extraction invalidates approval so the updated record is reviewed again.
6. Export JSON and open the print/PDF layout. The report includes supplied evidence, missing records if any, and its limitations.
7. Reload with browser networking offline. Show restored local inputs and functioning checklist checks. The optional server model is unavailable in this mode.

## Defend the trade-off

The AI selects relevant reported facts. Rules enforce required documentation. A person approves the record. This avoids treating a fluent model answer as proof that a service job was performed correctly.

## Next step

Validate a real service-owner checklist and integrate the tested Android runtime. Neither has been completed.
