"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

export function MotionDiv(props: HTMLMotionProps<"div">): React.JSX.Element {
  return <motion.div {...props}>{props.children}</motion.div>;
}

export function MotionP(props: HTMLMotionProps<"p">): React.JSX.Element {
  return <motion.p {...props}>{props.children}</motion.p>;
}

export function MotionH1(props: HTMLMotionProps<"h1">): React.JSX.Element {
  return <motion.h1 {...props}>{props.children}</motion.h1>;
}

export function MotionH2(props: HTMLMotionProps<"h2">): React.JSX.Element {
  return <motion.h2 {...props}>{props.children}</motion.h2>;
}

export function MotionSection(
  props: HTMLMotionProps<"section">,
): React.JSX.Element {
  return <motion.section {...props}>{props.children}</motion.section>;
}

export function MotionSpan(props: HTMLMotionProps<"span">): React.JSX.Element {
  return <motion.span {...props}>{props.children}</motion.span>;
}

export function MotionButton(
  props: HTMLMotionProps<"button">,
): React.JSX.Element {
  return <motion.button {...props}>{props.children}</motion.button>;
}

export function MotionA(props: HTMLMotionProps<"a">): React.JSX.Element {
  return <motion.a {...props}>{props.children}</motion.a>;
}

export function MotionImg(props: HTMLMotionProps<"img">): React.JSX.Element {
  return <motion.img {...props} />;
}

export function MotionInput(
  props: HTMLMotionProps<"input">,
): React.JSX.Element {
  return <motion.input {...props} />;
}

export function MotionLabel(
  props: HTMLMotionProps<"label">,
): React.JSX.Element {
  return <motion.label {...props}>{props.children}</motion.label>;
}

export function MotionForm(props: HTMLMotionProps<"form">): React.JSX.Element {
  return <motion.form {...props}>{props.children}</motion.form>;
}

export function MotionUl(props: HTMLMotionProps<"ul">): React.JSX.Element {
  return <motion.ul {...props}>{props.children}</motion.ul>;
}

export function MotionLi(props: HTMLMotionProps<"li">): React.JSX.Element {
  return <motion.li {...props}>{props.children}</motion.li>;
}

export function MotionTable(
  props: HTMLMotionProps<"table">,
): React.JSX.Element {
  return <motion.table {...props}>{props.children}</motion.table>;
}

export function MotionTr(props: HTMLMotionProps<"tr">): React.JSX.Element {
  return <motion.tr {...props}>{props.children}</motion.tr>;
}

export function MotionTd(props: HTMLMotionProps<"td">): React.JSX.Element {
  return <motion.td {...props}>{props.children}</motion.td>;
}

export function MotionTh(props: HTMLMotionProps<"th">): React.JSX.Element {
  return <motion.th {...props}>{props.children}</motion.th>;
}

export function MotionThead(
  props: HTMLMotionProps<"thead">,
): React.JSX.Element {
  return <motion.thead {...props}>{props.children}</motion.thead>;
}
