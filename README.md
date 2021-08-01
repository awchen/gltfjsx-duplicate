A clean NextJS install with a minimal, reproducible example.

To run:

```
yarn run dev
```

Pretty much every relevant piece of code should be contained in `/pages/index.js`. The model is in `/public`

Issue: when using a GLTFJSX-created model, we cannot create duplicate models by creating another react component. Contrast this to a generic mesh.

I originally thought this was due to the fact that UUIDs were the same between the two models, but `.clone()`ing all of the relevant objects (`nodes.Root`, and the props for `skinnedMesh`) and verifying their new UUIDs didn't seem to affect anything.
