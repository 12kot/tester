// rollup.config.js
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import dotenv from "rollup-plugin-dotenv";
import replace from "@rollup/plugin-replace";
import dotenv1 from "dotenv";

dotenv1.config();

export default {
  input: "src/index.ts", // Ваш основной файл входа, расширение .ts для TypeScript
  output: [
    {
      file: "dist/bundle.js",
      format: "umd",
      name: "tester",
      sourcemap: true,
      globals: {
        axios: "axios",
      },
    },
    {
      file: "dist/bundle.min.js",
      format: "umd",
      name: "tester",
      sourcemap: true,
      plugins: [terser()],
      globals: {
        axios: "axios",
      },
    },
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.mjs",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Резолвер для разрешения модулей из node_modules
    commonjs(), // Преобразование CommonJS модулей в ES6
    typescript(), // Поддержка TypeScript
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    terser(), // Минификация кода
    replace({
      "process.env.SERVER_URL": JSON.stringify(process.env.SERVER_URL), // Замените на вашу переменную окружения
      preventAssignment: true,
    }),
    dotenv(), // Поддержка .env файлов
  ],
  external: ["axios"], // Axios считается внешней зависимостью, так как мы не хотим его включать в bundle
};
