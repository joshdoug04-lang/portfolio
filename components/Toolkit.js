import { skills } from "@/data/skills";
import Section from "./Section";
import Text from "./Text";

export default function Toolkit() {
  return (
    <Section id="toolkit" label="AI Toolkit" title="The tools I build with." dark>
      <ul className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-4 rounded-2xl border border-line-inv bg-ink-soft px-6 py-5 text-lg"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-inv"
            />
            <Text>{skill}</Text>
          </li>
        ))}
      </ul>
    </Section>
  );
}
