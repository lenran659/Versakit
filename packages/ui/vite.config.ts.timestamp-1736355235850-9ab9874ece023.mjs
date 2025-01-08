// vite.config.ts
import vue from "file:///C:/Users/Jannik/Desktop/Versakit/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@5.4.11_@types+node@22.10.1_sass@1.83.0__vue@3.5.13_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///C:/Users/Jannik/Desktop/Versakit/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.10.1_rollup@4.28.1_typescript@5.6.3_vite@5.4.11_@types+node@22.10.1_sass@1.83.0_/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
import autoprefixer from "file:///C:/Users/Jannik/Desktop/Versakit/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.49/node_modules/autoprefixer/lib/autoprefixer.js";
import postCssPxToRem from "file:///C:/Users/Jannik/Desktop/Versakit/node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.49/node_modules/postcss-pxtorem/index.js";
import cssnano from "file:///C:/Users/Jannik/Desktop/Versakit/node_modules/.pnpm/cssnano@7.0.6_postcss@8.4.49/node_modules/cssnano/src/index.js";
import { defineConfig } from "file:///C:/Users/Jannik/Desktop/Versakit/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.1_sass@1.83.0/node_modules/vite/dist/node/index.js";
import { createSvgIconsPlugin } from "file:///C:/Users/Jannik/Desktop/Versakit/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.11_@types+node@22.10.1_sass@1.83.0_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    dts({ tsconfigPath: "../../tsconfig.build.json" }),
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "./icons")],
      symbolId: "icon-[dir]-[name]"
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"]
        }),
        postCssPxToRem({
          rootValue: 16,
          propList: ["*"]
        }),
        cssnano({
          preset: "default"
        })
      ]
    }
  },
  // 打包配置
  build: {
    sourcemap: false,
    rollupOptions: {
      external: ["vue", "@vueuse/core"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          "@vueuse/core": "VueUse"
        },
        preserveModules: false
      }
    },
    lib: {
      entry: "index.ts",
      formats: ["es", "umd"],
      name: "versakit-ui"
    },
    terserOptions: {
      compress: {
        // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        keep_infinity: true,
        // 生产环境去除 console
        drop_console: true,
        // 生产环境去除 debugger
        drop_debugger: true
      },
      format: {
        comments: false
        // 删除注释
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKYW5uaWtcXFxcRGVza3RvcFxcXFxWZXJzYWtpdFxcXFxwYWNrYWdlc1xcXFx1aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSmFubmlrXFxcXERlc2t0b3BcXFxcVmVyc2FraXRcXFxccGFja2FnZXNcXFxcdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0phbm5pay9EZXNrdG9wL1ZlcnNha2l0L3BhY2thZ2VzL3VpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcclxuaW1wb3J0IHBvc3RDc3NQeFRvUmVtIGZyb20gJ3Bvc3Rjc3MtcHh0b3JlbSdcclxuaW1wb3J0IGNzc25hbm8gZnJvbSAnY3NzbmFubydcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIGR0cyh7IHRzY29uZmlnUGF0aDogJy4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb24nIH0pLFxyXG4gICAgdnVlKCksXHJcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuL2ljb25zJyldLFxyXG4gICAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhcGk6ICdtb2Rlcm4tY29tcGlsZXInLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIGF1dG9wcmVmaXhlcih7XHJcbiAgICAgICAgICBvdmVycmlkZUJyb3dzZXJzbGlzdDogWydDaHJvbWUgPiA0MCcsICdmZiA+IDMxJywgJ2llIDExJ10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgcG9zdENzc1B4VG9SZW0oe1xyXG4gICAgICAgICAgcm9vdFZhbHVlOiAxNixcclxuICAgICAgICAgIHByb3BMaXN0OiBbJyonXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBjc3NuYW5vKHtcclxuICAgICAgICAgIHByZXNldDogJ2RlZmF1bHQnLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIFx1NjI1M1x1NTMwNVx1OTE0RFx1N0Y2RVxyXG4gIGJ1aWxkOiB7XHJcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogWyd2dWUnLCAnQHZ1ZXVzZS9jb3JlJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiAnVnVlJyxcclxuICAgICAgICAgICdAdnVldXNlL2NvcmUnOiAnVnVlVXNlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXNlcnZlTW9kdWxlczogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiAnaW5kZXgudHMnLFxyXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxyXG4gICAgICBuYW1lOiAndmVyc2FraXQtdWknLFxyXG4gICAgfSxcclxuICAgIHRlcnNlck9wdGlvbnM6IHtcclxuICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICAvLyBcdTk2MzJcdTZCNjIgSW5maW5pdHkgXHU4OEFCXHU1MzhCXHU3RjI5XHU2MjEwIDEvMFx1RkYwQ1x1OEZEOVx1NTNFRlx1ODBGRFx1NEYxQVx1NUJGQ1x1ODFGNCBDaHJvbWUgXHU0RTBBXHU3Njg0XHU2MDI3XHU4MEZEXHU5NUVFXHU5ODk4XHJcbiAgICAgICAga2VlcF9pbmZpbml0eTogdHJ1ZSxcclxuICAgICAgICAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTUzQkJcdTk2NjQgY29uc29sZVxyXG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcclxuICAgICAgICAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTUzQkJcdTk2NjQgZGVidWdnZXJcclxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBmb3JtYXQ6IHtcclxuICAgICAgICBjb21tZW50czogZmFsc2UsIC8vIFx1NTIyMFx1OTY2NFx1NkNFOFx1OTFDQVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9VLE9BQU8sU0FBUztBQUNwVixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sYUFBYTtBQUNwQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLDRCQUE0QjtBQUVyQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJLEVBQUUsY0FBYyw0QkFBNEIsQ0FBQztBQUFBLElBQ2pELElBQUk7QUFBQSxJQUNKLHFCQUFxQjtBQUFBLE1BQ25CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQUEsTUFDakQsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsYUFBYTtBQUFBLFVBQ1gsc0JBQXNCLENBQUMsZUFBZSxXQUFXLE9BQU87QUFBQSxRQUMxRCxDQUFDO0FBQUEsUUFDRCxlQUFlO0FBQUEsVUFDYixXQUFXO0FBQUEsVUFDWCxVQUFVLENBQUMsR0FBRztBQUFBLFFBQ2hCLENBQUM7QUFBQSxRQUNELFFBQVE7QUFBQSxVQUNOLFFBQVE7QUFBQSxRQUNWLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLE9BQU8sY0FBYztBQUFBLE1BQ2hDLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsUUFDQSxpQkFBaUI7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEsUUFFUixlQUFlO0FBQUE7QUFBQSxRQUVmLGNBQWM7QUFBQTtBQUFBLFFBRWQsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUE7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
