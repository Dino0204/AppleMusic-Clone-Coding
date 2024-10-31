// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // 추가로, 최신 Next.js에서 사용하는 디렉토리 확인
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
