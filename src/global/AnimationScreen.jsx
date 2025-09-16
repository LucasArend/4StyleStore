// src/components/AnimationScreen.jsx
function AnimationScreen({ message, animateOut = false }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 bg-indigo-600 text-white flex items-center justify-center text-xl font-bold z-50
        ${animateOut ? "animate-slideUp" : "animate-slideDown"}`}
    >
      {message}
    </div>
  );
}

export default AnimationScreen;
