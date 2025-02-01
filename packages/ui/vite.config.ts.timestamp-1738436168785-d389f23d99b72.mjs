// vite.config.ts
import vue from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@5.4.11_@types+node@22.10.1_lightningcss@1.29.1_sass@1.83.4_suga_4e73ylhns6cds37vwvtkcce75e/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import autoprefixer from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.49/node_modules/autoprefixer/lib/autoprefixer.js";
import postCssPxToRem from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.49/node_modules/postcss-pxtorem/index.js";
import postNested from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/postcss-nested@7.0.2_postcss@8.4.49/node_modules/postcss-nested/index.js";
import mixins from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/postcss-mixins@11.0.3_postcss@8.4.49/node_modules/postcss-mixins/index.js";
import each from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/postcss-each@1.1.0_postcss@8.4.49/node_modules/postcss-each/index.js";
import eachVariables from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/postcss-each-variables@0.3.0/node_modules/postcss-each-variables/index.js";
import cssnano from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/cssnano@7.0.6_postcss@8.4.49/node_modules/cssnano/src/index.js";
import dts from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.10.1_rollup@4.28.1_typescript@5.6.3_vite@5.4.11_@types+n_i3ehp6c5wkmimks3adrzzg2rfq/node_modules/vite-plugin-dts/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.11_@types+node@22.10.1_lightningcss@1.29.1_sass@1.83.4_s_gz4rjfy2dlkdcfrb4ppavtrevu/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { defineConfig } from "file:///D:/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/Versakit-bate/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.1_lightningcss@1.29.1_sass@1.83.4_sugarss@4.0.1_postcss@8.4.49_/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({ tsconfigPath: "../../tsconfig.build.json" }),
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
        each(),
        eachVariables(),
        autoprefixer({
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"]
        }),
        mixins(),
        postNested(),
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
      external: ["vue"],
      output: [
        {
          exports: "named",
          globals: {
            vue: "Vue"
          },
          preserveModules: false
        },
        {
          format: "umd",
          dir: "dist/umd",
          entryFileNames: "[name].umd.js",
          name: "index"
        },
        {
          format: "esm",
          dir: "dist/esm",
          entryFileNames: "[name].esm.js"
        }
      ]
    },
    lib: {
      entry: "index.ts",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTYyMTFcdTc2ODRcXFxcXHU2MjExXHU3Njg0XHU1RjAwXHU2RTkwXHU5ODc5XHU3NkVFXFxcXFZlcnNha2l0LWJhdGVcXFxccGFja2FnZXNcXFxcdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1NjIxMVx1NzY4NFxcXFxcdTYyMTFcdTc2ODRcdTVGMDBcdTZFOTBcdTk4NzlcdTc2RUVcXFxcVmVyc2FraXQtYmF0ZVxcXFxwYWNrYWdlc1xcXFx1aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU2JTg4JTkxJUU3JTlBJTg0LyVFNiU4OCU5MSVFNyU5QSU4NCVFNSVCQyU4MCVFNiVCQSU5MCVFOSVBMSVCOSVFNyU5QiVBRS9WZXJzYWtpdC1iYXRlL3BhY2thZ2VzL3VpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuLy8gQ1NTXHU1REU1XHU3QTBCXHU1MzE2XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBwb3N0Q3NzUHhUb1JlbSBmcm9tICdwb3N0Y3NzLXB4dG9yZW0nXG5pbXBvcnQgcG9zdE5lc3RlZCBmcm9tICdwb3N0Y3NzLW5lc3RlZCdcbmltcG9ydCBtaXhpbnMgZnJvbSAncG9zdGNzcy1taXhpbnMnXG5pbXBvcnQgZWFjaCBmcm9tICdwb3N0Y3NzLWVhY2gnXG5pbXBvcnQgZWFjaFZhcmlhYmxlcyBmcm9tICdwb3N0Y3NzLWVhY2gtdmFyaWFibGVzJ1xuaW1wb3J0IGNzc25hbm8gZnJvbSAnY3NzbmFubydcbi8vIFRTXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuLy8gXHU1NkZFXHU2ODA3XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBkdHMoeyB0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5idWlsZC5qc29uJyB9KSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLi9pY29ucycpXSxcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxuICAgIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIGFwaTogJ21vZGVybi1jb21waWxlcicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBlYWNoKCksXG4gICAgICAgIGVhY2hWYXJpYWJsZXMoKSxcbiAgICAgICAgYXV0b3ByZWZpeGVyKHtcbiAgICAgICAgICBvdmVycmlkZUJyb3dzZXJzbGlzdDogWydDaHJvbWUgPiA0MCcsICdmZiA+IDMxJywgJ2llIDExJ10sXG4gICAgICAgIH0pLFxuICAgICAgICBtaXhpbnMoKSxcbiAgICAgICAgcG9zdE5lc3RlZCgpLFxuICAgICAgICBwb3N0Q3NzUHhUb1JlbSh7XG4gICAgICAgICAgcm9vdFZhbHVlOiAxNixcbiAgICAgICAgICBwcm9wTGlzdDogWycqJ10sXG4gICAgICAgIH0pLFxuICAgICAgICBjc3NuYW5vKHtcbiAgICAgICAgICBwcmVzZXQ6ICdkZWZhdWx0JyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIC8vIFx1NjI1M1x1NTMwNVx1OTE0RFx1N0Y2RVxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmb3JtYXQ6ICd1bWQnLFxuICAgICAgICAgIGRpcjogJ2Rpc3QvdW1kJyxcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS51bWQuanMnLFxuICAgICAgICAgIG5hbWU6ICdpbmRleCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmb3JtYXQ6ICdlc20nLFxuICAgICAgICAgIGRpcjogJ2Rpc3QvZXNtJyxcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5lc20uanMnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICdpbmRleC50cycsXG4gICAgICBuYW1lOiAndmVyc2FraXQtdWknLFxuICAgIH0sXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgLy8gXHU5NjMyXHU2QjYyIEluZmluaXR5IFx1ODhBQlx1NTM4Qlx1N0YyOVx1NjIxMCAxLzBcdUZGMENcdThGRDlcdTUzRUZcdTgwRkRcdTRGMUFcdTVCRkNcdTgxRjQgQ2hyb21lIFx1NEUwQVx1NzY4NFx1NjAyN1x1ODBGRFx1OTVFRVx1OTg5OFxuICAgICAgICBrZWVwX2luZmluaXR5OiB0cnVlLFxuICAgICAgICAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTUzQkJcdTk2NjQgY29uc29sZVxuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAgIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NTNCQlx1OTY2NCBkZWJ1Z2dlclxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGZvcm1hdDoge1xuICAgICAgICBjb21tZW50czogZmFsc2UsIC8vIFx1NTIyMFx1OTY2NFx1NkNFOFx1OTFDQVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1gsT0FBTyxTQUFTO0FBQ2hZLE9BQU8sVUFBVTtBQUVqQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sYUFBYTtBQUVwQixPQUFPLFNBQVM7QUFHaEIsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyxvQkFBb0I7QUFFN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osSUFBSSxFQUFFLGNBQWMsNEJBQTRCLENBQUM7QUFBQSxJQUNqRCxxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUFBLE1BQ2pELFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLEtBQUs7QUFBQSxRQUNMLGNBQWM7QUFBQSxRQUNkLGFBQWE7QUFBQSxVQUNYLHNCQUFzQixDQUFDLGVBQWUsV0FBVyxPQUFPO0FBQUEsUUFDMUQsQ0FBQztBQUFBLFFBQ0QsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsZUFBZTtBQUFBLFVBQ2IsV0FBVztBQUFBLFVBQ1gsVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNoQixDQUFDO0FBQUEsUUFDRCxRQUFRO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDVixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLFNBQVM7QUFBQSxVQUNULFNBQVM7QUFBQSxZQUNQLEtBQUs7QUFBQSxVQUNQO0FBQUEsVUFDQSxpQkFBaUI7QUFBQSxRQUNuQjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFFBQVE7QUFBQSxVQUNSLEtBQUs7QUFBQSxVQUNMLGdCQUFnQjtBQUFBLFVBQ2hCLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsS0FBSztBQUFBLFVBQ0wsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVIsZUFBZTtBQUFBO0FBQUEsUUFFZixjQUFjO0FBQUE7QUFBQSxRQUVkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
