import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico'],
  manifest: {"name":"Pocket Pitch","short_name":"Pocket Pitch","start_url":"/","display":"standalone","background_color":"#e8ebf2","lang":"en","scope":"/","description":"An app that can be used to mimic functionality of a pitch pipe.","icons":[
    {
        "src": "favicon.ico",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
    },
    {
        "src": "favicon.ico",
        "sizes": "196x196",
        "type": "image/png",
        "purpose": "any maskable"
    },
    {
        "src": "favicon.ico",
        "type": "image/png",
        "sizes": "512x512"
    }
],"theme_color":"#171717","orientation":"portrait", "prefer_related_applications": true}
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Pocket-Pitch-Desktop",
  plugins: [react(), VitePWA(manifestForPlugin)],
})
