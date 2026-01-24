import { useEffect, useState } from "react";

const texts = [
  "React Developer",
  "AI & Supply Chain Engineer",
  "Machine Learning Enthusiast"
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (char < texts[index].length) {
        setText(text + texts[index][char]);
        setChar(char + 1);
      } else {
        setTimeout(() => {
          setText("");
          setChar(0);
          setIndex((index + 1) % texts.length);
        }, 1500);
      }
    }, 120);

    return () => clearTimeout(timeout);
  }, [char, index, text]);

  return <h2>{text}</h2>;
}
