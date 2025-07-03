/** @type {import('tailwindcss').Config} */
// tailwindcss 설정 파일입니다. src 하위의 모든 js/jsx 파일에서 Tailwind 클래스를 사용할 수 있도록 경로를 지정합니다.
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }