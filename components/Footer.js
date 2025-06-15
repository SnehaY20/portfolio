import React from "react";
import { useScrollAnimation } from "./scroll-effects/useScrollAnimation";
import content from "../data/content.json";

export default function Footer() {
  const [ref, isVisible] = useScrollAnimation(0.5);
  const { name, year } = content.footer;

  return (
    <div
      ref={ref}
      className={`framer-eIC6O framer-wk9pud framer-v-qiz0ja transform transition-all duration-800 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      data-framer-name="End"
      style={{
        width: "100%",
        opacity: 1,
      }}
    >
      {/* Name Section */}
      <div
        className="framer-z8y3xo"
        data-framer-component-type="RichTextContainer"
        style={{
          outline: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flexShrink: 0,
          "--extracted-r6o4lv":
            "var(--token-c2b9fcb6-3578-4f14-a6bc-a214ca55b7a5, rgb(231, 229, 223))",
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          transform: "none",
          opacity: 1,
        }}
      >
        <p
          className="framer-text"
          style={{
            "--font-selector": "R0Y7S291bGVuLXJlZ3VsYXI=",
            "--framer-font-family": '"Koulen", sans-serif',
            "--framer-font-size": "12px",
            "--framer-line-height": "1em",
            "--framer-text-alignment": "left",
            "--framer-text-color":
              "var(--extracted-r6o4lv, var(--token-c2b9fcb6-3578-4f14-a6bc-a214ca55b7a5, rgb(231, 229, 223)))",
            fontFamily: '"Koulen", sans-serif',
            fontSize: "12px",
            lineHeight: "1em",
            textAlign: "left",
            color: "rgb(231, 229, 223)",
            margin: 0,
          }}
        >
          {name}
        </p>
      </div>

      {/* Line Section */}
      <div
        className="framer-1hq26uc"
        data-framer-name="Line"
        style={{
          opacity: 1,
        }}
      >
        <div
          className="framer-aad369"
          data-framer-name="Black"
          style={{
            backgroundColor:
              "var(--token-99c2a2fb-c572-4a21-9b3a-79ca65ab414d, rgb(35, 35, 35))",
            opacity: 0,
          }}
        ></div>
        <div
          className="framer-lwbq55"
          data-framer-name="White"
          style={{
            backgroundColor:
              "var(--token-c2b9fcb6-3578-4f14-a6bc-a214ca55b7a5, rgb(231, 229, 223))",
            transform: "none",
            transformOrigin: "50% 50% 0px",
          }}
        ></div>
      </div>

      {/* Copyright Section */}
      <div
        className="framer-10avy4k"
        data-framer-component-type="RichTextContainer"
        style={{
          outline: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flexShrink: 0,
          "--extracted-r6o4lv":
            "var(--token-c2b9fcb6-3578-4f14-a6bc-a214ca55b7a5, rgb(231, 229, 223))",
          "--framer-link-text-color": "rgb(0, 153, 255)",
          "--framer-link-text-decoration": "underline",
          transform: "none",
          opacity: 1,
        }}
      >
        <p
          className="framer-text"
          style={{
            "--font-selector": "R0Y7S291bGVuLXJlZ3VsYXI=",
            "--framer-font-family": '"Koulen", sans-serif',
            "--framer-font-size": "12px",
            "--framer-line-height": "1em",
            "--framer-text-alignment": "left",
            "--framer-text-color":
              "var(--extracted-r6o4lv, var(--token-c2b9fcb6-3578-4f14-a6bc-a214ca55b7a5, rgb(231, 229, 223)))",
            fontFamily: '"Koulen", sans-serif',
            fontSize: "12px",
            lineHeight: "1em",
            textAlign: "left",
            color: "rgb(231, 229, 223)",
            margin: 0,
          }}
        >
          © {year}
        </p>
      </div>
    </div>
  );
}
