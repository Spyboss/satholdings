# PDF review report

Reviewed source files:

- `pdf/Company profile details.pdf`
- `pdf/SAT HOLDINGS 2.pdf`
- `pdf/Message from the Managing Director.pdf`
- `pdf/SAT Energy Solutions.pdf`

Extracted text and metadata files created:

- `pdf/extracted/Company profile details.txt`
- `pdf/extracted/Company profile details.info.txt`
- `pdf/extracted/SAT HOLDINGS 2.txt`
- `pdf/extracted/SAT HOLDINGS 2.info.txt`
- `pdf/extracted/Message from the Managing Director.txt`
- `pdf/extracted/Message from the Managing Director.info.txt`
- `pdf/extracted/SAT Energy Solutions.txt`
- `pdf/extracted/SAT Energy Solutions.info.txt`

Notes:

- All four PDFs report `Form: none` in metadata. No embedded PDF form fields were found.
- `www.satholdings.lk` did not resolve in fetch testing, while `https://satholdings.lk` did load.

## High-confidence issues

1. Company age is inconsistent.
   - `pdf/extracted/SAT HOLDINGS 2.txt:7` says "for the past 05 years".
   - `pdf/extracted/Company profile details.txt:4` says "With over 5 years of excellence".
   - `pdf/extracted/SAT Energy Solutions.txt:67` says SAT Holdings was incorporated in 2017.
   - A 2017 company described in 2026 is roughly 8-9 years old, not 5.

2. The solar project math does not match the stated capacity.
   - `pdf/extracted/SAT Energy Solutions.txt:8`-`pdf/extracted/SAT Energy Solutions.txt:11` claims a 500kW project using 775 panels rated at 620W each.
   - 775 x 620W = 480,500W = 480.5kW, not 500kW.
   - The same mismatch is repeated on `https://satholdings.lk/projects`.

3. The MD message contains likely copied text from another company.
   - `pdf/extracted/SAT HOLDINGS 2.txt:199` says "Today KSJ has grown..." even though the document is about SAT Holdings.
   - This strongly suggests copy-paste reuse or unreviewed generated content.

4. Overseas-project claims are not supported by the listed evidence.
   - `pdf/extracted/SAT HOLDINGS 2.txt:195` says SAT serves "both Sri Lankan and overseas customers".
   - `pdf/extracted/SAT HOLDINGS 2.txt:197` says it completed "even overseas construction projects".
   - The visible project list in `pdf/extracted/SAT HOLDINGS 2.txt:162`-`pdf/extracted/SAT HOLDINGS 2.txt:180` shows Sri Lankan projects only.

5. The "first rice cooker manufacturing" claim is unverified and repeated as fact.
   - `pdf/extracted/Company profile details.txt:18`-`pdf/extracted/Company profile details.txt:20` calls it the "first-ever" facility in Sri Lanka.
   - `pdf/extracted/SAT Energy Solutions.txt:90`-`pdf/extracted/SAT Energy Solutions.txt:94` repeats the local-manufacturing milestone.
   - Search checks only surfaced SAT's own website/pages; no independent corroboration was found.

## Medium-confidence discrepancies

6. Contact details are inconsistent across materials.
   - `pdf/extracted/Company profile details.txt:48` lists three phone numbers, including `+94 777410011`.
   - `pdf/extracted/SAT HOLDINGS 2.txt:220` lists only two phone numbers.
   - The live site also shows only two numbers.

7. Counts are asserted without supporting detail.
   - `pdf/extracted/Company profile details.txt:42` says 21+ major projects and 24+ corporate clients served.
   - `pdf/extracted/SAT HOLDINGS 2.txt:211`-`pdf/extracted/SAT HOLDINGS 2.txt:214` shows 24 clients, 21 projects, and 43 machinery/equipment/vehicle.
   - The project table only enumerates seven projects.

8. Fleet wording is inconsistent.
   - `pdf/extracted/Company profile details.txt:31` says a fleet of 43+ specialized vehicles.
   - `pdf/extracted/SAT HOLDINGS 2.txt:212`-`pdf/extracted/SAT HOLDINGS 2.txt:214` says 43 machinery, equipment and vehicle.
   - Those are not equivalent claims.

9. Corporate positioning changes materially across documents.
   - `pdf/extracted/SAT HOLDINGS 2.txt:14`-`pdf/extracted/SAT HOLDINGS 2.txt:20` positions the company as a construction service provider.
   - `pdf/extracted/Message from the Managing Director.txt:23`-`pdf/extracted/Message from the Managing Director.txt:40` positions it as a diversified conglomerate spanning energy, agro, electronics, and infrastructure.
   - This may be intentional rebranding, but the materials are not aligned.

## Quality and credibility issues

10. Multiple spelling/grammar problems reduce trust.
   - `Sothern` instead of `Southern` in many places, e.g. `pdf/extracted/SAT HOLDINGS 2.txt:121`.
   - `Prasanat Year` in `pdf/extracted/SAT HOLDINGS 2.txt:144`.
   - `WHEEL LODER` in `pdf/extracted/SAT HOLDINGS 2.txt:88`.
   - `WATER BROWSER` in `pdf/extracted/SAT HOLDINGS 2.txt:93`.
   - `STRENTH` in `pdf/extracted/SAT HOLDINGS 2.txt:208`.
   - `Supervition` in `pdf/extracted/SAT HOLDINGS 2.txt:179`.

11. Several slides contain duplicated or broken content.
   - `pdf/extracted/SAT HOLDINGS 2.txt:44`-`pdf/extracted/SAT HOLDINGS 2.txt:51` repeats the same safety statement under different principle headings.
   - `pdf/extracted/SAT HOLDINGS 2.txt:53`-`pdf/extracted/SAT HOLDINGS 2.txt:71` contains stray bullets and fragmented service text.

12. Some statements sound inflated or unsupported.
   - `pdf/extracted/Message from the Managing Director.txt:23` claims the goal is to be the premier multi-disciplinary conglomerate in Sri Lanka.
   - `pdf/extracted/Message from the Managing Director.txt:39` claims national prosperity impact.
   - These may be acceptable as vision statements, but they should not be presented as current proven facts.
