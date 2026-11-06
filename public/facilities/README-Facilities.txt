M3TFluiD Lab Facilities update

INSTALL
1. Extract this ZIP.
2. Copy src/components/Equipment.jsx into the same path in your website project, replacing the existing Equipment.jsx.
3. Merge public/facilities and public/blwt into your project public folder. Keep these exact file and folder names.
4. Start your usual development server (npm run dev) and open /equipment.

This is a Facilities-only patch. It does not replace App.jsx, routing, or other pages. The existing Equipment page wrapper is retained.

INCLUDED
- Selectable DJI Matrice 350 RTK, Mavic 3T, and Matrice 30T display. Matrice 350 RTK is selected initially.
- Per-platform flight, thermal, and payload specifications with links to DJI documentation.
- Dedicated Dell workstation specifications from your Facilities & Equipment inventory.
- CSU, OSC, and TACC provider logos and links. TACC access acknowledges the new NSF supplemental grant.
- Both original VR recordings, compressed to H.264/AAC MP4, with controls and preview images.
- Existing wind-tunnel, thermal, and weather images required by this component.

NOTES
The Matrice 30T model is used because your equipment inventory identifies the thermal variant. Matrice 350 RTK thermal and LiDAR sensing are identified as payload-dependent. No exact installed LiDAR model has been assumed.
The workstation cards omit ambiguous graphics-memory and memory-speed details in the older inventory.
The current project ZIP had no /contact route. This patch preserves your local routing, which shows Contact in the supplied screenshots.

VALIDATION
Production build passed using the uploaded project plus this component. Existing Three.js dependency and bundle-size warnings remain.
Component rendering checked: two video players, Matrice 350 RTK selected initially, workstation specifications present, all media paths found.
Both compressed videos decoded without errors. Interactive browser and mobile playback checks could not be completed in this environment; check drone selection and both video Play buttons locally.

SOURCES
Workstations: NSF-Facilities & Equipment(1).pdf, supplied inventory.
TACC funding acknowledgement: your November 4, 2026 instruction.
DJI specifications and product images:
https://enterprise.dji.com/matrice-350-rtk/specs
https://enterprise.dji.com/matrice-30/specs
https://enterprise.dji.com/mavic-3-enterprise/specs
https://store.dji.com/product/dji-mavic-3t
Provider logos from official provider websites:
https://www.csuohio.edu/themes/custom/csuohio_theme/logo.svg
https://www.osc.edu/sites/default/themes/contrib/osc/logo_2024.svg
https://docs.tacc.utexas.edu/imgs/tacc-logo-with-words.svg
