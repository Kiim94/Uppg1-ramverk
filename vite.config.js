import { defineConfig } from 'vite'
import { resolve } from "path"

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main: resolve(__dirname, "index.html"),
                ramverk1: resolve(__dirname, "ramverk1.html"),
                ramverk2: resolve(__dirname, "ramverk2.html"),
                publish: resolve(__dirname, "publish.html")
            }
        }
    }
})