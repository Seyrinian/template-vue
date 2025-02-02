import typescriptEslint from "typescript-eslint"
import seyrinianToolsConfig from "@seyrinian/seyrinian-tools/eslint"

export default typescriptEslint.config(
  { ignores: ["*.d.ts", "**/coverage", "**/dist"] },
  ...seyrinianToolsConfig,
)
