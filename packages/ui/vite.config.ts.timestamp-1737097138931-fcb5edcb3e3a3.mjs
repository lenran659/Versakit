// vite.config.ts
import vue from "file:///D:/javaj/openSource/Versakit/Versakit/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@5.4.11_@types+node@22.10.1_sass@1.83.0__vue@3.5.13_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/javaj/openSource/Versakit/Versakit/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.10.1_rollup@4.28.1_typescript@5.6.3_vite@5.4.11_@types+node@22.10.1_sass@1.83.0_/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
import autoprefixer from "file:///D:/javaj/openSource/Versakit/Versakit/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.49/node_modules/autoprefixer/lib/autoprefixer.js";
import postCssPxToRem from "file:///D:/javaj/openSource/Versakit/Versakit/node_modules/.pnpm/postcss-pxtorem@6.1.0_postcss@8.4.49/node_modules/postcss-pxtorem/index.js";
import cssnano from "file:///D:/javaj/openSource/Versakit/Versakit/node_modules/.pnpm/cssnano@7.0.6_postcss@8.4.49/node_modules/cssnano/src/index.js";
import { defineConfig } from "file:///D:/javaj/openSource/Versakit/Versakit/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.1_sass@1.83.0/node_modules/vite/dist/node/index.js";
import { createSvgIconsPlugin } from "file:///D:/javaj/openSource/Versakit/Versakit/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.11_@types+node@22.10.1_sass@1.83.0_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxqYXZhalxcXFxvcGVuU291cmNlXFxcXFZlcnNha2l0XFxcXFZlcnNha2l0XFxcXHBhY2thZ2VzXFxcXHVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxqYXZhalxcXFxvcGVuU291cmNlXFxcXFZlcnNha2l0XFxcXFZlcnNha2l0XFxcXHBhY2thZ2VzXFxcXHVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9qYXZhai9vcGVuU291cmNlL1ZlcnNha2l0L1ZlcnNha2l0L3BhY2thZ2VzL3VpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBwb3N0Q3NzUHhUb1JlbSBmcm9tICdwb3N0Y3NzLXB4dG9yZW0nXG5pbXBvcnQgY3NzbmFubyBmcm9tICdjc3NuYW5vJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgZHRzKHsgdHNjb25maWdQYXRoOiAnLi4vLi4vdHNjb25maWcuYnVpbGQuanNvbicgfSksXG4gICAgdnVlKCksXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4vaWNvbnMnKV0sXG4gICAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcbiAgICB9KSxcbiAgXSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhcGk6ICdtb2Rlcm4tY29tcGlsZXInLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgYXV0b3ByZWZpeGVyKHtcbiAgICAgICAgICBvdmVycmlkZUJyb3dzZXJzbGlzdDogWydDaHJvbWUgPiA0MCcsICdmZiA+IDMxJywgJ2llIDExJ10sXG4gICAgICAgIH0pLFxuICAgICAgICBwb3N0Q3NzUHhUb1JlbSh7XG4gICAgICAgICAgcm9vdFZhbHVlOiAxNixcbiAgICAgICAgICBwcm9wTGlzdDogWycqJ10sXG4gICAgICAgIH0pLFxuICAgICAgICBjc3NuYW5vKHtcbiAgICAgICAgICBwcmVzZXQ6ICdkZWZhdWx0JyxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIC8vIFx1NjI1M1x1NTMwNVx1OTE0RFx1N0Y2RVxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ0B2dWV1c2UvY29yZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICAgICdAdnVldXNlL2NvcmUnOiAnVnVlVXNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlc2VydmVNb2R1bGVzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiAnaW5kZXgudHMnLFxuICAgICAgZm9ybWF0czogWydlcycsICd1bWQnXSxcbiAgICAgIG5hbWU6ICd2ZXJzYWtpdC11aScsXG4gICAgfSxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICAvLyBcdTk2MzJcdTZCNjIgSW5maW5pdHkgXHU4OEFCXHU1MzhCXHU3RjI5XHU2MjEwIDEvMFx1RkYwQ1x1OEZEOVx1NTNFRlx1ODBGRFx1NEYxQVx1NUJGQ1x1ODFGNCBDaHJvbWUgXHU0RTBBXHU3Njg0XHU2MDI3XHU4MEZEXHU5NUVFXHU5ODk4XG4gICAgICAgIGtlZXBfaW5maW5pdHk6IHRydWUsXG4gICAgICAgIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NTNCQlx1OTY2NCBjb25zb2xlXG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1M0JCXHU5NjY0IGRlYnVnZ2VyXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsXG4gICAgICB9LFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIGNvbW1lbnRzOiBmYWxzZSwgLy8gXHU1MjIwXHU5NjY0XHU2Q0U4XHU5MUNBXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVixPQUFPLFNBQVM7QUFDblcsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGFBQWE7QUFDcEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyw0QkFBNEI7QUFFckMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSSxFQUFFLGNBQWMsNEJBQTRCLENBQUM7QUFBQSxJQUNqRCxJQUFJO0FBQUEsSUFDSixxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUFBLE1BQ2pELFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGFBQWE7QUFBQSxVQUNYLHNCQUFzQixDQUFDLGVBQWUsV0FBVyxPQUFPO0FBQUEsUUFDMUQsQ0FBQztBQUFBLFFBQ0QsZUFBZTtBQUFBLFVBQ2IsV0FBVztBQUFBLFVBQ1gsVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNoQixDQUFDO0FBQUEsUUFDRCxRQUFRO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDVixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxPQUFPLGNBQWM7QUFBQSxNQUNoQyxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLFFBQ0EsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVIsZUFBZTtBQUFBO0FBQUEsUUFFZixjQUFjO0FBQUE7QUFBQSxRQUVkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
