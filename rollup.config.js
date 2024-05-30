import { defineConfig } from 'rollup';
import typescript from "@rollup/plugin-typescript"

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name: 'khatavani-client',
    },
    external: ['react', 'react-dom'],
    plugins: [typescript({
        tsconfig: "tsconfig.json"
    })]
})