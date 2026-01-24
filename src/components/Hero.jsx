import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Text above Spline */}
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          top: "40%",
          left: "5%",
          color: "white"
        }}
      >
        <h1>Hi, I'm Cygnys 👋</h1>
        <p>React Developer | AI & Supply Chain Systems</p>
      </div>

      {/* Spline Canvas */}
      <Spline
        scene="https://prod.spline.design/TjuDfVnYnwF0jTI8/scene.splinecode"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
        }}
      />

      
    </section>
  );
}
