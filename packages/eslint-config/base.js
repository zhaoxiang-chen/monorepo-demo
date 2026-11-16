import js from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier"
import tseslint from "typescript-eslint"

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  globalIgnores(["dist", "node_modules", "dist-ssr"]),
])
