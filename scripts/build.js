const esbuild = require("esbuild");

esbuild.build({
    entryPoints: ['builds/cdn.js'],
    outfile: 'dist/bootpopup.js',
    platform: 'browser',
    bundle: true,
}).catch(() => process.exit(1))

esbuild.build({
    entryPoints: ['builds/cdn.js'],
    outfile: 'dist/bootpopup.min.js',
    platform: 'browser',
    minify: true,
    bundle: true,
}).catch(() => process.exit(1))

esbuild.build({
    entryPoints: ['builds/module.js'],
    outfile: 'dist/bootpopup.mjs',
    platform: 'neutral',
    bundle: true,
}).catch(() => process.exit(1))

esbuild.build({
    entryPoints: ['builds/module.js'],
    outfile: 'dist/bootpopup.min.mjs',
    platform: 'neutral',
    minify: true,
    bundle: true,
}).catch(() => process.exit(1))
