//vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@use "src/styles/variables.scss" as vars;`, // تحميل المتغيرات تلقائيًا
//         includePaths: ["./src"], // تحديد مسارات البحث
//       },
//     },
//   },
// });
