import { join } from "node:path"
import type { ViteUserConfig } from "vitest/config"

const config: ViteUserConfig = {
    appType: "custom",
    root: "src",
    cacheDir: join(__dirname, ".bun", "vitest"),
    assetsInclude: ["**/*.html"],
    test: {
        environment: "jsdom",
        testTimeout: 10000,
    },
}

export default config
