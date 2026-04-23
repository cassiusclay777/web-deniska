import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://denisabukovcanova.cz',
    output: 'static',
    trailingSlash: 'always',
    vite: {
        plugins: [
            tailwindcss(),
        ],
        server: {
            hmr: {
                overlay: false
            }
        }
    },
});