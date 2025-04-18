// const Background = () => {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="100%"
//         height="100%"
//         viewBox="0 0 1600 800"
//         preserveAspectRatio="xMidYMid slice"
//         className="w-full h-full"
//       >
//         <defs>
//           {/* Gradient רקע דינמי לפי מצב אור/חושך */}
//           <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="var(--background)" />
//             <stop offset="100%" stopColor="var(--card)" />
//           </linearGradient>

//           {/* שכבות צבע עם שקיפות – מבוססות צבעי מערכת */}
//           <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
//             <stop
//               offset="100%"
//               stopColor="var(--secondary)"
//               stopOpacity="0.1"
//             />
//           </linearGradient>
//           <linearGradient id="blob2" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.12" />
//             <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.08" />
//           </linearGradient>
//         </defs>

//         {/* רקע */}
//         <rect width="1600" height="800" fill="url(#bgGradient)" />

//         {/* Blob נוזלי ראשון – צד ימין למעלה */}
//         <path
//           d="M1200,50 C1300,100 1250,300 1350,400 C1450,500 1400,700 1250,650 C1100,600 1050,400 1100,250 C1150,100 1100,0 1200,50 Z"
//           fill="url(#blob1)"
//         />

//         {/* Blob שני – צד שמאל למטה */}
//         <path
//           d="M200,700 C300,650 400,600 450,500 C500,400 400,300 300,350 C200,400 100,500 100,600 C100,700 150,750 200,700 Z"
//           fill="url(#blob2)"
//         />
//       </svg>
//     </div>
//   );
// };

// export default Background;

// // "use client";

// // const Background = () => {
// //   return (
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="100%"
// //       height="100%"
// //       viewBox="0 0 1600 800"
// //       className="fixed top-0 left-0 -z-10 w-full h-full"
// //       preserveAspectRatio="xMidYMid slice"
// //     >
// //       <defs>
// //         {/* רקע בסיסי בגוונים מודרניים */}
// //         <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
// //           <stop offset="0%" stopColor="#fdfcfb" />
// //           <stop offset="100%" stopColor="#e2d1c3" />
// //         </linearGradient>

// //         {/* גוון סגול-כחול עם תחושת עומק */}
// //         <linearGradient
// //           id="accentGradient1"
// //           x1="0%"
// //           y1="0%"
// //           x2="100%"
// //           y2="100%"
// //         >
// //           <stop offset="0%" stopColor="#6366f1" />
// //           <stop offset="100%" stopColor="#a78bfa" />
// //         </linearGradient>

// //         {/* גוון טורקיז מרענן */}
// //         <linearGradient
// //           id="accentGradient2"
// //           x1="0%"
// //           y1="0%"
// //           x2="100%"
// //           y2="100%"
// //         >
// //           <stop offset="0%" stopColor="#5eead4" />
// //           <stop offset="100%" stopColor="#99f6e4" />
// //         </linearGradient>
// //       </defs>

// //       {/* רקע מלא */}
// //       <rect fill="url(#bgGradient)" width="1600" height="800" />

// //       {/* אלמנט עיצובי דקורטיבי - גלים או קווים מופשטים */}
// //       <circle
// //         cx="400"
// //         cy="200"
// //         r="300"
// //         fill="url(#accentGradient1)"
// //         opacity="0.15"
// //       />
// //       <circle
// //         cx="1300"
// //         cy="600"
// //         r="250"
// //         fill="url(#accentGradient2)"
// //         opacity="0.2"
// //       />
// //       <path
// //         d="M0 600 Q400 300 800 600 T1600 600"
// //         fill="none"
// //         stroke="url(#accentGradient1)"
// //         strokeWidth="80"
// //         opacity="0.05"
// //       />
// //     </svg>
// //   );
// // };

// // export default Background;

// components/Background.tsx
// components/Background.tsx
// components/Background.tsx
// const Background = () => {
//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
//       {/* Grid pattern - עדין ושקוף יותר */}
//       <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] [background-size:40px_40px] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

//       {/* Glow diagonal streak - פס אלכסוני צבעוני עדין */}
//       <div className="absolute left-[-20%] top-[-10%] w-[180%] h-[200%] rotate-[-15deg] bg-gradient-to-r from-sky-300/30 via-purple-300/20 to-pink-200/30 blur-[150px] dark:from-sky-700/25 dark:via-purple-600/20 dark:to-indigo-600/25" />

//       {/* Subtle bottom glow */}
//       <div className="absolute bottom-[-20%] right-[-30%] w-[1000px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-300/20 via-purple-200/10 to-transparent blur-[160px] opacity-40 dark:from-indigo-800/20 dark:via-purple-700/10 dark:to-transparent" />
//     </div>
//   );
// };

// export default Background;
// const Background = () => {
//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
//       {/* Grid pattern – רשת עדינה */}
//       <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] [background-size:40px_40px] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]" />

//       {/* Main glowing beam – הדגשה לפסים בצבעים ברורים */}
//       <div className="absolute -top-1/4 -left-1/4 w-[250%] h-[250%] rotate-[-25deg] bg-gradient-to-r from-sky-400/30 via-purple-400/20 to-pink-300/30 blur-[120px] opacity-60 dark:from-sky-700/30 dark:via-purple-700/20 dark:to-pink-600/30" />

//       {/* Extra light diagonal streak – שכבת בהירות נוספת ליצירת עומק והפרדה */}
//       <div className="absolute left-[-20%] top-[10%] w-[180%] h-[100%] rotate-[-15deg] bg-gradient-to-r from-white/20 via-transparent to-transparent blur-[100px] opacity-20 dark:from-white/5" />

//       {/* Subtle bottom-side glow */}
//       <div className="absolute bottom-[-20%] right-[-30%] w-[1000px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-300/20 via-purple-200/10 to-transparent blur-[160px] opacity-40 dark:from-indigo-800/20 dark:via-purple-700/10 dark:to-transparent" />
//     </div>
//   );
// };

// export default Background;
const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid pattern – רשת רכה בגוון חול-תכלת */}
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(210,235,250,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(210,235,250,0.04)_1px,transparent_1px)] [background-size:40px_40px] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]" />

      {/* Main tropical glow beam */}
      <div className="absolute -top-1/4 -left-1/4 w-[250%] h-[250%] rotate-[-25deg] bg-gradient-to-r from-sky-300/30 via-teal-200/20 to-orange-100/30 blur-[120px] opacity-70 dark:from-sky-600/30 dark:via-teal-500/20 dark:to-orange-300/30" />

      {/* Diagonal highlight – כמו קרן שמש רכה */}
      <div className="absolute left-[-20%] top-[15%] w-[180%] h-[100%] rotate-[-15deg] bg-gradient-to-r from-yellow-100/30 via-transparent to-transparent blur-[100px] opacity-30 dark:from-yellow-400/10" />

      {/* Bottom tropical sunset glow */}
      <div className="absolute bottom-[-20%] right-[-30%] w-[1000px] h-[600px] rounded-full bg-gradient-to-tr from-pink-200/20 via-orange-100/10 to-transparent blur-[160px] opacity-50 dark:from-pink-600/20 dark:via-orange-400/10 dark:to-transparent" />
    </div>
  );
};

export default Background;
